import React, { useState } from 'react';
import Layout from './Layout';
import { generateExamples } from '../services/geminiService';
import { AIExampleData } from '../types';

interface Props {
  onBack: () => void;
}

const DynamicExamples: React.FC<Props> = ({ onBack }) => {
  const [examples, setExamples] = useState<AIExampleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleGenerate = async () => {
    setLoading(true);
    setExpandedIndex(null);
    const newExamples = await generateExamples(3);
    setExamples(newExamples);
    setLoading(false);
  };

  return (
    <Layout title="Contoh Kata (AI)" onBack={onBack}>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg mb-6">
           <h2 className="text-2xl font-bold mb-2">Belajar Kata Ajaib! ✨</h2>
           <p className="mb-4">Minta kecerdasan buatan (AI) untuk membuatkan contoh kata baru.</p>
           <button 
            onClick={handleGenerate}
            disabled={loading}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
           >
             {loading ? (
               <>
                 <svg className="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                 </svg>
                 Sedang Membuat...
               </>
             ) : (
               <>🪄 Buat Contoh Baru</>
             )}
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {examples.length === 0 && !loading && (
            <div className="text-center text-gray-400 py-12">
                <p>Belum ada contoh kata. Klik tombol di atas!</p>
            </div>
        )}

        {examples.map((item, index) => (
          <div 
            key={index} 
            className={`bg-white border-2 border-purple-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${expandedIndex === index ? 'ring-2 ring-purple-400' : 'hover:border-purple-300'}`}
          >
            <button 
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
                        {index + 1}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.wordLatin}</h3>
                        <p className="text-2xl aksara-font text-purple-600">{item.wordJavanese}</p>
                    </div>
                </div>
                <svg 
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            
            {expandedIndex === index && (
                <div className="p-4 bg-purple-50 border-t border-purple-100 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-xs font-bold text-purple-400 uppercase mb-1">Arti</h4>
                            <p className="text-gray-700 font-medium text-lg">{item.meaning}</p>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold text-purple-400 uppercase mb-1">Contoh Kalimat</h4>
                            <p className="text-gray-800 italic">"{item.sentenceLatin}"</p>
                            <p className="text-xl aksara-font text-gray-600 mt-1">{item.sentenceJavanese}</p>
                        </div>
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default DynamicExamples;
