import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("[v0] Missing Supabase environment variables");
    console.error("[v0] NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl);
    console.error("[v0] NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey ? "set" : "not set");
    throw new Error(
      "Missing Supabase environment variables. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your Vercel project settings."
    );
  }

  console.log("[v0] Creating Supabase client with URL:", supabaseUrl);

  try {
    const client = createBrowserClient(supabaseUrl, supabaseAnonKey);
    console.log("[v0] Supabase client created successfully");
    return client;
  } catch (error) {
    console.error("[v0] Failed to create Supabase client:", error);
    throw error;
  }
};
