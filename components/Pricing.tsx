import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Check, Lock, Smartphone } from 'lucide-react';

interface PricingProps {
  onCtaClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  return (
    <Section id="pricing" className="pt-10 pb-24">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: The Value Stack (Logic) */}
        <div className="order-2 lg:order-1">
          <h3 className="font-display text-3xl font-bold text-white mb-6">
            O preço da ignorância é alto.
          </h3>
          <p className="text-gray-400 mb-8">
            Você pode continuar tentando sozinho, baixando planilhas gratuitas que ninguém usa e vendo seu dinheiro desaparecer dia 20 de todo mês. Ou pode pagar o preço de um lanche para resolver isso para sempre.
          </p>

          <div className="space-y-4 bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="flex justify-between items-center text-sm text-gray-400 border-b border-white/5 pb-3">
              <span>App de Finanças "Premium"</span>
              <span className="line-through decoration-red-500">R$ 199,90/ano</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400 border-b border-white/5 pb-3">
              <span>Livros de "Mindset"</span>
              <span className="line-through decoration-red-500">R$ 89,90</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold text-white pt-2">
              <span>Protocolo 10K (Vitalício)</span>
              <span className="text-brand-green">HOJE: R$ 17,00</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Offer Card (Emotion) */}
        <div className="order-1 lg:order-2 relative">
          {/* Neon Glow Behind */}
          <div className="absolute inset-0 bg-brand-green blur-[60px] opacity-20"></div>

          <div className="relative bg-[#0F0F0F] border border-brand-green rounded-3xl overflow-hidden shadow-2xl shadow-brand-green/20">
            
            {/* Header */}
            <div className="bg-brand-green p-3 text-center">
              <span className="text-black font-black text-xs uppercase tracking-[0.2em]">Oferta por Tempo Limitado</span>
            </div>

            <div className="p-8 text-center">
              <div className="inline-block p-4 rounded-full bg-brand-green/10 mb-4 animate-float">
                 <Smartphone className="w-10 h-10 text-brand-green" />
              </div>
              
              <h2 className="font-display font-black text-5xl text-white mb-2">R$ 17<span className="text-2xl text-gray-500 font-normal">,00</span></h2>
              <p className="text-gray-400 text-sm mb-8">Pagamento único • Acesso Vitalício</p>

              <div className="space-y-3 mb-8 text-left max-w-xs mx-auto">
                {["Acesso Imediato ao App", "As 5 Ferramentas Blindadas", "Atualizações Gratuitas", "Garantia de 7 Dias"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="bg-brand-green/20 p-1 rounded-full">
                      <Check size={12} className="text-brand-green" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button onClick={onCtaClick} fullWidth pulse className="mb-4 text-lg">
                QUERO MEU ACESSO AGORA
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest">
                <Lock size={10} /> Compra 100% Segura e Criptografada
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};