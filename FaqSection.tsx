import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-8 px-4 max-w-[430px] mx-auto" id="faq-section">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center justify-center gap-1 w-fit mx-auto">
          <HelpCircle className="w-3.5 h-3.5" /> Dúvidas Frequentes
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] mt-2 tracking-tight">
          Ficou alguma dúvida?
        </h2>
        <p className="text-xs text-gray-600 mt-1">
          Toque em uma pergunta para ler a resposta completa.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-2.5">
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs transition-colors"
            >
              <button
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={isOpen}
                className="w-full p-3.5 text-left flex items-center justify-between gap-3 text-xs font-bold text-gray-900 transition-colors hover:bg-gray-50/80 cursor-pointer"
              >
                <span className="leading-snug">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-orange-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-3.5 pb-3.5 pt-0 text-xs text-gray-600 leading-relaxed border-t border-gray-100 mt-1">
                  <p className="pt-2">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
