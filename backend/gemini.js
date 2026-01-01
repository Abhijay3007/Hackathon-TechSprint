import 'dotenv/config';
import fetch from "node-fetch";

export async function classifyComplaint(text) {
  const prompt = `
Classify civic complaint:
"${text}"

Return JSON:
{
  "category": "",
  "priority": "Low | Medium | High",
  "summary": ""
}
`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    }
  );

  const data = await res.json();
  return JSON.parse(data.candidates[0].content.parts[0].text);
}
