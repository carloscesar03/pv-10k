import React from 'react';
import { Button } from './Button';
import { PiggyBank } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="py-20 px-4 text-center border-t border-brand-border bg-black relative overflow-hidden">
      
      <div className="relative z-10 max-w-3xl mx-auto mb-16">
        <h3 className="font-display text-3xl font-black mb-6 text-white uppercase italic">
          Última Chamada
        </h3>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
          Daqui a um ano, você vai desejar ter começado hoje. <br />
          Ou você assume o controle, ou o sistema continua controlando você.
        </p>
        
        <Button onClick={onCtaClick} pulse className="mx-auto shadow-2xl shadow-brand-green/20">
          ASSUMIR O CONTROLE AGORA
        </Button>
      </div>

      <div className="text-gray-600 text-xs mt-16 max-w-4xl mx-auto px-4 border-t border-gray-900 pt-8">
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 opacity-30 grayscale hover:grayscale-0 transition-all">
             <PiggyBank className="w-6 h-6" />
             <span className="font-bold tracking-widest">10K SILÊNCIO</span>
          </div>
        </div>
        
        <div className="space-y-4 text-justify md:text-center max-w-2xl mx-auto opacity-60">
          <p>
            <strong>Aviso Legal:</strong> "Protocolo 10k em Silêncio" é uma metodologia educacional de organização financeira. Os resultados variam de pessoa para pessoa. Não prometemos dinheiro fácil, prometemos organização eficiente.
          </p>
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Meta. Todas as estratégias e investimentos envolvem risco de perda.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} Protocolo 10K. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};