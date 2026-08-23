import React from 'react';
import { Check, ArrowDown, Heart } from 'lucide-react';
import { HERO_DATA } from '../data/content';
import { HeroMockupBundle } from './WorksheetIllustrations';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-4 sm:pt-6 pb-8 sm:pb-10 px-4 w-full max-w-[430px] mx-auto text-center box-border" id="hero-section">
      {/* 1. Category Tag - Método Aprovado por mais de 10.000 famílias */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#F3E8FF] text-[#581C87] border border-[#D8B4FE] text-xs sm:text-[13px] font-medium tracking-tight mb-3 sm:mb-4 shadow-2xs">
        <Heart className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#FF1493] fill-[#FF1493] shrink-0 animate-pulse drop-shadow-[0_0_6px_rgba(255,20,147,0.8)]" />
        <span>
          Método aprovado por mais de <strong className="font-extrabold text-[#3B0764] text-[13px] sm:text-[14px]">10.000</strong> <strong className="font-extrabold text-[#3B0764] text-[13px] sm:text-[14px]">famílias</strong>
        </span>
      </div>

      {/* 2. Main Headline (Responsive typography for 320px - 430px) */}
      <h1 className="text-[1.35rem] sm:text-2xl md:text-3xl font-extrabold text-[#2D2A26] tracking-tight leading-[1.22] mb-3 max-w-[390px] mx-auto text-balance">
        {HERO_DATA.headline}
      </h1>

      {/* 3. Subheadline */}
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-[360px] mx-auto mb-4 sm:mb-5 font-normal text-balance">
        Atividades práticas para crianças de 4 a 10 anos exercitarem letras, sílabas, palavras e leitura de maneira leve,{' '}
        <span className="font-['Fredoka',sans-serif] font-bold text-[#FF1493] text-sm sm:text-[15px] tracking-wide inline-block drop-shadow-[0_1px_2px_rgba(255,20,147,0.15)]">
          aprenda até 3x mais rápido
        </span>
        .
      </p>

      {/* 4. Product Mockup Bundle (Immediate Visual Comprehension in 3s) */}
      <div className="my-4 sm:my-5 w-full">
        <HeroMockupBundle />
      </div>

      {/* 5. Micro Benefits List */}
      <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#EAE5DC] shadow-xs mb-5 sm:mb-6 text-left w-full max-w-[380px] mx-auto">
        <ul className="space-y-2 text-xs font-medium text-gray-700">
          {HERO_DATA.benefits.map((benefit) => (
            <li key={benefit.id} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span className="text-[11px] sm:text-[12px] leading-snug">{benefit.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 6. Dominant Main Call To Action Button with 3D Relief and Animated Traveling Border Beam */}
      <div className="w-full max-w-[380px] mx-auto pt-1">
        <div className="btn-beam-container">
          <div className="btn-beam-light" aria-hidden="true" />
          <button
            onClick={onCtaClick}
            id="hero-cta-button"
            className="relative z-10 w-full touch-target-btn btn-3d-pink text-white font-extrabold text-sm sm:text-base py-3.5 px-4 sm:px-6 rounded-[16px] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span className="tracking-wide">{HERO_DATA.ctaText}</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform shrink-0" />
          </button>
        </div>
      </div>
    </section>
  );
};
