import React from 'react';
import { X, Check } from 'lucide-react';
import { BEFORE_AFTER } from '../data/content';

export const BeforeAfterSection: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-[430px] mx-auto" id="antes-depois-section">
      {/* Header */}
      <div className="text-center mb-5">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] tracking-tight">
          {BEFORE_AFTER.headline}
        </h2>
        <p className="text-xs text-gray-600 mt-1">
          Menos improviso e mais tranquilidade para acompanhar e ensinar o seu filho em casa com facilidade.
        </p>
      </div>

      {/* Stacked Comparison Cards on Mobile */}
      <div className="space-y-3.5">
        {/* Card 1: SEM MATERIAL (Antes) */}
        <div className="bg-[#FFF8F8] rounded-2xl border border-rose-200 p-4 shadow-2xs">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-rose-100">
            <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
              <X className="w-3.5 h-3.5 stroke-[3]" />
            </span>
            <h3 className="text-xs font-extrabold text-rose-900 tracking-wide">
              {BEFORE_AFTER.before.title}
            </h3>
          </div>
          <ul className="space-y-2.5">
            {BEFORE_AFTER.before.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-800 leading-snug">
                <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 border border-rose-200">
                  <X className="w-3 h-3 stroke-[3.5]" />
                </span>
                <span className="font-medium text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: COM O KIT (Depois) */}
        <div className="bg-[#F2FDF5] rounded-2xl border-2 border-emerald-300 p-4 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-emerald-100">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <h3 className="text-xs font-extrabold text-emerald-900 tracking-wide">
                {BEFORE_AFTER.after.title}
              </h3>
            </div>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
              Recomendado
            </span>
          </div>
          <ul className="space-y-2.5">
            {BEFORE_AFTER.after.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-900 leading-snug font-medium">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 border border-emerald-200">
                  <Check className="w-3 h-3 stroke-[3.5]" />
                </span>
                <span className="text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
