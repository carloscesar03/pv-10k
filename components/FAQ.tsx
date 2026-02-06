import React from 'react';
import { Section } from './Section';
import { Accordion } from './Accordion';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Preciso ganhar mais pra funcionar?",
    answer: "Não. O método foi criado pra quem ganha pouco ou médio."
  },
  {
    question: "Preciso entender de investimentos?",
    answer: "Não. Aqui é acúmulo e controle primeiro."
  },
  {
    question: "Quanto tempo por semana?",
    answer: "Menos de 30 minutos."
  },
  {
    question: "Funciona pra quem é impulsivo?",
    answer: "Principalmente pra quem é impulsivo."
  },
  {
    question: "Tem garantia?",
    answer: "Sim. Risco zero."
  }
];

export const FAQ: React.FC = () => {
  return (
    <Section className="bg-[#080808]">
      <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
      <Accordion items={faqData} />
    </Section>
  );
};