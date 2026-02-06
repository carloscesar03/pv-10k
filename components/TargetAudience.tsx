import React from 'react';
import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';

const audienceList = [
  "Quem nunca passou dos R$5.000 guardados e se sente sempre no mesmo lugar",
  "Quem é pressionado por família, amigos ou pelo próprio impulso",
  "Quem quer a primeira vitória financeira REAL — não discurso motivacional"
];

export const TargetAudience: React.FC = () => {
  return (
    <Section className="max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-bold mb-12">Para quem é este protocolo?</h2>
      <div className="space-y-4">
        {audienceList.map((item, i) => (
          <div key={i} className="flex items-center p-6 bg-brand-card border border-brand-border rounded-xl">
            <CheckCircle2 className="text-brand-green min-w-[24px] h-6 mr-4" />
            <span className="text-lg md:text-xl font-medium">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};