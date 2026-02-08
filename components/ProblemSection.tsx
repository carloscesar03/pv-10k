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
            Ninguém te ensinou a gerenciar dinheiro. <br/>
            <span className="text-red-500">O sistema estimula o gasto.</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Você trabalha duro todos os dias. Mas, muitas vezes, sente que o dinheiro não rende como deveria.
            </p>
            <p>
              Isso não acontece por falta de esforço, mas porque pequenas despesas invisíveis drenam seu orçamento antes que você perceba.
            </p>
            <p>
              Planilhas complexas e restrições extremas raramente funcionam a longo prazo. Você precisa de um método que se adapte à sua rotina.
            </p>
            <div className="inline-block md:block text-left pl-4 pr-6 border-l-4 border-brand-green py-2 bg-brand-green/5 my-6 rounded-r-lg">
              <p className="text-white italic font-medium">
                "O segredo não é apenas disciplina, é ter as ferramentas certas de controle."
              </p>
            </div>
            <p>
              O Protocolo 10k em Silêncio foi desenhado para ajudar você a identificar para onde seu dinheiro está indo e redirecioná-lo para suas metas, de forma organizada e constante.
            </p>
          </div>
          
          <Button onClick={onCtaClick} className="mt-8">
            QUERO ORGANIZAR MINHAS FINANÇAS
          </Button>
        </div>
        
        <div className="order-1 md:order-2 relative h-full min-h-[400px]">
          {/* Visual Abstract Representation of 'Leaking Money' or Stress */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent rounded-2xl opacity-50 blur-2xl"></div>
          <img 
            src="https://drive.google.com/thumbnail?id=1cNiBhh4Fnbps6Dbb6V2Zemcm7p2Z9AzK&sz=w1000" 
            alt="Pessoa analisando finanças" 
            className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-brand-border"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 z-20 bg-brand-card p-6 rounded-xl border border-brand-border shadow-xl max-w-xs hidden md:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">Análise Financeira</p>
            </div>
            <p className="font-mono text-sm">
              &gt; Gastos invisíveis detectados.<br/>
              &gt; Oportunidade de otimização.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
