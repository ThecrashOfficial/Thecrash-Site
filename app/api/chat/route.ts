import { type NextRequest, NextResponse } from "next/server"

const GEMINI_API_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
  process.env.GEMINI_API_KEY_5,
  process.env.GEMINI_API_KEY_7,
  process.env.GEMINI_API_KEY,
  "AIzaSyDost7ccvla-LxDKSOD3DKba9Ayjvp4lx4",
  "AIzaSyCS-LPAGqXoHFg7kjsB4lNBF8jerBB-KM8",
  "AIzaSyCIg6eWHiFTA1tmFfwABG17o58o9au4Lgs",
  "AIzaSyA5f983HL94FtSHenJHwEnP1Gywl2UXCog",
  "AIzaSyC2yo2ho4hsUcTPuhKilaDzsPNqXT0VLcM",
].filter(Boolean) // Remove any undefined keys

let currentKeyIndex = 0

function getNextApiKey(): string {
  if (GEMINI_API_KEYS.length === 0) {
    throw new Error("No Gemini API keys available")
  }
  const key = GEMINI_API_KEYS[currentKeyIndex]
  currentKeyIndex = (currentKeyIndex + 1) % GEMINI_API_KEYS.length
  return key as string
}

export async function POST(request: NextRequest) {
  try {
    const { messages, mentor } = await request.json()

    // Build system prompt based on selected mentor
const systemPrompts: Record<string, string> = {
  Thecrash:
    "You are Thecrash, a 20-year-old tech entrepreneur from Myanmar. Speak naturally as if talking to a friend. Keep answers short, simple, and direct. Focus on AI, web, and content creation. No markdown, plain text only.",
  "Life Coach":
    "You are a life coach. Speak like you are chatting with a friend. Give practical advice on personal growth and habits. Keep it short and clear. No markdown, plain text only.",
  "Financial Coach":
    "You are a financial advisor. Speak simply and clearly about money, saving, and investing. Keep answers short, friendly, and direct. No markdown.",
  "Stoic + Buddhist Philosopher":
    "You are a Stoic and Buddhist philosopher. Share wisdom simply, clearly, and in a friendly conversational tone. Keep answers short. Plain text only.",
  "Learning Coach":
    "You are a learning specialist. Give practical learning tips in a short, clear, friendly style. No markdown, plain text only.",
  "Meta Coach":
    "You are a meta-learning coach. Explain AI, prompts, and learning strategies simply and briefly, as if chatting with a friend. Plain text only, no formatting."
};


    const systemPrompt = systemPrompts[mentor] || systemPrompts["Thecrash"]

    const lastUserMessage = messages[messages.length - 1]?.content || ""
    const conversationHistory = messages
      .slice(0, -1)
      .map((msg: { role: string; content: string }) => `${msg.role}: ${msg.content}`)
      .join("\n")

    const fullPrompt = `${systemPrompt}\n\n${conversationHistory ? conversationHistory + "\n" : ""}user: ${lastUserMessage}`

    let lastError: Error | null = null
    for (let attempt = 0; attempt < GEMINI_API_KEYS.length; attempt++) {
      try {
        const apiKey = getNextApiKey()
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: fullPrompt,
                  },
                ],
              },
            ],
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          console.error(`[v0] Gemini API error (attempt ${attempt + 1}):`, errorData)

          // If key is expired or invalid, try next key
          if (errorData.error?.details?.[0]?.reason === "API_KEY_INVALID") {
            continue
          }

          throw new Error(`Gemini API error: ${response.statusText}`)
        }

        const data = await response.json()
        const aiResponse =
          data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, but I couldn't generate a response."

        return NextResponse.json({ response: aiResponse })
      } catch (error) {
        lastError = error as Error
        console.error(`[v0] API key attempt ${attempt + 1} failed:`, error)
        continue
      }
    }

    // If all keys failed, throw the last error
    throw lastError || new Error("All API keys failed")
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ error: "Failed to generate response. Please try again." }, { status: 500 })
  }
}
