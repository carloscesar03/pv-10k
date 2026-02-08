import React from 'react';
import { Section } from './Section';
import { TrendingUp, BrainCircuit, Shield, Zap } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = "https://placehold.co/600x400/121212/00D05E?text=Mockup+Indisponivel";
    target.alt = "Imagem indisponível";
  };

  return (
    <div className="bg-gradient-to-b from-brand-card to-[#050505] border-t border-brand-border py-20">
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-brand-green text-sm font-bold uppercase tracking-widest mb-2">O QUE VOCÊ ESTÁ COMPRANDO</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Reforço do que é o produto:</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Um aplicativo com um protocolo fechado para juntar dinheiro em silêncio, criar controle e conquistar respeito interno.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-brand-green/20 p-3 rounded-lg h-fit text-brand-green"><TrendingUp /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Primeiro marco financeiro real</h4>
                  <p className="text-gray-400 text-sm">Sair do zero emocional de uma vez por todas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-green/20 p-3 rounded-lg h-fit text-brand-green"><BrainCircuit /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Paz mental</h4>
                  <p className="text-gray-400 text-sm">Parar de pensar em dinheiro (ou na falta dele) o tempo todo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-brand-green/20 p-3 rounded-lg h-fit text-brand-green"><Shield /></div>
                <div>
                  <h4 className="font-bold text-white text-lg">Autoconfiança</h4>
                  <p className="text-gray-400 text-sm">Saber que você consegue repetir o processo.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bonuses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-center md:text-left flex items-center gap-2">
              <Zap className="text-yellow-400 fill-yellow-400" /> Ferramentas Bônus Inclusas
            </h3>
            
            {/* Bonus 1 */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border-l-4 border-brand-green relative overflow-hidden group hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 right-0 bg-brand-green text-black text-xs font-bold px-2 py-1 z-10">INCLUSO</div>
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-shrink-0 w-full sm:w-28">
                  <img 
                    src="https://drive.google.com/thumbnail?id=10NRgHqWhrKA9HXaHbGfpi8z6wzm5-kFW&sz=w1000" 
                    alt="Calculadora de Metas Mockup" 
                    className="w-full aspect-square rounded-lg shadow-lg border border-white/5 transform group-hover:scale-105 transition-transform duration-300 object-cover"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Calculadora de Metas Financeiras</h4>
                  <p className="text-sm text-gray-300">Chega de "mês que vem eu começo". Um plano à prova de falhas para atingir seus objetivos.</p>
                </div>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border-l-4 border-brand-green relative overflow-hidden group hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 right-0 bg-brand-green text-black text-xs font-bold px-2 py-1 z-10">INCLUSO</div>
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-shrink-0 w-full sm:w-28">
                   <img 
                    src="https://drive.google.com/thumbnail?id=1BkVfqAy5glX9ZIk1-EAxpuSIzEl2vi37&sz=w1000" 
                    alt="Guardião do Bolso Mockup" 
                    className="w-full aspect-square rounded-lg shadow-lg border border-white/5 transform group-hover:scale-105 transition-transform duration-300 object-cover"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">O Guardião do Bolso</h4>
                  <p className="text-sm text-gray-300">O fim da escravidão por impulso. Traduza preços em tempo de vida e pare de gastar à toa.</p>
                </div>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-xl border-l-4 border-brand-green relative overflow-hidden group hover:bg-slate-800 transition-colors">
              <div className="absolute top-0 right-0 bg-brand-green text-black text-xs font-bold px-2 py-1 z-10">INCLUSO</div>
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div className="flex-shrink-0 w-full sm:w-28">
                  <img 
                    src="https://drive.google.com/thumbnail?id=18uycb2cI5TzVuOiSkYV-rJNIdEn4YWq2&sz=w1000" 
                    alt="Gerador de NÃO Mockup" 
                    className="w-full aspect-square rounded-lg shadow-lg border border-white/5 transform group-hover:scale-105 transition-transform duration-300 object-cover"
                    referrerPolicy="no-referrer"
                    onError={handleImageError}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-white">Gerador de NÃO Financeiro</h4>
                  <p className="text-sm text-gray-300">A blindagem contra o "Banco dos Outros". Negue empréstimos sem culpa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
