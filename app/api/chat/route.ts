export async function POST(req: Request) {
  try {
    console.log("[v0] Chat API called")
    const apiKey = process.env.GOOGLE_GENERATION_API_KEY
    if (!apiKey) {
      console.error("[v0] Google API key is missing")
      return new Response(
        JSON.stringify({
          error: "API key not configured",
          message: "Please add GOOGLE_GENERATION_API_KEY to your environment variables",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    const { messages, reports } = await req.json()

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: "No messages provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Format reports context
    let reportsContext = "The user has not submitted any reports yet."
    if (reports && reports.length > 0) {
      reportsContext =
        "User's Reports:\n" +
        reports
          .map(
            (r: any, i: number) =>
              `${i + 1}. ${r.title} - Status: ${r.status || "Pending"} - Location: ${r.location || "Not specified"}`,
          )
          .join("\n")
    }

    const systemPrompt = `You are CivicSense AI, a helpful assistant for a municipal issue reporting app. 
Your job is to help users understand the status of their reports and provide guidance on civic issues.
Keep your responses professional, helpful, and concise (max 2-3 sentences).

${reportsContext}

If the user asks about a specific report, refer to the details provided. 
If they haven't submitted anything, guide them on how to use the app.`

    // Convert messages to Google Gemini format - add system as first message
    const geminiMessages = [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "model",
        parts: [
          {
            text: "I understand. I'm CivicSense AI and I'm here to help you with your civic reports and municipal issues.",
          },
        ],
      },
      ...messages.map((m: any) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })),
    ]

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: geminiMessages,
        }),
      },
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Gemini API error:", errorData)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const result = await response.json()
    const assistantMessage =
      result.candidates?.[0]?.content?.parts?.[0]?.text || "I'm unable to process your request at the moment."

    return new Response(JSON.stringify({ message: assistantMessage }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("[v0] Chat API Error:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to process chat request",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}
