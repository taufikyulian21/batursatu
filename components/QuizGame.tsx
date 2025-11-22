import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { generateQuiz } from '../services/geminiService';
import { QuizQuestion, QuizType } from '../types';

interface Props {
  onBack: () => void;
}

const QuizGame: React.FC<Props> = ({ onBack }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'START' | 'LOADING' | 'PLAYING' | 'FINISHED'>('START');
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState<'CORRECT' | 'WRONG' | null>(null);

  useEffect(() => {
    let timer: number;
    if (gameState === 'PLAYING' && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === 'PLAYING') {
      setGameState('FINISHED');
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const startGame = async () => {
    setGameState('LOADING');
    const quizData = await generateQuiz(5);
    setQuestions(quizData);
    setScore(0);
    setCurrentQIndex(0);
    setTimeLeft(60); // 60 seconds for 5 questions
    setGameState('PLAYING');
  };

  const handleAnswer = (choiceIndex: number) => {
    const currentQuestion = questions[currentQIndex];
    const isCorrect = choiceIndex === currentQuestion.correctAnswerIndex;

    if (isCorrect) {
      setScore((s) => s + 20);
      setFeedback('CORRECT');
    } else {
      setFeedback('WRONG');
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentQIndex < questions.length - 1) {
        setCurrentQIndex((prev) => prev + 1);
      } else {
        setGameState('FINISHED');
      }
    }, 1500);
  };

  // Render Start Screen
  if (gameState === 'START') {
    return (
      <Layout title="Kuis Aksara" onBack={onBack}>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
          <div className="w-32 h-32 bg-jawa-red rounded-full flex items-center justify-center shadow-xl animate-float">
            <span className="text-6xl">🎮</span>
          </div>
          <h2 className="text-3xl font-bold text-jawa-brown">Siap Bermain?</h2>
          <p className="text-gray-600 max-w-md">
            Jawab 5 soal seru tentang Aksara Jawa. Kamu punya waktu 60 detik!
          </p>
          <button
            onClick={startGame}
            className="bg-jawa-gold text-jawa-brown text-xl font-bold py-3 px-10 rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all"
          >
            Mulai Game!
          </button>
        </div>
      </Layout>
    );
  }

  // Render Loading
  if (gameState === 'LOADING') {
    return (
       <Layout title="Kuis Aksara" onBack={onBack}>
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-jawa-brown mb-4"></div>
            <p className="text-xl font-bold text-gray-600">Menyiapkan Soal...</p>
            <p className="text-sm text-gray-400">AI sedang bekerja</p>
          </div>
       </Layout>
    );
  }

  // Render Finished
  if (gameState === 'FINISHED') {
    return (
      <Layout title="Hasil Kuis" onBack={() => setGameState('START')}>
        <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
          <div className="text-6xl mb-2">
            {score >= 80 ? '🏆' : score >= 50 ? '👏' : '📚'}
          </div>
          <h2 className="text-4xl font-bold text-jawa-brown">Skor Kamu</h2>
          <div className="text-8xl font-black text-jawa-gold drop-shadow-md">{score}</div>
          <p className="text-gray-600">
            {score === 100 ? "Luar biasa! Sempurna!" : score >= 60 ? "Bagus sekali, terus belajar!" : "Ayo coba lagi!"}
          </p>
          <button
            onClick={() => setGameState('START')}
            className="bg-jawa-green text-white text-lg font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            Main Lagi
          </button>
        </div>
      </Layout>
    );
  }

  const currentQ = questions[currentQIndex];

  // Render Playing
  return (
    <Layout title={`Soal ${currentQIndex + 1}/${questions.length}`} onBack={onBack}>
      <div className="flex justify-between items-center mb-6 bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center gap-2">
           <span className="text-xl">⭐</span>
           <span className="font-bold text-jawa-brown">{score}</span>
        </div>
        <div className={`font-mono font-bold text-xl ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-jawa-blue'}`}>
           ⏳ {timeLeft}s
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100 mb-6 text-center relative overflow-hidden">
        {feedback && (
          <div className={`absolute inset-0 flex items-center justify-center bg-white/90 z-10`}>
             <div className={`text-6xl font-bold ${feedback === 'CORRECT' ? 'text-green-500' : 'text-red-500'} animate-bounce`}>
                {feedback === 'CORRECT' ? 'Benar! 🎉' : 'Salah 😢'}
             </div>
          </div>
        )}

        <h3 className="text-xl font-semibold text-gray-800 mb-4">{currentQ.questionText}</h3>
        {currentQ.questionScript && (
          <div className="bg-jawa-cream p-6 rounded-lg border border-jawa-gold inline-block mb-4">
            <span className="text-5xl aksara-font text-jawa-brown">{currentQ.questionScript}</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {currentQ.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(idx)}
            disabled={feedback !== null}
            className="p-4 rounded-xl border-2 border-jawa-blue/20 bg-blue-50 hover:bg-jawa-blue hover:text-white hover:border-jawa-blue transition-all text-lg font-semibold shadow-sm active:scale-95"
          >
             {option}
          </button>
        ))}
      </div>
      
      {feedback === 'WRONG' && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-center text-sm">
              Jawaban yang benar: <span className="font-bold">{currentQ.options[currentQ.correctAnswerIndex]}</span>. <br/>
              {currentQ.explanation}
          </div>
      )}
    </Layout>
  );
};

export default QuizGame;
