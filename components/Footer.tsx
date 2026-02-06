import React from 'react';
import { Button } from './Button';
import { PiggyBank } from 'lucide-react';

interface FooterProps {
  onCtaClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCtaClick }) => {
  return (
    <footer className="py-20 px-4 text-center border-t border-brand-border bg-black">
      <div className="max-w-2xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-6 text-white">Recapitulando:</h3>
        <blockquote className="text-xl md:text-2xl font-serif italic text-gray-400 mb-8 leading-relaxed">
          “Não é sobre juntar dinheiro. <br/>
          É sobre provar pra si mesmo que você consegue.”
        </blockquote>
        
        <p className="text-brand-green font-bold text-lg mb-8 uppercase tracking-widest">
          Agora ou vergonha para sempre.
        </p>

        <Button onClick={onCtaClick} pulse className="shadow-2xl shadow-brand-green/30">
          COMEÇAR MINHA TRANSFORMAÇÃO AGORA
        </Button>
      </div>

      <div className="text-gray-600 text-sm mt-16">
        <div className="flex justify-center gap-4 mb-4">
          <PiggyBank className="w-8 h-8 opacity-20" />
        </div>
        <p>&copy; {new Date().getFullYear()} 10K em Silêncio. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs max-w-lg mx-auto">
          Os resultados podem variar de pessoa para pessoa. Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
      </div>
    </footer>
  );
};