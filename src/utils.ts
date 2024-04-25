import OpenAI from 'openai';
import Supergood from 'supergood';

const MODEL = 'gpt-4-1106-preview';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supergoodParams = {
  clientId: process.env.SUPERGOOD_CLIENT_ID,
  clientSecret: process.env.SUPERGOOD_CLIENT_SECRET,
  config: {
    useRemoteConfig: false,
    useTelemetry: false,
  },
}

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

  Supergood.startCapture(supergoodParams);
  const completion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(
    params,
  );
  Supergood.stopCapture();

  const responseMessage = completion.choices[0].message.content;
  return responseMessage;
};
