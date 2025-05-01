const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: `Create a simple React website with TailwindCSS for: ${prompt}` }],
    });
    const code = completion.data.choices[0].message.content;
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Import and use Stripe route
const paymentsRouter = require("./routes/payments");
app.use("/api/payments", paymentsRouter);

app.listen(3001, () => console.log("Backend running on http://localhost:3001"));
