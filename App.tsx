import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProblemSection } from './components/ProblemSection';
import { TargetAudience } from './components/TargetAudience';
import { BonusesSection } from './components/BonusesSection';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

// --- CONFIGURAÇÃO ---
// Coloque o link do seu checkout (Kiwify, Hotmart, Eduzz) aqui entre as aspas:
const CHECKOUT_URL = "https://pay.wiapy.com/6CANs0O7lq"; 

const App: React.FC = () => {
  
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckout = () => {
    // Redireciona o usuário para o checkout em uma nova aba
    if (CHECKOUT_URL) {
      window.open(CHECKOUT_URL, '_blank');
    } else {
      console.log("Link de checkout não configurado. Adicione-o no arquivo App.tsx");
      alert("Redirecionando para o checkout... (Configure o link no código)");
    }
  };

  return (
    <div className="min-h-screen font-sans text-gray-200 overflow-x-hidden selection:bg-brand-green selection:text-black">
      
      <Hero onCtaClick={handleCheckout} />
      
      <Features />

      <ProblemSection onCtaClick={handleCheckout} />

      <TargetAudience />

      <BonusesSection />

      <Pricing onCtaClick={handleCheckout} />

      <Guarantee />

      <FAQ />

      <Footer onCtaClick={handleCheckout} />
      
    </div>
  );
};

export default App;
