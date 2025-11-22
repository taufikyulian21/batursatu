import React from 'react';
import Layout from './Layout';
import { SANDHANGAN_DATA } from '../constants';

interface Props {
  onBack: () => void;
}

const SandhanganView: React.FC<Props> = ({ onBack }) => {
  return (
    <Layout title="Sandhangan" onBack={onBack}>
       <div className="mb-8">
        <p className="text-gray-700 text-center max-w-2xl mx-auto">
          Sandhangan adalah tanda baca yang mengubah bunyi vokal dasar (a) atau mematikan huruf.
        </p>
      </div>

      <div className="space-y-8">
        {/* Group by Type Logic in UI */}
        {['swara', 'panyigeg'].map((typeKey) => (
          <div key={typeKey} className="bg-white rounded-2xl border-2 border-dashed border-jawa-green/50 p-6">
             <h3 className="text-xl font-bold text-jawa-green mb-4 capitalize flex items-center gap-2">
                {typeKey === 'swara' ? '🔊 Sandhangan Swara (Vokal)' : '🛑 Sandhangan Panyigeg (Penutup)'}
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SANDHANGAN_DATA.filter(s => s.type === typeKey).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-green-50 p-4 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-white rounded-full border-2 border-jawa-green flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl aksara-font text-gray-800">{item.char}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-2 italic">{item.description}</p>
                      <div className="bg-white px-3 py-1 rounded border border-green-200 text-sm inline-flex gap-2 items-center">
                        <span className="text-xs text-gray-400 uppercase">Contoh:</span>
                        <span className="aksara-font text-lg">{item.example}</span>
                        <span className="font-bold text-jawa-green">({item.exampleLatin})</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default SandhanganView;
