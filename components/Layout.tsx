import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title: string;
  onBack?: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, title, onBack }) => {
  return (
    <div className="min-h-screen bg-jawa-cream bg-batik text-gray-800 flex flex-col font-fredoka overflow-x-hidden">
      {/* Header */}
      <header className="bg-jawa-brown text-jawa-gold p-4 shadow-lg border-b-4 border-jawa-gold relative z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onBack && (
              <button 
                onClick={onBack}
                className="bg-jawa-gold text-jawa-brown p-2 rounded-full hover:bg-yellow-300 transition-colors shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
              </button>
            )}
            <div>
               <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
               <p className="text-sm opacity-90 aksara-font">ꦱꦶꦤꦲꦸꦲꦏ꧀ꦱꦫꦗꦮ</p>
            </div>
          </div>
          {/* Wayang Gunungan Icon (Simplified SVG) */}
          <div className="hidden sm:block w-12 h-12 text-jawa-gold opacity-80">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 5 L90 85 L10 85 Z" /> 
              <circle cx="50" cy="50" r="15" className="text-jawa-brown" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 sm:p-6 relative z-0">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-jawa-brown/20 p-4 sm:p-8 min-h-[80vh]">
           {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-jawa-brown text-white p-3 text-center text-sm relative z-10">
        <p>Sinau Aksara Jawa &copy; 2024</p>
        <p className="text-xs opacity-75">SD Negeri Batur 01</p>
      </footer>
    </div>
  );
};

export default Layout;
