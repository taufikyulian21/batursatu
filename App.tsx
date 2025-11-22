import React, { useState } from 'react';
import Menu from './components/Menu';
import NglegenaView from './components/NglegenaView';
import PasanganView from './components/PasanganView';
import SandhanganView from './components/SandhanganView';
import DynamicExamples from './components/DynamicExamples';
import QuizGame from './components/QuizGame';
import About from './components/About';
import { ScreenState } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(ScreenState.HOME);

  const navigateTo = (screen: ScreenState) => {
    setCurrentScreen(screen);
    window.scrollTo(0, 0);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenState.HOME:
        return <Menu onNavigate={navigateTo} />;
      case ScreenState.NGLEGENA:
        return <NglegenaView onBack={() => navigateTo(ScreenState.HOME)} />;
      case ScreenState.PASANGAN:
        return <PasanganView onBack={() => navigateTo(ScreenState.HOME)} />;
      case ScreenState.SANDHANGAN:
        return <SandhanganView onBack={() => navigateTo(ScreenState.HOME)} />;
      case ScreenState.EXAMPLES:
        return <DynamicExamples onBack={() => navigateTo(ScreenState.HOME)} />;
      case ScreenState.QUIZ:
        return <QuizGame onBack={() => navigateTo(ScreenState.HOME)} />;
      case ScreenState.ABOUT:
        return <About onBack={() => navigateTo(ScreenState.HOME)} />;
      default:
        return <Menu onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="antialiased text-gray-900">
      {renderScreen()}
    </div>
  );
};

export default App;
