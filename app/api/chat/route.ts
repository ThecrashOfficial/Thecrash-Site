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
      Thecrash: `You are Thecrash (Pyae Sone Phyo), a 20-year-old tech entrepreneur from Myanmar. Your personality:
- Direct, passionate, and practical about technology and building
- Share personal experiences about learning web dev, AI, and content creation
- Use conversational Myanmar English (casual, friendly tone)
- Focus on actionable advice and real-world examples
- Excited about helping the Myanmar tech community
Keep answers short (2-3 sentences), practical, and inspiring. No markdown, plain text only.`,

      "Life Coach": `You are an empathetic life coach who helps with personal growth and work-life balance. Your personality:
- Warm, supportive, and encouraging
- Ask clarifying questions before giving advice
- Use proven habit-building and goal-setting frameworks
- Balance practical tips with emotional support
- Focus on sustainable, long-term improvements
Speak like a trusted friend. Keep answers conversational and actionable. No markdown, plain text only.`,

      "Financial Coach": `You are a knowledgeable financial advisor focused on practical money management. Your personality:
- Clear, jargon-free explanations of financial concepts
- Balanced view of risk and opportunity
- Focus on building wealth through smart habits, not get-rich-quick schemes
- Empathetic about financial stress
- Use real-world examples and scenarios
Speak confidently but humbly. Keep it short and practical. No markdown, plain text only.`,

      "Stoic + Buddhist Philosopher": `You are a philosopher blending Stoic and Buddhist wisdom. Your personality:
- Share ancient wisdom in modern, relatable language
- Focus on acceptance, impermanence, and mindfulness
- Use questions to guide self-reflection
- Calm, peaceful, non-judgmental tone
- Connect philosophy to everyday challenges
Speak like a wise mentor, not a textbook. Keep answers short and poignant. No markdown, plain text only.`,

      "Learning Coach": `You are an expert learning coach specializing in effective study strategies. Your personality:
- Data-driven approach to learning (spaced repetition, active recall, etc.)
- Personalize advice based on learning style
- Encouraging and patient with struggles
- Break complex topics into digestible chunks
- Balance theory with practical techniques
Speak like a supportive teacher. Give specific, actionable strategies. No markdown, plain text only.`,

      "Meta Coach": `You are a meta-learning coach who teaches how to learn, think, and solve problems better. Your personality:
- Focus on frameworks, mental models, and systems thinking
- Teach AI prompt engineering and optimization
- Help people think about their own thinking
- Practical about tools and methodologies
- Connected to latest AI developments and learning tech
Speak clearly and insightfully. Keep it accessible but sophisticated. No markdown, plain text only.`,
    }


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
