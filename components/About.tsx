import React from 'react';
import Layout from './Layout';

interface Props {
  onBack: () => void;
}

const About: React.FC<Props> = ({ onBack }) => {
  return (
    <Layout title="Tentang Aplikasi" onBack={onBack}>
      <div className="max-w-2xl mx-auto text-center space-y-8">
         <div className="relative inline-block">
            <div className="w-40 h-40 rounded-full bg-jawa-brown p-2 mx-auto shadow-xl">
               <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden border-4 border-white flex items-center justify-center">
                  <span className="text-6xl">👨‍🎓</span>
               </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-jawa-gold text-jawa-brown px-4 py-1 rounded-full font-bold shadow-md text-sm">
               Developer Cilik
            </div>
         </div>

         <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-jawa-brown mb-1">Guruh Saputra</h2>
            <p className="text-jawa-blue font-semibold mb-6">Siswa Kelas 6</p>
            
            <div className="space-y-2 text-gray-600">
               <p className="flex items-center justify-center gap-2">
                  <span>🏫</span> 
                  <span>SD Negeri Batur 01</span>
               </p>
               <p className="flex items-center justify-center gap-2">
                  <span>📍</span> 
                  <span>Kecamatan Getasan</span>
               </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <h3 className="font-bold text-gray-800 mb-2">Tujuan Aplikasi</h3>
               <p className="text-sm text-gray-600 leading-relaxed">
                  "Agar teman-teman siswa SD dapat belajar Aksara Jawa dengan cara yang interaktif, menyenangkan, modern, dan memanfaatkan teknologi AI."
               </p>
            </div>
         </div>
         
         <div className="flex justify-center gap-4 opacity-60">
            {/* Decorative ornaments */}
            <span className="text-2xl">🌿</span>
            <span className="text-2xl">👺</span>
            <span className="text-2xl">🗡️</span>
         </div>
      </div>
    </Layout>
  );
};

export default About;
