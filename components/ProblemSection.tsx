import React from 'react';
import { Button } from './Button';
import { AlertTriangle, TrendingDown, EyeOff } from 'lucide-react';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#080808] py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest rounded">
            Diagnóstico Brutal
          </div>
          
          <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight">
            Você não é desorganizado.<br/>
            <span className="text-gray-500">Você está sendo manipulado.</span>
          </h2>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Toda vez que você abre o Instagram ou entra no shopping, existe uma equipe de 50 engenheiros comportamentais ganhando milhões para fazer você gastar o que não tem.
            </p>
            <p className="border-l-4 border-red-500 pl-4 text-white font-medium">
              É uma guerra desleal. Seu cérebro primitivo contra o algoritmo deles.
            </p>
            <p>
              Tentar "se controlar" apenas com força de vontade é como tentar parar um trem com as mãos. Você vai falhar. Você precisa de uma <strong>arma</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
             <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start gap-3">
                <EyeOff className="text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Gastos Invisíveis</h4>
                  <p className="text-xs text-gray-500 mt-1">Drenam 30% da sua renda sem aviso.</p>
                </div>
             </div>
             <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start gap-3">
                <TrendingDown className="text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-sm">Ciclo da Sobrevivência</h4>
                  <p className="text-xs text-gray-500 mt-1">Trabalha → Paga → Fica Zero.</p>
                </div>
             </div>
          </div>
          
          <Button onClick={onCtaClick} pulse showIcon className="mt-8 w-full md:w-auto text-lg shadow-[0_0_40px_rgba(0,255,102,0.2)]">
            EU QUERO SAIR DO CICLO AGORA
          </Button>
        </div>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border border-brand-border bg-brand-card shadow-2xl">
            <img 
              src="https://drive.google.com/thumbnail?id=1cNiBhh4Fnbps6Dbb6V2Zemcm7p2Z9AzK&sz=w1000" 
              alt="Análise de gastos" 
              className="w-full h-auto object-cover opacity-100"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
              <div className="flex items-center gap-2 text-red-500 font-mono text-sm mb-1">
                <AlertTriangle size={14} />
                <span>ALERTA DE PREJUÍZO</span>
              </div>
              <p className="text-white font-bold">Seu saldo atual não reflete seu esforço.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
