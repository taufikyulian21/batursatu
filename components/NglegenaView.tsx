import React, { useState } from 'react';
import Layout from './Layout';
import { NGLEGENA_DATA } from '../constants';
import { AksaraData } from '../types';

interface Props {
  onBack: () => void;
}

const NglegenaView: React.FC<Props> = ({ onBack }) => {
  const [selectedChar, setSelectedChar] = useState<AksaraData | null>(null);

  return (
    <Layout title="Aksara Nglegena" onBack={onBack}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-jawa-brown mb-2">20 Aksara Dasar</h2>
        <p className="text-gray-600">Klik pada huruf untuk melihat detail dan cara menulis!</p>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
        {NGLEGENA_DATA.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedChar(item)}
            className={`aspect-square rounded-xl shadow-md border-2 flex flex-col items-center justify-center transition-all transform hover:scale-105 hover:rotate-2
              ${selectedChar?.char === item.char ? 'bg-jawa-gold border-jawa-brown' : 'bg-white border-jawa-gold hover:bg-yellow-50'}
            `}
          >
            <span className="text-3xl sm:text-4xl aksara-font mb-1">{item.char}</span>
            <span className="text-sm font-bold text-jawa-brown">{item.latin}</span>
          </button>
        ))}
      </div>

      {selectedChar && (
        <div className="mt-10 p-6 bg-jawa-cream rounded-2xl border-2 border-jawa-brown shadow-inner flex flex-col md:flex-row items-center gap-8 animate-fade-in">
           <div className="w-40 h-40 bg-white rounded-xl border-4 border-jawa-gold flex items-center justify-center shadow-lg relative overflow-hidden group">
              <span className="text-8xl aksara-font text-jawa-brown animate-pulse">{selectedChar.char}</span>
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">Nglegena</div>
           </div>
           <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-jawa-brown mb-2">{selectedChar.latin}</h3>
              <p className="text-lg mb-4">
                Merupakan salah satu dari 20 huruf dasar (Dentawyanjana).
              </p>
              <div className="bg-white p-4 rounded-lg inline-block text-left border border-gray-200">
                <p className="font-semibold text-gray-700">Tips Mengingat:</p>
                <p>Bentuk <strong>{selectedChar.char}</strong> mirip dengan... (Ayo imajinasikan!)</p>
              </div>
           </div>
        </div>
      )}
    </Layout>
  );
};

export default NglegenaView;
