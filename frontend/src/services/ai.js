export async function generateWebsiteCode(prompt) {
  const res = await fetch("http://localhost:3001/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });
  const data = await res.json();
  return data.code;
}
