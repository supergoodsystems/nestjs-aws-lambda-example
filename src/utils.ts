import OpenAI from 'openai';

const MODEL = 'gpt-4-1106-preview';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const createPoem = async (word) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [
      {
        role: 'user',
        content: `Come up with a poem based on the word '${word}'`,
      },
    ],
    model: MODEL,
  };

  const completion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(
    params,
  );

  const responseMessage = completion.choices[0].message.content;
  return responseMessage;
}

export const nameMyDog = async (word) => {
  const params: OpenAI.Chat.ChatCompletionCreateParams = {
    messages: [
      {
        role: 'user',
        content: `Can you come up with a unique name for my dog based on the word '${word}'? Only return the name, no yapping.`,
      },
    ],
    model: MODEL,
  };

  const completion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(
    params,
  );

  const responseMessage = completion.choices[0].message.content;
  return responseMessage;
};
