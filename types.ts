export enum ScreenState {
  HOME = 'HOME',
  NGLEGENA = 'NGLEGENA',
  PASANGAN = 'PASANGAN',
  SANDHANGAN = 'SANDHANGAN',
  EXAMPLES = 'EXAMPLES',
  QUIZ = 'QUIZ',
  ABOUT = 'ABOUT',
}

export interface AksaraData {
  char: string; // The Javanese character
  latin: string; // The Latin reading
  description?: string;
  pasangan?: string; // The Javanese pasangan character
  pasanganPos?: 'bawah' | 'sejajar'; // Position of pasangan
}

export interface SandhanganData {
  char: string;
  name: string;
  latin: string; // e.g., 'i', 'u', 'r'
  type: 'swara' | 'panyigeg' | 'wyanjana';
  description: string;
  example: string; // Example word in Javanese
  exampleLatin: string;
}

export interface AIExampleData {
  wordLatin: string;
  wordJavanese: string;
  meaning: string;
  sentenceLatin: string;
  sentenceJavanese: string;
}

export enum QuizType {
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
}

export interface QuizQuestion {
  id: number;
  type: QuizType;
  questionText: string;
  questionScript?: string; // Optional Javanese script to display
  options: string[]; // Choices
  correctAnswerIndex: number; // 0-3
  explanation: string;
}
