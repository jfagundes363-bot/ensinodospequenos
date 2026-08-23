import React from 'react';
import { GALLERY_ROW_TOP, GALLERY_ROW_BOTTOM } from '../data/content';
import { ActivitySlide } from '../types';

interface InteractiveGallerySectionProps {
  onSelectActivity?: (activity: ActivitySlide) => void;
}

export const InteractiveGallerySection: React.FC<InteractiveGallerySectionProps> = ({ onSelectActivity }) => {
  // Duplicating each array once creates the seamless 0% -> -50% CSS infinite loop
  const topItems = [...GALLERY_ROW_TOP, ...GALLERY_ROW_TOP];
  const bottomItems = [...GALLERY_ROW_BOTTOM, ...GALLERY_ROW_BOTTOM];

  return (
    <section className="py-8 w-full max-w-[430px] mx-auto overflow-hidden" id="galeria-section">
      {/* Section Header */}
      <div className="px-4 text-center mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100 inline-block">
          Amostras Reais do Material
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] mt-2 tracking-tight">
          Veja algumas de nossas atividades pedagógicas
        </h2>
        <p className="text-xs text-gray-600 mt-1 max-w-[340px] mx-auto">
          Centenas de páginas ilustradas e prontas para imprimir em tamanho A4.
        </p>
      </div>

      {/* Double Opposing Continuous Slow Infinite Carousels */}
      <div className="relative space-y-3.5 sm:space-y-4 overflow-hidden py-1">
        {/* Soft Side Fade Masks for Seamless Edge Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-r from-[#FAF8F5] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 z-10 bg-gradient-to-l from-[#FAF8F5] to-transparent pointer-events-none" />

        {/* TOP CAROUSEL: Moves Left to Right (LTR) slowly */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-ltr gap-3 sm:gap-3.5 items-center">
            {topItems.map((item, index) => (
              <div
                key={`top-${item.id}-${index}`}
                className="shrink-0 w-[140px] h-[200px] sm:w-[160px] sm:h-[225px] rounded-2xl bg-white shadow-xs border border-black p-1.5 flex items-center justify-center select-none"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM CAROUSEL: Moves Right to Left (RTL) slowly */}
        <div className="overflow-hidden w-full">
          <div className="animate-marquee-rtl gap-3 sm:gap-3.5 items-center">
            {bottomItems.map((item, index) => (
              <div
                key={`bot-${item.id}-${index}`}
                className="shrink-0 w-[140px] h-[200px] sm:w-[160px] sm:h-[225px] rounded-2xl bg-white shadow-xs border border-black p-1.5 flex items-center justify-center select-none"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-xl select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Textos Centralizados Embaixo dos Dois Carrosséis */}
      <div className="px-4 mt-6 text-center">
        <p className="text-sm sm:text-base font-extrabold text-[#2D2A26] tracking-tight">
          Tudo em um único material.
        </p>
        <p className="text-xs sm:text-[13px] text-gray-600 mt-1 font-medium">
          Material completo para pais, mães e educadores.
        </p>
      </div>
    </section>
  );
};
