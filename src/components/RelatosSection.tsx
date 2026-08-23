import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { RELATOS_IMAGENS_DATA } from '../data/content';

export const RelatosSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalRelatos = RELATOS_IMAGENS_DATA.length;
  const currentRelato = RELATOS_IMAGENS_DATA[currentIndex] || RELATOS_IMAGENS_DATA[0];

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? totalRelatos - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === totalRelatos - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.28, ease: 'easeOut' },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' },
    }),
  };

  return (
    <section className="py-8 px-4 max-w-[430px] mx-auto" id="relatos-section">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white bg-[#E64394] px-4 py-1.5 rounded-full border border-pink-200 inline-flex items-center gap-2 shadow-sm">
          <MessageCircle className="w-4 h-4 text-white" /> Relatos Recebidos
        </span>
        
        <h2 className="text-2xl sm:text-[26px] font-black text-[#2D2A26] mt-2.5 tracking-tight leading-tight">
          Depoimentos de Pais, Mães e Educadores
        </h2>
        <p className="text-sm text-gray-600 font-medium mt-1.5 max-w-[360px] mx-auto">
          Mensagens e feedbacks reais enviados por quem já aplica o material no dia a dia:
        </p>
      </div>

      {/* Carousel Container - Destacado e com maior impacto */}
      <div className="relative p-1 rounded-3xl bg-gradient-to-b from-pink-200/70 via-rose-100/40 to-amber-100/50 shadow-lg max-w-[350px] mx-auto">
        <div
          className="relative w-full aspect-[9/16] rounded-[22px] overflow-hidden shadow-md bg-slate-900 border border-white/60 select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Slide Image */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentRelato.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full h-full"
            >
              <img
                src={currentRelato.imageUrl}
                alt={`Depoimento ${currentIndex + 1}`}
                className="w-full h-full object-cover object-center block select-none pointer-events-none"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Relato anterior"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer border border-white/30 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Próximo relato"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer border border-white/30 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

