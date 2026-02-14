import React from 'react';
import { Section } from './Section';
import { Star, CheckCircle2, Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Gustavo Mendes",
    role: "Motorista de App",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Eu rodava 12h por dia e o dinheiro sumia no posto e lanche. O 'Detector de Ralos' me mostrou que eu gastava R$ 600 só em besteira sem ver. Em 20 dias, sobraram R$ 800 limpos na conta. Surreal.",
    result: "+R$ 800,00/mês recuperados"
  },
  {
    name: "Mariana Costa",
    role: "Auxiliar Administrativo",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "Sempre fui a 'amiga rica' que pagava tudo pros outros mesmo estando no vermelho. O script do 'Gerador de Não' me fez travar esses empréstimos pra parentes. Pela primeira vez em 4 anos, fechei o mês no azul.",
    result: "Saiu do cheque especial"
  },
  {
    name: "Renato Viana",
    role: "Vendedor",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    content: "Eu achava que precisava ganhar 10k pra juntar dinheiro. O protocolo me provou que eu era só desorganizado. Usei o 'Empilhador' e já tô com 3k guardado pro meu carro. A matemática não mente.",
    result: "R$ 3.000,00 guardados"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#050505] border-t border-brand-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-brand-green/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-black text-white mb-6">
            ELES PARARAM DE <span className="text-red-500">SANGRAR DINHEIRO.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pessoas reais que saíram do ciclo da sobrevivência e começaram a construir o próprio banco. Sem mágica, apenas método.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="relative group bg-[#0F0F0F] p-8 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all duration-300 hover:-translate-y-2">
              
              <div className="absolute top-6 right-6 text-brand-green/10 group-hover:text-brand-green/20 transition-colors">
                <Quote size={48} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full border-2 border-brand-green/20 transition-all"
                />
                <div>
                  <h4 className="font-bold text-white text-lg leading-none">{t.name}</h4>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{t.role}</p>
                  <div className="flex text-brand-green mt-1">
                    {[...Array(5)].map((_, idx) => <Star key={idx} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{t.content}"
              </p>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 text-brand-green text-sm font-bold bg-brand-green/5 py-2 px-3 rounded-lg border border-brand-green/10 w-fit">
                  <CheckCircle2 size={16} />
                  {t.result}
                </div>
              </div>

              <div className="absolute top-0 right-0 bg-brand-green text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg opacity-80">
                VERIFICADO
              </div>

            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};