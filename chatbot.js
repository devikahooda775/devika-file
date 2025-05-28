const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatbot(userInput) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a health recommendation system. When someone tells you about a chronic disease, suggest foods, recipes, meditation techniques, and yoga postures to help them.",
      },
      {
        role: "user",
        content: userInput,
      },
    ],
  });
  return completion.data.choices[0].message.content;
}

module.exports = chatbot;
