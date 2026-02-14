import React from 'react';
import { Section } from './Section';
import { Database, Search, Target, Shield, XCircle } from 'lucide-react';
import { FeatureItem } from '../types';

const featuresData: FeatureItem[] = [
  {
    title: "O EMPILHADOR",
    description: "Algoritmo comportamental que torna o ato de guardar dinheiro mais viciante que gastar. Hackeie sua dopamina.",
    icon: Database
  },
  {
    title: "DETECTOR DE RALOS",
    description: "Um scanner financeiro de 60 segundos. Ele encontra exatamente onde seu sonho de 10k está morrendo.",
    icon: Search
  },
  {
    title: "CALCULADORA DA VERDADE",
    description: "Matemática crua e direta. Mostra a data exata da sua liberdade se você seguir o plano, sem achismos.",
    icon: Target
  },
  {
    title: "GUARDIÃO DO BOLSO",
    description: "Tradutor de Preço x Vida. Descubra quantas horas de suor custa aquele jantar e perca a vontade de gastar na hora.",
    icon: Shield
  },
  {
    title: "GERADOR DE 'NÃO'",
    description: "Scripts prontos para negar dinheiro a parentes e amigos sem ser o vilão. Proteja seu patrimônio com elegância.",
    icon: XCircle
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="relative bg-brand-dark">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-6">
          O ARSENAL <span className="text-brand-green">10K EM SILÊNCIO</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Não entregamos "aulas teóricas". Entregamos 5 ferramentas de combate para você instalar na sua rotina e ver o dinheiro sobrar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`
              relative group p-8 rounded-xl bg-[#0A0A0A] border border-white/5 overflow-hidden
              hover:border-brand-green/50 transition-all duration-300
              ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}
              ${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
            `}
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded bg-brand-accent flex items-center justify-center mb-6 text-brand-green border border-brand-green/20 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};