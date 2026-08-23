import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight, Clock } from 'lucide-react';

interface OfferExpiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept2990: () => void;
}

export const OfferExpiredModal: React.FC<OfferExpiredModalProps> = ({
  isOpen,
  onClose,
  onAccept2990,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-xs">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            id="modal-oferta-encerrada"
            className="w-full max-w-[310px] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-rose-200 text-center relative"
          >
            {/* Close / Sair Button (Top Right) */}
            <button
              onClick={onClose}
              aria-label="Sair"
              className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Expired Timer Mini Badge */}
            <div className="inline-flex items-center gap-1 bg-rose-100 text-rose-700 text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 border border-rose-200">
              <Clock className="w-2.5 h-2.5 text-rose-600 shrink-0 animate-pulse" />
              <span>Tempo Esgotado</span>
            </div>

            {/* Headline */}
            <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight leading-tight">
              A oferta encerrou!
            </h3>

            <p className="text-xs text-gray-600 font-medium mt-1 leading-snug">
              O tempo acabou, mas liberamos uma última chance para você garantir o desconto promocional:
            </p>

            {/* Price Highlight Box */}
            <div className="my-3 py-2 px-3 rounded-xl bg-pink-50/90 border border-pink-200/90 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-bold text-gray-400 line-through block leading-none">
                  De R$ 75,00
                </span>
                <span className="text-[11px] font-extrabold text-pink-900 leading-tight">
                  Kit Completo + 5 Bônus
                </span>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-[#E64394]">
                  R$ 24,90
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-1.5 pt-0.5">
              {/* Direct Buy for 24,90 Button */}
              <button
                onClick={onAccept2990}
                id="btn-leve-tudo-2490"
                className="w-full touch-target-btn bg-gradient-to-r from-[#FF69B4] to-[#E64394] hover:from-[#FF77BC] hover:to-[#C72477] active:scale-[0.98] text-white font-extrabold text-xs py-2.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 fill-white shrink-0" />
                <span>Leve tudo por R$ 24,90</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>

              {/* Sair / Fechar Button */}
              <button
                onClick={onClose}
                id="btn-sair-oferta-encerrada"
                className="w-full text-[10px] font-semibold text-gray-400 hover:text-gray-700 py-1 transition-colors cursor-pointer"
              >
                Sair e continuar navegando
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
