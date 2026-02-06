import React from 'react';
import { Button } from './Button';

interface ProblemSectionProps {
  onCtaClick: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="bg-[#0A0A0A] border-y border-brand-border py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Ninguém te ensinou a juntar dinheiro. <br/>
            <span className="text-red-500">Te ensinaram a gastar.</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Você trabalha. Você se esforça. E no fim do mês… <strong className="text-white">sobra vergonha.</strong>
            </p>
            <p>
              Não porque você ganha pouco. Mas porque cada real que passa pela sua mão vai embora antes de criar raiz.
            </p>
            <p>
              Você já tentou “se controlar”. Já tentou planilha. Já tentou promessa de mês novo. E falhou. De novo.
            </p>
            <div className="inline-block md:block text-left pl-4 pr-6 border-l-4 border-brand-green py-2 bg-brand-green/5 my-6 rounded-r-lg">
              <p className="text-white italic font-medium">
                "O erro nunca foi falta de disciplina. Foi falta de sistema."
              </p>
            </div>
            <p>
              Enquanto você anuncia metas, o mundo cobra. Enquanto você fala em economizar, alguém pede. Enquanto você explica, o dinheiro vaza.
            </p>
            <p className="font-bold text-brand-green text-xl">
              R$10K em Silêncio existe pra uma coisa só: fazer você acumular sem ninguém perceber — até ser tarde demais pra te parar.
            </p>
          </div>
          
          <Button onClick={onCtaClick} className="mt-8">
            QUERO PARAR DE GASTAR TUDO
          </Button>
        </div>
        
        <div className="order-1 md:order-2 relative h-full min-h-[400px]">
          {/* Visual Abstract Representation of 'Leaking Money' or Stress */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent rounded-2xl opacity-50 blur-2xl"></div>
          <img 
            src="https://drive.google.com/thumbnail?id=1cNiBhh4Fnbps6Dbb6V2Zemcm7p2Z9AzK&sz=w1000" 
            alt="Pessoa frustrada com finanças" 
            className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-brand-border"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 z-20 bg-brand-card p-6 rounded-xl border border-brand-border shadow-xl max-w-xs hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Alerta Financeiro</p>
            </div>
            <p className="font-mono text-sm">
              &gt; Gastos invisíveis detectados.<br/>
              &gt; Vazamento: R$ 850,00/mês.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
