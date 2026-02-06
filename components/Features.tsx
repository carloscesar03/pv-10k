import React from 'react';
import { Section } from './Section';
import { TrendingUp, Search, Calculator, ShieldCheck, MessageSquareX } from 'lucide-react';
import { FeatureItem } from '../types';

const featuresData: FeatureItem[] = [
  {
    title: "MINI APP EMPILHADOR DE DINHEIRO",
    description: "Chega de deitar a cabeça no travesseiro rezando para nenhum imprevisto acontecer. O Empilhador hackeia seu cérebro para tornar o ato de guardar mais viciante que o de gastar. Desbloqueie a blindagem invisível que separa quem apenas sobrevive de quem é dono do próprio destino.",
    icon: TrendingUp
  },
  {
    title: "MINI APP DETECTOR DE RALO",
    description: "Pare de culpar o quanto você ganha. O problema é o buraco no bolso que você não vê. Enquanto economiza centavos no mercado, perde milhares em gastos silenciosos. Em 60 segundos, essa ferramenta mostra exatamente onde seu sonho de 10k está morrendo.",
    icon: Search
  },
  {
    title: "MINI APP CALCULADORA DE METAS",
    description: "A dor de ver o ano passar e continuar na estaca zero é terrível. Este Mini-App elimina as desculpas. Ele prova que você já tem o dinheiro da liberdade, mas está jogando fora. Um plano à prova de falhas que cabe nos seus dias ruins.",
    icon: Calculator
  },
  {
    title: "MINI APP O GUARDIÃO DO BOLSO",
    description: "O marketing desliga seu cérebro para você gastar. Esta ferramenta é seu balde de água fria. Ao traduzir preço em tempo de vida, você quebra o feitiço da dopamina barata na hora. Pare de jogar seu suor no lixo e recupere a autoridade sobre seu dinheiro.",
    icon: ShieldCheck
  },
  {
    title: "MINI APP GERADOR DE 'NÃO'",
    description: "Domine a arte de negar dinheiro sem destruir amizades. Desbloqueie um arsenal de respostas elegantes e firmes para escapar de qualquer saia justa, protegendo seu patrimônio sem precisar ser o vilão da história.",
    icon: MessageSquareX
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          O que você vai <span className="text-brand-green underline decoration-brand-green/30 underline-offset-8">desbloquear</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Você terá acesso a um App Exclusivo contendo 5 ferramentas poderosas para blindar seu patrimônio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresData.map((feature, idx) => (
          <div 
            key={idx} 
            className={`
              group p-8 rounded-2xl border border-brand-border bg-brand-card hover:border-brand-green/50 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,208,94,0.15)]
              ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-1' : ''}
              ${idx === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}
            `}
          >
            <div className="w-14 h-14 rounded-full bg-brand-green/10 flex items-center justify-center mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-black transition-colors duration-300">
              <feature.icon size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors uppercase">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};