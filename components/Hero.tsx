import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-hero-pattern bg-cover bg-center min-h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#050505]"></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-green/30 bg-brand-green/10 text-brand-green text-sm font-bold tracking-widest uppercase animate-fade-in-up">
          Protocolo Exclusivo
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight glow-text">
          JUNTE <span className="text-brand-green">10 MIL REAIS</span> EM SILÊNCIO
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte seus primeiros <strong className="text-white">R$10.000 em até 12 meses</strong>. <br className="hidden md:block"/>
          Sem aumentar renda, sem planilha chata, sem contar pra ninguém. Apenas um protocolo invisível — mesmo ganhando pouco.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Button onClick={onCtaClick} pulse className="text-lg px-10 py-5 w-full md:w-auto shadow-lg shadow-brand-green/20">
            QUERO COMEÇAR AGORA
          </Button>
        </div>
        
        <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest">
          Protocolo Validado • Acesso Imediato
        </p>
      </div>
    </div>
  );
};