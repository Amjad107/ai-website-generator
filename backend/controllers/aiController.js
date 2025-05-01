// Optional controller if you want to separate logic from server.js

exports.generateCode = async (req, res, openai) => {
  try {
    const { prompt } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: `Create a simple React website with TailwindCSS for: ${prompt}` }],
    });
    res.json({ code: completion.data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
