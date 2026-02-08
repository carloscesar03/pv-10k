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
          “Não é apenas sobre juntar dinheiro. <br/>
          É sobre provar para si mesmo que você tem controle sobre sua vida.”
        </blockquote>
        
        <p className="text-brand-green font-bold text-lg mb-8 uppercase tracking-widest">
          O momento de assumir o controle é agora.
        </p>

        <Button onClick={onCtaClick} pulse className="shadow-2xl shadow-brand-green/30">
          QUERO COMEÇAR O PROTOCOLO
        </Button>
      </div>

      <div className="text-gray-600 text-sm mt-16 max-w-4xl mx-auto px-4">
        <div className="flex justify-center gap-4 mb-4">
          <PiggyBank className="w-8 h-8 opacity-20" />
        </div>
        <p className="mb-4">&copy; {new Date().getFullYear()} 10K em Silêncio. Todos os direitos reservados.</p>
        
        <div className="text-xs text-gray-700 space-y-2 border-t border-gray-900 pt-6">
          <p>
            <strong>Isenção de Responsabilidade:</strong> Este produto é uma ferramenta educacional e de organização pessoal. 
            Não garantimos a obtenção de resultados financeiros específicos, pois eles dependem exclusivamente do engajamento, 
            disciplina e situação financeira individual de cada usuário.
          </p>
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do Meta. 
            Todas as estratégias e investimentos envolvem risco de perda. Nenhuma informação contida neste produto deve ser interpretada como aconselhamento financeiro oficial.
          </p>
        </div>
      </div>
    </footer>
  );
};
