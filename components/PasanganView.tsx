import React from 'react';
import Layout from './Layout';
import { NGLEGENA_DATA } from '../constants';

interface Props {
  onBack: () => void;
}

const PasanganView: React.FC<Props> = ({ onBack }) => {
  return (
    <Layout title="Pasangan Aksara" onBack={onBack}>
      <div className="mb-6 bg-blue-100 p-4 rounded-xl border-l-4 border-jawa-blue text-sm sm:text-base">
        <h3 className="font-bold text-jawa-blue mb-1">Apa itu Pasangan?</h3>
        <p>Pasangan digunakan untuk mematikan vokal huruf sebelumnya. Pasangan bisa ditulis di samping (sejajar) atau di bawah huruf yang dimatikan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {NGLEGENA_DATA.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between hover:border-jawa-blue transition-colors">
            <div className="text-center w-1/2 border-r border-gray-100 pr-2">
              <div className="text-gray-400 text-xs uppercase mb-1">Nglegena</div>
              <div className="text-3xl aksara-font text-gray-800">{item.char}</div>
              <div className="font-bold text-jawa-brown">{item.latin}</div>
            </div>
            <div className="text-center w-1/2 pl-2">
              <div className="text-gray-400 text-xs uppercase mb-1">Pasangan</div>
              <div className="text-3xl aksara-font text-jawa-blue">{item.pasangan?.replace('◌', '')}</div>
              <div className="text-xs font-semibold bg-gray-100 rounded px-2 py-0.5 inline-block mt-1 text-gray-600">
                {item.pasanganPos}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default PasanganView;
