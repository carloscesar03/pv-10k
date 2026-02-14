import React from 'react';
import { Section } from './Section';
import { Zap, Lock } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/600x400/121212/00FF66?text=Ferramenta+Bloqueada";
  };

  const bonuses = [
    {
      title: "Calculadora de Metas",
      desc: "O plano matemático exato para sair do zero.",
      img: "https://drive.google.com/thumbnail?id=10NRgHqWhrKA9HXaHbGfpi8z6wzm5-kFW&sz=w1000"
    },
    {
      title: "O Guardião do Bolso",
      desc: "Bloqueador psicológico de compras inúteis.",
      img: "https://drive.google.com/thumbnail?id=1BkVfqAy5glX9ZIk1-EAxpuSIzEl2vi37&sz=w1000"
    },
    {
      title: "Gerador de NÃO",
      desc: "Scripts para proteger seu dinheiro de parentes.",
      img: "https://drive.google.com/thumbnail?id=18uycb2cI5TzVuOiSkYV-rJNIdEn4YWq2&sz=w1000"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0A0A0A] to-brand-dark border-t border-brand-border py-12">
      <Section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-brand-green font-bold uppercase tracking-widest text-sm mb-4">
            <Zap size={16} /> Bônus Exclusivos
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Se você entrar hoje, <br />
            <span className="text-gray-500">leva o arsenal completo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="group relative bg-[#111] rounded-xl overflow-hidden border border-white/5 hover:border-brand-green/30 transition-all duration-300">
              {/* Image Container */}
              <div className="aspect-video bg-black relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay z-10"></div>
                <img 
                  src={bonus.img}
                  alt={bonus.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={handleImageError}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded border border-white/10 flex items-center gap-1 z-20">
                  <Lock size={8} /> LIBERADO
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-brand-green transition-colors">{bonus.title}</h3>
                <p className="text-sm text-gray-500">{bonus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};