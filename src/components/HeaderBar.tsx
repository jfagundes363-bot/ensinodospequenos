import React, { useState, useEffect, useRef } from 'react';
import { Timer, Flame, Users, AlertCircle } from 'lucide-react';

interface HeaderBarProps {
  currentViewport?: number | 'full';
  onSelectViewport?: (vp: number | 'full') => void;
  onOpenSettings?: () => void;
  onTimerStateChange?: (isExpired: boolean) => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ onTimerStateChange }) => {
  // 10 minutes countdown timer (600 seconds) - restarts on page reload as requested
  const [secondsLeft, setSecondsLeft] = useState<number>(10 * 60);

  // Keep ref of onTimerStateChange to avoid triggering effects when parent re-renders
  const onTimerStateChangeRef = useRef(onTimerStateChange);
  useEffect(() => {
    onTimerStateChangeRef.current = onTimerStateChange;
  }, [onTimerStateChange]);

  // Live visitors counter: strictly between 50 and 100, updates every 55 seconds
  const [visitorCount, setVisitorCount] = useState<number>(() => {
    // Initial random value between 58 and 88
    return Math.floor(Math.random() * (88 - 58 + 1)) + 58;
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Safely notify parent when timer reaches 0
  useEffect(() => {
    if (secondsLeft === 0) {
      onTimerStateChangeRef.current?.(true);
    }
  }, [secondsLeft]);

  // Live visitor fluctuation: strictly between 50 and 100, every 55 seconds (55000ms)
  useEffect(() => {
    const visitorInterval = setInterval(() => {
      setVisitorCount((prev) => {
        // Random step between -6 and +6 (avoid 0)
        const step = Math.floor(Math.random() * 13) - 6;
        const delta = step === 0 ? (Math.random() > 0.5 ? 4 : -4) : step;
        let next = prev + delta;

        // Strict clamp between 50 and 100
        if (next < 50) {
          next = 50 + Math.floor(Math.random() * 8);
        } else if (next > 100) {
          next = 100 - Math.floor(Math.random() * 8);
        }

        return next;
      });
    }, 55000);

    return () => clearInterval(visitorInterval);
  }, []);

  const isExpired = secondsLeft <= 0;
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 shadow-xs border-b border-[#FFCCE3] bg-[#FFE4F0]" id="topo-cabecalho">
      {/* Top Visitor Micro-Bar */}
      <div className="bg-[#82114B] text-white py-1 px-3 text-center border-b border-[#6D0E3F]">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 text-[11px] sm:text-xs font-bold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>
            <strong className="font-black text-pink-200">{visitorCount} pessoas</strong> navegando na página agora
          </span>
        </div>
      </div>

      {/* Main Header Countdown Bar */}
      <div className="max-w-5xl mx-auto px-2.5 sm:px-4 py-1.5 sm:py-2 relative flex items-center justify-between gap-2">
        {/* Left: Flame Icon + Text */}
        <div className="flex items-center gap-1.5 shrink-0">
          <Flame className="w-3.5 h-3.5 text-[#FF69B4] fill-[#FF69B4] shrink-0 animate-pulse" />
          <span className="font-extrabold text-[#82114B] tracking-wide text-[11px] sm:text-xs md:text-sm uppercase whitespace-nowrap">
            Oferta Limitada + Bônus
          </span>
        </div>

        {/* Center: Timer / Expired Status */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          {!isExpired ? (
            <>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#82114B] whitespace-nowrap">
                Encerra
              </span>
              <div className="flex items-center gap-1.5 bg-white/95 border border-[#FFCCE3] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg shadow-2xs">
                <Timer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF69B4] shrink-0" />
                <div className="flex items-center gap-0.5 font-mono font-black text-[#82114B] text-xs sm:text-sm tracking-wider">
                  <span className="min-w-[16px] sm:min-w-[18px] text-center font-bold text-[#82114B]">
                    {formattedMinutes}
                  </span>
                  <span className="text-[#FF69B4] font-bold animate-pulse">:</span>
                  <span className="min-w-[16px] sm:min-w-[18px] text-center font-bold text-[#82114B]">
                    {formattedSeconds}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1.5 bg-rose-600 text-white px-2.5 py-0.5 sm:py-1 rounded-lg shadow-xs animate-bounce">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">
                Oferta Especial Encerrada
              </span>
            </div>
          )}
        </div>

        {/* Right side info for desktop */}
        <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-[#82114B]/80">
          <Users className="w-3.5 h-3.5 text-[#FF69B4]" />
          <span>Alta Procura</span>
        </div>
      </div>
    </header>
  );
};
