import React from 'react';
import { Section } from './Section';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <div className="bg-[#080808] border-b border-brand-border">
      <Section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
          
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-brand-green/20 blur-3xl rounded-full"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center border-4 border-brand-green rounded-full bg-black shadow-[0_0_30px_rgba(0,208,94,0.15)]">
              <div className="flex flex-col items-center justify-center text-brand-green">
                <ShieldCheck size={48} className="mb-1" />
                <span className="text-3xl font-black leading-none">7</span>
                <span className="text-xs font-bold uppercase tracking-widest">Dias</span>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Garantia Incondicional de <span className="text-brand-green">Risco Zero</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Você não tem nada a perder. Entre, use os 5 Mini Apps, faça os testes e sinta a diferença no seu bolso.
            </p>
            <p className="text-gray-400">
              Se em <strong>7 dias</strong> você achar que não valeu a pena, ou se não gostar da cor dos botões, nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, sem letras miúdas. Basta um e-mail.
            </p>
          </div>

        </div>
      </Section>
    </div>
  );
};