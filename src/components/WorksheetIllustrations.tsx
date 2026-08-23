import React from 'react';

interface MockupProps {
  className?: string;
}

export const HeroMockupBundle: React.FC<MockupProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[340px] sm:max-w-[360px] mx-auto select-none overflow-visible box-border ${className}`} id="hero-mockup-bundle">
      {/* Background soft decorative glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/60 via-rose-100/50 to-blue-100/60 rounded-3xl blur-lg opacity-80 -z-10 pointer-events-none" />

      {/* Main Bundle Stack */}
      <div className="relative pt-3 pb-1 px-1">
        {/* Layer 3 - Back worksheet angled */}
        <div className="absolute top-2 right-2 w-[80%] h-[270px] bg-white rounded-2xl border border-blue-200/80 shadow-md transform rotate-3 sm:rotate-6 scale-95 p-3 opacity-90 hidden sm:block pointer-events-none">
          <div className="flex items-center justify-between border-b border-blue-100 pb-2">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">Módulo de Sílabas</span>
            <span className="text-[9px] text-gray-400">Pág. 14</span>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-4 w-3/4 bg-blue-50 rounded" />
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="h-14 bg-blue-50/50 rounded border border-dashed border-blue-200 flex items-center justify-center font-bold text-blue-700 text-xs">BA</div>
              <div className="h-14 bg-blue-50/50 rounded border border-dashed border-blue-200 flex items-center justify-center font-bold text-blue-700 text-xs">BE</div>
              <div className="h-14 bg-blue-50/50 rounded border border-dashed border-blue-200 flex items-center justify-center font-bold text-blue-700 text-xs">BI</div>
            </div>
          </div>
        </div>

        {/* Layer 2 - Middle worksheet angled */}
        <div className="absolute top-1 left-2 w-[85%] h-[275px] bg-white rounded-2xl border border-rose-200/80 shadow-md transform -rotate-2 sm:-rotate-3 scale-95 p-3 opacity-90 pointer-events-none hidden xs:block">
          <div className="flex items-center justify-between border-b border-rose-100 pb-1.5">
            <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wide">Treino de Traçado</span>
            <span className="text-[9px] text-gray-400">Pág. 08</span>
          </div>
          <div className="mt-3 flex items-center space-x-3">
            <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 font-extrabold text-lg">
              A a
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="h-2 w-full bg-gray-100 rounded-full" />
              <div className="h-2 w-4/5 bg-gray-100 rounded-full" />
            </div>
          </div>
          <div className="mt-4 border-2 border-dashed border-rose-200 rounded-xl p-2 flex items-center justify-center bg-rose-50/30">
            <span className="text-[10px] sm:text-[11px] font-medium text-rose-700">Abelha • Avião • Anel</span>
          </div>
        </div>

        {/* Layer 1 - Main Front Hero Binder / Book Cover */}
        <div className="relative z-10 w-[94%] sm:w-[90%] mx-auto bg-white rounded-2xl border-2 border-pink-300 shadow-xl p-1.5 sm:p-2">
          {/* Top-Right Badge: Mais de 1.000 atividades */}
          <div className="absolute -top-2 -right-1.5 sm:-right-2.5 z-30 bg-[#FEE2E2] text-[#991B1B] border-2 border-white px-3 py-1 rounded-full shadow-md text-[10.5px] sm:text-[11.5px] font-extrabold flex items-center justify-center">
            <span>Mais de 1.000 atividades</span>
          </div>

          <img
            src="https://i.imgur.com/bnfhpGR.jpeg"
            alt="Kit Alfabetização em PDF"
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-cover shadow-xs"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </div>
  );
};

export const BonusMockupCard: React.FC<{
  title?: string;
  imageUrl?: string;
  [key: string]: unknown;
}> = ({ title, imageUrl }) => {
  return (
    <div className="relative rounded-xl sm:rounded-2xl border border-gray-200/90 overflow-hidden shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:border-pink-300 group flex flex-col justify-center">
      {/* Selo BÔNUS no canto superior direito sem estrelas */}
      <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10">
        <span className="text-[9px] sm:text-[11px] font-black tracking-wider uppercase text-white bg-[#E64394] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-md border border-white/60">
          BÔNUS
        </span>
      </div>

      {/* Imagem do Mockup sem borda sobrando, rente até os cantos */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title || 'Bônus'}
          className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      ) : null}
    </div>
  );
};
