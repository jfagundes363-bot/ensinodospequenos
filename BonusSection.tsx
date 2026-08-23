import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Gift, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { AnimatePresence, motion, type Variants } from 'motion/react';
import { BONUSES_DATA, INSIDE_LOOK_SLIDES } from '../data/content';
import { BonusMockupCard } from './WorksheetIllustrations';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.97,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28, mass: 0.8 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export const BonusSection: React.FC = () => {
  const firstFourBonuses = BONUSES_DATA.slice(0, 4);

  // Carousel State for 5th Bonus (Cantigas)
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 0]);
  const [isInView, setIsInView] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = INSIDE_LOOK_SLIDES.length;

  const nextSlide = useCallback(() => {
    setSlide(([prev]) => [(prev + 1) % totalSlides, 1]);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setSlide(([prev]) => [(prev - 1 + totalSlides) % totalSlides, -1]);
  }, [totalSlides]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isInView && !isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isInView, isPaused, nextSlide, currentIndex]);

  const activeSlide = INSIDE_LOOK_SLIDES[currentIndex];

  return (
    <section className="py-8 px-4 max-w-[430px] mx-auto" id="bonus-section">
      {/* Header com ênfase nos 5 Bônus */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 flex items-center justify-center gap-1.5 w-fit mx-auto shadow-2xs">
          <Gift className="w-3.5 h-3.5 text-rose-600" /> 5 BÔNUS EXCLUSIVOS
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] mt-2 tracking-tight">
          E no Kit Completo você ainda recebe{' '}
          <span className="text-rose-600 font-black uppercase">5 BÔNUS ESPECIAIS</span>:
        </h2>
        <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
          Materiais complementares desenvolvidos para enriquecer ainda mais a alfabetização em casa.
        </p>
      </div>

      {/* Grade com os 4 Primeiros Bônus (1 ao lado do outro em 2x2) */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 mb-2.5 sm:mb-3.5">
        {firstFourBonuses.map((bonus) => (
          <BonusMockupCard
            key={bonus.id}
            number={bonus.number}
            title={bonus.title}
            description={bonus.description}
            format={bonus.format}
            category={bonus.category}
            themeColor={bonus.themeColor}
            iconName={bonus.iconName}
            imageUrl={bonus.imageUrl}
          />
        ))}
      </div>

      {/* BÔNUS 05: Cantigas (Centralizado embaixo dos quatro primeiros) */}
      <div className="flex justify-center">
        <div
          ref={carouselRef}
          className="w-full max-w-[220px] sm:max-w-[230px] relative rounded-xl sm:rounded-2xl border border-pink-200 overflow-hidden shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:border-pink-300 group flex flex-col justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Parte superior: BÔNUS ESPECIAL + Título */}
          <div className="p-2.5 sm:p-3 text-center bg-gradient-to-b from-pink-50 to-white border-b border-pink-100">
            <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-pink-700 bg-pink-100 px-2.5 py-0.5 rounded-full border border-pink-200 shadow-xs">
              Bônus Especial
            </span>
            <p className="text-[11px] sm:text-xs font-black text-[#2D2A26] leading-snug mt-1.5">
              Livros e músicas para pintar e cantar com seus pequenos
            </p>
          </div>

          {/* Imagem com opções de clique para avançar/voltar */}
          <div className="relative select-none w-full">
            <div className="w-full aspect-[3/4] overflow-hidden relative flex items-center justify-center bg-white">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex items-center justify-center"
                >
                  {activeSlide?.imageUrl ? (
                    <img
                      src={activeSlide.imageUrl}
                      alt={activeSlide.alt || 'Bônus Especial'}
                      className="w-full h-full object-cover block select-none pointer-events-none"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-amber-50/30 p-2 text-center">
                      <ImageIcon className="w-6 h-6 text-amber-500 mb-1" />
                      <span className="text-[10px] font-bold text-amber-900">Bônus Especial</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Botões de Navegação Flutuantes */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Imagem anterior"
              className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md active:scale-95 cursor-pointer z-10"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Próxima imagem"
              className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all shadow-md active:scale-95 cursor-pointer z-10"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
