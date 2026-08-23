import React, { useState } from 'react';
import { X, Check, Link, ExternalLink, ShieldCheck, Zap, Mail, ArrowLeft } from 'lucide-react';
import { PricingPlan } from '../types';

interface CheckoutSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  basicUrl: string;
  completeUrl: string;
  upgradeUrl?: string;
  onSaveUrls: (basic: string, complete: string, upgrade: string) => void;
}

export const CheckoutSettingsModal: React.FC<CheckoutSettingsModalProps> = ({
  isOpen,
  onClose,
  basicUrl,
  completeUrl,
  upgradeUrl = 'https://pay.kiwify.com.br/aloHppE',
  onSaveUrls,
}) => {
  const [basic, setBasic] = useState(basicUrl);
  const [complete, setComplete] = useState(completeUrl);
  const [upgrade, setUpgrade] = useState(upgradeUrl);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUrls(basic, complete, upgrade);
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-2xl p-5 text-left space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Link className="w-4 h-4 text-orange-600" />
            <h3 className="text-sm font-extrabold text-gray-900">
              Configurar Links de Checkout
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-gray-600">
          Insira aqui os seus links de pagamento das plataformas como Hotmart, Kiwify, Eduzz, Braip ou Cakto.
        </p>

        <form onSubmit={handleSave} className="space-y-3.5 text-xs">
          {/* Complete plan link */}
          <div className="space-y-1">
            <label className="font-bold text-gray-800 flex items-center justify-between">
              <span>Link do Kit Completo (R$ 29,90)</span>
              <span className="text-[10px] text-orange-600 font-extrabold">Recomendado</span>
            </label>
            <input
              type="text"
              value={complete}
              onChange={(e) => setComplete(e.target.value)}
              placeholder="https://pay.kiwify.com.br/..."
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs font-mono"
            />
          </div>

          {/* Upgrade 18,90 plan link */}
          <div className="space-y-1">
            <label className="font-bold text-gray-800 flex items-center justify-between">
              <span>Link do Pop-up Upgrade (R$ 18,90)</span>
              <span className="text-[10px] text-[#E64394] font-extrabold">Super Oferta</span>
            </label>
            <input
              type="text"
              value={upgrade}
              onChange={(e) => setUpgrade(e.target.value)}
              placeholder="https://pay.kiwify.com.br/..."
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 text-xs font-mono"
            />
          </div>

          {/* Basic plan link */}
          <div className="space-y-1">
            <label className="font-bold text-gray-800">
              Link do Plano Básico (R$ 12,90)
            </label>
            <input
              type="text"
              value={basic}
              onChange={(e) => setBasic(e.target.value)}
              placeholder="https://pay.kiwify.com.br/..."
              className="w-full px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-xs font-mono"
            />
          </div>

          {saved && (
            <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 flex items-center gap-1.5 font-bold">
              <Check className="w-4 h-4 text-emerald-600" />
              Links salvos com sucesso!
            </div>
          )}

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-xs transition-colors"
            >
              Salvar Links
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const PlanCheckoutModal: React.FC<{
  plan: PricingPlan | null;
  onClose: () => void;
  onBack?: () => void;
  onProceedExternal: (url: string) => void;
}> = ({ plan, onClose, onBack, onProceedExternal }) => {
  if (!plan) return null;

  const handleBackAction = () => {
    if (onBack) {
      onBack();
    } else {
      onClose();
    }
  };

  const isBasic = plan.id === 'basic';
  const productImage = isBasic
    ? 'https://i.imgur.com/r6nAgXa.png'
    : 'https://i.imgur.com/1hHOmAm.png';

  const isExternalUrl =
    plan.checkoutUrl &&
    plan.checkoutUrl.startsWith('http') &&
    !plan.checkoutUrl.includes('#checkout');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl border border-gray-200 shadow-2xl p-5 text-left space-y-3.5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <button
            onClick={handleBackAction}
            className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors py-1 px-1.5 -ml-1.5 rounded-lg hover:bg-gray-100 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-black uppercase text-gray-800 tracking-wide">
              Confirmação do Pedido
            </span>
          </div>
          <button
            onClick={handleBackAction}
            className="w-7 h-7 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 cursor-pointer"
            aria-label="Fechar ou Voltar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product Card Overview */}
        <div className={`p-3.5 rounded-2xl border ${isBasic ? 'bg-amber-50/60 border-amber-200/80' : 'bg-pink-50/60 border-pink-200/80'}`}>
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 shrink-0 bg-white rounded-xl p-1 border border-gray-200 shadow-2xs flex items-center justify-center overflow-hidden">
              <img
                src={productImage}
                alt={plan.name}
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="space-y-1 flex-1">
              <span className={`text-[9px] font-black uppercase tracking-wide px-2 py-0.5 rounded-md ${isBasic ? 'bg-amber-100 text-amber-900' : 'bg-pink-100 text-[#E64394]'}`}>
                {plan.badge || (isBasic ? 'Plano Básico' : 'Kit Completo + Bônus')}
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1.5">
                <span className={`text-xl font-black ${isBasic ? 'text-gray-900' : 'text-[#E64394]'}`}>
                  {plan.price}
                </span>
                <span className="text-[10px] text-gray-500 font-medium">pagamento único</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-gray-200/60 text-xs text-gray-700 space-y-1">
            <p className="font-semibold text-[11px] text-gray-800">
              {isBasic
                ? '✓ Acesse o material produto de alfabetização em PDF (sem os bônus)'
                : '✓ Coleção completa em PDF + 5 Super Bônus inclusos'}
            </p>
            <p className="text-[10px] text-gray-500">
              Acesso vitalício • Imprima quantas vezes precisar
            </p>
          </div>
        </div>

        {/* Security & Delivery Information */}
        <div className="space-y-1.5 text-[11px] text-gray-600 font-medium bg-gray-50 p-3 rounded-xl border border-gray-200/70">
          <p className="flex items-center gap-1.5 text-gray-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong>Pagamento Seguro:</strong> Criptografia de ponta a ponta</span>
          </p>
          <p className="flex items-center gap-1.5 text-gray-800">
            <Mail className="w-4 h-4 text-[#E64394] shrink-0" />
            <span><strong>Envio Imediato:</strong> Receba o link de download no seu e-mail</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-1 space-y-2">
          {isExternalUrl ? (
            <a
              href={plan.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', {
                    content_name: plan.name,
                    value: plan.priceValue,
                    currency: 'BRL',
                  });
                }
              }}
              className={`w-full touch-target-btn ${
                isBasic
                  ? 'bg-gray-900 hover:bg-black text-white'
                  : 'bg-gradient-to-r from-[#FF69B4] to-[#E64394] hover:from-[#FF77BC] hover:to-[#C72477] text-white'
              } active:scale-[0.98] font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-center uppercase tracking-tight`}
            >
              <span>CONFIRMAR E IR PARA O CHECKOUT</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </a>
          ) : (
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'InitiateCheckout', {
                    content_name: plan.name,
                    value: plan.priceValue,
                    currency: 'BRL',
                  });
                }
                onProceedExternal(plan.checkoutUrl);
              }}
              className={`w-full touch-target-btn ${
                isBasic
                  ? 'bg-gray-900 hover:bg-black text-white'
                  : 'bg-gradient-to-r from-[#FF69B4] to-[#E64394] hover:from-[#FF77BC] hover:to-[#C72477] text-white'
              } active:scale-[0.98] font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight`}
            >
              <span>CONFIRMAR E IR PARA O CHECKOUT</span>
              <ExternalLink className="w-4 h-4 shrink-0" />
            </button>
          )}

          <button
            onClick={handleBackAction}
            className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-700 py-1 transition-colors cursor-pointer flex items-center justify-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar para a página</span>
          </button>
        </div>
      </div>
    </div>
  );
};
