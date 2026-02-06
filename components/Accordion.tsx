import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface AccordionProps {
  items: FaqItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="bg-brand-card border border-brand-border rounded-lg overflow-hidden transition-colors hover:border-brand-green/30"
        >
          <button
            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            onClick={() => toggle(index)}
          >
            <span className="font-semibold text-lg text-white">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-brand-green w-6 h-6" />
            ) : (
              <ChevronDown className="text-gray-400 w-6 h-6" />
            )}
          </button>
          
          <div 
            className={`
              transition-all duration-300 ease-in-out overflow-hidden
              ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="p-5 pt-0 text-gray-400 border-t border-brand-border/50 mt-2">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};