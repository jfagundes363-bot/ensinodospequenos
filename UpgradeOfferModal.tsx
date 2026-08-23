import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ArrowRight } from 'lucide-react';

interface UpgradeOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onKeepBasic?: () => void;
  upgradeUrl?: string;
}

export const UpgradeOfferModal: React.FC<UpgradeOfferModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  upgradeUrl = 'https://checkout.applyfy.com.br/checkout/cmt5y7osn0q7901og8uoi1m1b?offer=XMC7R1U',
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
            id="modal-upgrade-1890"
            className="w-full max-w-[310px] bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border-2 border-pink-300 text-center relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="absolute top-2.5 right-2.5 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Mini Badge */}
            <div className="inline-flex items-center gap-1 bg-[#E64394] text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-2.5 h-2.5 fill-white" />
              <span>Oferta Especial</span>
            </div>

            {/* Headline */}
            <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight leading-tight">
              Espere! Leve nosso conteúdo completo por apenas{' '}
              <span className="text-[#E64394] block mt-0.5">R$ 18,90</span>
            </h3>

            {/* Price Box */}
            <div className="my-3 py-2 px-3 rounded-xl bg-pink-50/90 border border-pink-200/90 flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-bold text-gray-400 line-through block leading-none">
                  De R$ 75,00
                </span>
                <span className="text-[11px] font-extrabold text-pink-900 leading-tight">
                  Coleção + Todos os Bônus
                </span>
              </div>
              <span className="text-xl font-black text-[#E64394]">
                R$ 18,90
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-1.5 pt-0.5">
              <a
                href={upgradeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).fbq) {
                    (window as any).fbq('track', 'InitiateCheckout', {
                      content_name: 'Kit Completo + 5 Bônus (Oferta Especial R$ 18,90)',
                      value: 18.9,
                      currency: 'BRL',
                    });
                  }
                  onAcceptUpgrade();
                }}
                id="btn-aceitar-upgrade-1890"
                className="w-full touch-target-btn bg-gradient-to-r from-[#FF69B4] to-[#E64394] hover:from-[#FF77BC] hover:to-[#C72477] active:scale-[0.98] text-white font-extrabold text-xs py-2.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>Quero tudo por R$ 18,90</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={onClose}
                id="btn-voltar-ao-site"
                className="w-full text-[10px] font-semibold text-gray-400 hover:text-gray-700 py-1 transition-colors cursor-pointer"
              >
                Não, prefiro voltar para o site
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
