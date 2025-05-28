const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const chatbot = require("./chatbot");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommend", async (req, res) => {
  const userInput = req.body.message;

  if (!userInput) {
    return res.status(400).json({ error: "Disease is required" });
  }

  try {
    const response = await chatbot(userInput);
    res.json({ reply: response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
