import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AIExampleData, QuizQuestion, QuizType } from "../types";

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const exampleSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    wordLatin: { type: Type.STRING },
    wordJavanese: { type: Type.STRING, description: "The word written in Javanese script (Unicode)" },
    meaning: { type: Type.STRING, description: "Meaning in Indonesian" },
    sentenceLatin: { type: Type.STRING, description: "A simple example sentence in Javanese (Latin script)" },
    sentenceJavanese: { type: Type.STRING, description: "The example sentence in Javanese script (Unicode)" }
  },
  required: ["wordLatin", "wordJavanese", "meaning", "sentenceLatin", "sentenceJavanese"]
};

const quizSchema: Schema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.INTEGER },
      type: { type: Type.STRING, enum: [QuizType.MULTIPLE_CHOICE, QuizType.TRUE_FALSE] },
      questionText: { type: Type.STRING, description: "The question in Indonesian" },
      questionScript: { type: Type.STRING, description: "Javanese script related to the question (optional, if needed)" },
      options: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "4 options for multiple choice, or True/False labels"
      },
      correctAnswerIndex: { type: Type.INTEGER },
      explanation: { type: Type.STRING, description: "Short explanation in Indonesian" }
    },
    required: ["id", "type", "questionText", "options", "correctAnswerIndex", "explanation"]
  }
};

export const generateExamples = async (count: number = 1): Promise<AIExampleData[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate ${count} simple, common Javanese words suitable for elementary school students. 
      Include the Javanese script, Latin script, Indonesian meaning, and a simple usage sentence.
      Ensure the Javanese script is valid Unicode.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
           type: Type.ARRAY,
           items: exampleSchema
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as AIExampleData[];
  } catch (error) {
    console.error("Error generating examples:", error);
    return [];
  }
};

export const generateQuiz = async (count: number = 5): Promise<QuizQuestion[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Create ${count} quiz questions about Javanese Script (Aksara Jawa) for Grade 6 students.
      Variations:
      1. Identify the script (Question shows Script, Options are Latin).
      2. Identify the correct script (Question shows Latin, Options are Scripts).
      3. Sandhangan usage.
      4. Simple sentence puzzle (True/False).
      
      Make it fun and educational. Ensure Javanese unicode is correct.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema
      }
    });

    const text = response.text;
    if (!text) return [];
    return JSON.parse(text) as QuizQuestion[];
  } catch (error) {
    console.error("Error generating quiz:", error);
    // Return fallback dummy data if API fails
    return [
      {
        id: 1,
        type: QuizType.MULTIPLE_CHOICE,
        questionText: "Apa bacaan dari aksara ini?",
        questionScript: "ꦲ",
        options: ["Ha", "Na", "Ca", "Ra"],
        correctAnswerIndex: 0,
        explanation: "Aksara tersebut adalah 'Ha'."
      }
    ];
  }
};
