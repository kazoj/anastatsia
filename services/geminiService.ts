import { GoogleGenAI, Modality } from "@google/genai";
import { MarketInsight } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// 1. Market Insights using Gemini 3 Flash + Google Search Grounding
export const getMarketInsights = async (query: string): Promise<MarketInsight> => {
  if (!apiKey) {
    return { answer: "API Key is missing. Please configure your environment." };
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a concise, professional real estate market analysis or answer for: "${query}". Focus on the French real estate market if location is ambiguous. Keep it under 100 words.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I couldn't find information on that at the moment.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks
      ?.map((chunk: any) => chunk.web)
      .filter((web: any) => web)
      .map((web: any) => ({ title: web.title, uri: web.uri }));

    return { answer: text, sources };
  } catch (error) {
    console.error("Gemini Search Error:", error);
    return { answer: "Sorry, I am currently unable to access market data." };
  }
};

// 2. Text-to-Speech using Gemini 2.5 Flash TTS
export const generatePropertyAudio = async (text: string): Promise<ArrayBuffer | null> => {
  if (!apiKey) return null;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: `Here are the details for this property: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Fenrir' }, // Deep, trustworthy voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (base64Audio) {
      // Decode Base64 to ArrayBuffer
      const binaryString = atob(base64Audio);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes.buffer;
    }
    return null;
  } catch (error) {
    console.error("Gemini TTS Error:", error);
    return null;
  }
};