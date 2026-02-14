import React from 'react';
import { Button } from './Button';
import { ShieldAlert, ChevronDown } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark pt-10 pb-20">
      
      <div className="absolute inset-0 bg-grid-pattern opacity-20 grid-bg pointer-events-none"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-green/20 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-8 animate-fade-in-up backdrop-blur-sm">
          <ShieldAlert size={16} />
          Atenção: Não ignore este aviso
        </div>
        
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 tracking-tight">
          O SEU DINHEIRO NÃO ESTÁ SUMINDO. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-400 glow-text">ELE ESTÁ SENDO ROUBADO.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
          Existe um <strong className="text-white">protocolo invisível</strong> que os bancos usam para drenar seu salário em 5 dias. Nós criamos a ferramenta para bloquear isso e forçar seus primeiros <span className="text-brand-green font-bold">10k na conta</span>.
        </p>
        
        <div className="w-full max-w-md flex flex-col gap-4">
          <Button onClick={onCtaClick} pulse showIcon className="text-lg w-full">
            ATIVAR PROTOCOLO 10K
          </Button>
          <p className="text-xs text-gray-600 uppercase tracking-widest font-mono">
            Acesso liberado para apenas 50 usuários hoje
          </p>
        </div>

      </div>

      <div className="absolute bottom-8 animate-bounce text-gray-600">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};