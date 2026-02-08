import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { CheckCircle2, Lock } from 'lucide-react';

interface PricingProps {
  onCtaClick: () => void;
}

const inclusions = [
  "Acesso Vitalício ao App 10k em Silêncio",
  "Mini App 1: Empilhador de Dinheiro",
  "Mini App 2: Detector de Ralos",
  "Mini App 3: Calculadora de Metas",
  "Mini App 4: Guardião do Bolso",
  "Mini App 5: Gerador de NÃO Financeiro",
  "Bônus: Atualizações Futuras"
];

export const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <Section id="pricing" className="pt-0 pb-12">
      {/* Value Anchor */}
      <div className="max-w-3xl mx-auto mb-16 bg-white/5 rounded-2xl p-8 border border-white/10 text-center backdrop-blur-sm">
        <h3 className="text-2xl font-bold mb-6">Faça as contas…</h3>
        <div className="space-y-3 text-left md:text-center text-gray-300 mb-8 font-mono text-sm md:text-base">
          <p className="flex justify-between md:justify-center gap-4 border-b border-dashed border-gray-700 pb-2">
            <span>Um app de controle financeiro comum:</span> <span className="text-red-400">R$ 199,90/ano</span>
          </p>
          <p className="flex justify-between md:justify-center gap-4 border-b border-dashed border-gray-700 pb-2">
            <span>Um coach financeiro:</span> <span className="text-red-400">R$ 300,00 por sessão</span>
          </p>
          <p className="flex justify-between md:justify-center gap-4 pb-2">
            <span>Continuar perdendo dinheiro todo mês:</span> <span className="text-red-500 font-bold">Incalculável</span>
          </p>
        </div>
        <p className="text-lg italic mb-2">Você pode ter acesso às 5 ferramentas agora por um valor simbólico.</p>
        <p className="text-xl font-bold text-white">
          Hoje, você garante o Pack Completo por apenas <span className="text-brand-green text-3xl">R$ 17,00</span>.
        </p>
      </div>

      {/* Main Stack */}
      <div className="max-w-md mx-auto bg-brand-card border-2 border-brand-green rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(0,208,94,0.3)] relative">
        <div className="bg-brand-green p-4 text-center">
          <h3 className="text-black font-black text-xl uppercase tracking-wider">Oferta Especial</h3>
        </div>
        
        <div className="p-8">
          
          {/* Product Mockup Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="https://drive.google.com/thumbnail?id=1a9VjG8ACuzS2pmCr7UULPSdxwGGIIz1s&sz=w1000" 
              alt="Pack 10k em Silêncio Mockup" 
              className="w-full max-w-[280px] h-auto rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-center text-gray-400 text-sm mb-6 uppercase tracking-widest font-semibold">
            Você recebe acesso imediato a:
          </p>
          
          <ul className="space-y-4 mb-8">
            {inclusions.map((item, i) => (
              <li key={i} className="flex items-center text-sm md:text-base">
                <CheckCircle2 className="text-brand-green min-w-[20px] w-5 h-5 mr-3" />
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center mb-8">
            <span className="text-gray-500 line-through text-lg">De R$ 497,00</span>
            <div className="text-4xl md:text-5xl font-black text-white mt-2">
              R$ 17,00
            </div>
            <span className="text-brand-green text-sm font-bold">pagamento único</span>
          </div>

          <Button fullWidth pulse className="text-xl mb-4" onClick={onCtaClick}>
            LIBERAR MEU ACESSO
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <Lock size={12} /> Pagamento 100% Seguro
          </div>
        </div>
      </div>
    </Section>
  );
};
