import React from 'react';
import { ScreenState } from '../types';

interface Props {
  onNavigate: (screen: ScreenState) => void;
}

const Menu: React.FC<Props> = ({ onNavigate }) => {
  const menuItems = [
    { 
      id: ScreenState.NGLEGENA, 
      label: 'Aksara Nglegena', 
      icon: '📖', 
      color: 'bg-red-500',
      desc: 'Belajar 20 huruf dasar'
    },
    { 
      id: ScreenState.PASANGAN, 
      label: 'Pasangan', 
      icon: '🧩', 
      color: 'bg-orange-500',
      desc: 'Huruf pasangan mati'
    },
    { 
      id: ScreenState.SANDHANGAN, 
      label: 'Sandhangan', 
      icon: '🎼', 
      color: 'bg-green-500',
      desc: 'Tanda bunyi vokal'
    },
    { 
      id: ScreenState.EXAMPLES, 
      label: 'Kata Ajaib (AI)', 
      icon: '✨', 
      color: 'bg-purple-500',
      desc: 'Contoh kata otomatis'
    },
    { 
      id: ScreenState.QUIZ, 
      label: 'Kuis Game', 
      icon: '🎮', 
      color: 'bg-blue-500',
      desc: 'Uji kemampuanmu'
    },
    { 
      id: ScreenState.ABOUT, 
      label: 'Tentang', 
      icon: 'ℹ️', 
      color: 'bg-gray-600',
      desc: 'Profil pembuat'
    },
  ];

  return (
    <div className="min-h-screen bg-jawa-cream bg-batik flex items-center justify-center p-4 font-fredoka">
      <div className="max-w-4xl w-full">
        
        <div className="text-center mb-10 animate-float">
          <h1 className="text-4xl md:text-6xl font-bold text-jawa-brown drop-shadow-md mb-2">
            Sinau Aksara Jawa
          </h1>
          <div className="bg-jawa-gold text-jawa-brown inline-block px-6 py-2 rounded-full border-2 border-jawa-brown shadow-lg">
             <span className="text-2xl md:text-3xl aksara-font font-medium">ꦱꦶꦤꦲꦸꦲꦏ꧀ꦱꦫꦗꦮ</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {menuItems.map((item) => (
             <button
               key={item.id}
               onClick={() => onNavigate(item.id)}
               className="group bg-white rounded-2xl shadow-xl border-b-8 border-gray-200 active:border-b-0 active:translate-y-2 transition-all duration-150 overflow-hidden hover:shadow-2xl"
             >
                <div className={`${item.color} h-3`}></div>
                <div className="p-6 flex items-center gap-4">
                   <div className={`${item.color} w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-inner text-white`}>
                      {item.icon}
                   </div>
                   <div className="text-left">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-jawa-brown">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                   </div>
                </div>
             </button>
           ))}
        </div>

        <div className="mt-12 text-center">
           <p className="text-jawa-brown opacity-60 text-sm">SD Negeri Batur 01 - Getasan</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
