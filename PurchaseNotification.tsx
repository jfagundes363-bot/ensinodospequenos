import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface PurchaseEvent {
  id: number;
  name: string;
  timeAgo: string;
}

const PURCHASE_EVENTS: PurchaseEvent[] = [
  { id: 1, name: 'Mariana Silva', timeAgo: 'Agora' },
  { id: 2, name: 'Juliana Medeiros', timeAgo: 'há 1 min' },
  { id: 3, name: 'Patrícia Rocha', timeAgo: 'Agora' },
  { id: 4, name: 'Camila Fernandes', timeAgo: 'há 2 min' },
  { id: 5, name: 'Luciana Bastos', timeAgo: 'Agora' },
  { id: 6, name: 'Renata Albuquerque', timeAgo: 'há 1 min' },
  { id: 7, name: 'Vanessa Tavares', timeAgo: 'Agora' },
  { id: 8, name: 'Débora Lima', timeAgo: 'há 2 min' },
];

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  // Initial appearance after 2.5 seconds
  useEffect(() => {
    if (isDismissed) return;

    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  // Visibility cycle: stays visible for 3 seconds, then hides for 30 seconds before showing next
  useEffect(() => {
    if (isDismissed || !isVisible) return;

    // Hide after 3 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);

      // Wait 30 seconds to show a new notification
      const nextCycleTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PURCHASE_EVENTS.length);
        setIsVisible(true);
      }, 30000);

      return () => clearTimeout(nextCycleTimer);
    }, 3000);

    return () => clearTimeout(hideTimer);
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const currentEvent = PURCHASE_EVENTS[currentIndex];

  return (
    <div className="fixed bottom-3 left-3 z-40 pointer-events-none max-w-[210px] w-auto">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            id="notificacao-compra-aprovada"
            className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-md border border-emerald-200/90 flex items-center gap-2 relative"
          >
            {/* Tiny Check Icon */}
            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>

            {/* Notification Content: Only Name, Approved & Time */}
            <div className="min-w-0 pr-3">
              <p className="text-[11px] font-extrabold text-gray-900 leading-none truncate">
                {currentEvent.name}
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-[9px] font-black text-emerald-700 tracking-tight">
                  Compra aprovada
                </span>
                <span className="text-[8px] text-gray-400 font-medium">
                  • {currentEvent.timeAgo}
                </span>
              </div>
            </div>

            {/* Micro Dismiss Button */}
            <button
              onClick={() => setIsDismissed(true)}
              aria-label="Fechar notificação"
              className="text-gray-300 hover:text-gray-500 p-0.5 rounded transition-colors cursor-pointer shrink-0"
            >
              <X className="w-2.5 h-2.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
