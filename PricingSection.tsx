import React from 'react';
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Sparkles, Star, X, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';
import { PricingPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  isOfferExpired?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, isOfferExpired = false }) => {
  const basicPlan = PRICING_PLANS.find((p) => p.id === 'basic')!;
  const originalCompletePlan = PRICING_PLANS.find((p) => p.id === 'complete')!;

  // Dynamic pricing for Kit Completo based on timer state
  const effectiveCompletePlan: PricingPlan = isOfferExpired
    ? {
        ...originalCompletePlan,
        price: 'R$ 75,00',
        priceValue: 75.0,
        originalPrice: undefined,
        discountBadge: undefined,
        periodText: 'Pagamento único • Sem desconto promocional',
      }
    : originalCompletePlan;

  return (
    <section className="py-8 sm:py-12 px-4 w-full max-w-[430px] sm:max-w-lg mx-auto box-border" id="ofertas-section">
      {/* Section Header */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-[11px] font-black uppercase tracking-wider text-rose-700 bg-rose-100/90 px-3 py-1 rounded-full border border-rose-200 inline-flex items-center gap-1.5 shadow-2xs">
          <Sparkles className="w-3 h-3 fill-rose-600 text-rose-600" />
          Oportunidade Exclusiva
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-[#2D2A26] mt-2.5 tracking-tight leading-tight font-display">
          Escolha a sua oferta
        </h2>
        <p className="text-xs sm:text-sm text-gray-700 mt-1.5 max-w-[360px] mx-auto leading-normal text-balance">
          Selecione o plano ideal para a rotina do seu filho. <strong className="font-extrabold text-gray-950">Acesso imediato</strong> aos arquivos digitais em PDF após a confirmação.
        </p>
      </div>

      {/* Cards Stack */}
      <div className="space-y-6 sm:space-y-8">
        {/* ========================================================= */}
        {/* CARD 01 — PLANO BÁSICO (R$ 12,90)                         */}
        {/* ========================================================= */}
        <div
          id="card-plano-basico"
          className="w-full bg-white border-2 border-gray-200 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
        >
          {/* Imagem Solta dentro do Card */}
          <div className="w-full mb-4">
            <img
              src="https://i.imgur.com/r6nAgXa.png"
              alt="Plano Básico de Alfabetização - R$ 12,90"
              className="w-full h-auto max-h-64 object-contain mx-auto block rounded-2xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Título, Preço e Informações do Plano Básico */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                Opção Básica
              </span>
              <span className="text-[10px] font-bold text-gray-400">PDF para Imprimir</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-900 leading-tight">
                Plano Básico
              </h3>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight">
                  R$ 12,90
                </span>
                <span className="text-xs font-semibold text-gray-500">
                  / pagamento único
                </span>
              </div>
            </div>

            {/* Lista Vertical de Informações do Plano Básico Conforme Solicitado */}
            <div className="pt-1">
              <ul className="space-y-2 text-xs sm:text-[13px] text-gray-800">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Acesse o material produto de alfabetização</strong> (caderno base completo em PDF)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Alfabeto de A ao Z com caligrafia e coordenação motora</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Acesso imediato no seu e-mail para imprimir</span>
                </li>
                <li className="flex items-start gap-2 text-amber-900 bg-amber-50/90 py-1.5 px-2.5 rounded-xl border border-amber-200/80 mt-1">
                  <X className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span className="font-bold text-[11px] sm:text-xs">
                    Sem os bônus inclusos (apenas o material básico)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Botão de Ação Básico */}
          <div className="pt-4 mt-auto">
            <button
              onClick={() => onSelectPlan(basicPlan)}
              id="btn-plano-basico"
              className="w-full touch-target-btn bg-white hover:bg-gray-50 active:scale-[0.98] text-gray-950 border-2 border-gray-950 font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer text-center"
            >
              <span>QUERO O PLANO BÁSICO - R$ 12,90</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
            <p className="text-[10px] text-center text-gray-400 font-medium mt-1.5">
              Sem mensalidades • Acesso no e-mail
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARD 02 — KIT COMPLETO + BÔNUS (R$ 29,90)                 */}
        {/* ========================================================= */}
        <div
          id="card-plano-completo"
          className="w-full bg-gradient-to-b from-rose-50/50 via-white to-pink-50/30 border-2 border-[#FF69B4] rounded-3xl p-4 sm:p-5 shadow-lg relative ring-2 ring-pink-400/20 flex flex-col justify-between overflow-hidden"
        >
          {/* Badge Superior em Destaque */}
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF69B4] to-[#E64394] text-white text-[10px] sm:text-[11px] font-black px-4 py-1 rounded-b-xl uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap z-10">
            <Star className="w-3.5 h-3.5 fill-white" />
            <span>Mais Vendido • Melhor Custo-Benefício</span>
          </div>

          {/* Imagem Solta dentro do Card */}
          <div className="w-full mt-4 mb-4">
            <img
              src="https://i.imgur.com/1hHOmAm.png"
              alt="Kit Completo de Alfabetização com Todos os Bônus - R$ 29,90"
              className="w-full h-auto max-h-72 object-contain mx-auto block rounded-2xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Título, Preço e Conteúdo do Kit Completo */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-100 text-[#E64394]">
                Coleção Completa + 5 Bônus
              </span>
              {!isOfferExpired && (
                <span className="text-[10px] font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md shadow-2xs">
                  60% OFF
                </span>
              )}
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-gray-950 leading-tight">
                Kit Completo de Alfabetização
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                {!isOfferExpired && (
                  <span className="text-sm font-bold text-gray-400 line-through">
                    R$ 75,90
                  </span>
                )}
                <span className="text-2xl sm:text-3xl font-black text-[#E64394] tracking-tight">
                  {effectiveCompletePlan.price}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  / vitalício
                </span>
              </div>
            </div>

            {/* Lista com Alto Destaque e Máxima Ênfase nos Bônus */}
            <div className="pt-1">
              <ul className="space-y-2 text-xs sm:text-[13px] text-gray-800">
                {/* Ponto 1 */}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Coleção Completa de Alfabetização:</strong> Todos os cadernos em PDF em alta resolução</span>
                </li>

                {/* Ponto 2 */}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Tudo do Plano Básico:</strong> Alfabeto completo (A ao Z), caligrafia e coordenação motora fina</span>
                </li>

                {/* Ponto 3 */}
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Acesso Vitalício:</strong> Baixe no seu e-mail e imprima quantas vezes quiser</span>
                </li>

                {/* Bloco de Destaque / Chamada dos 5 Bônus */}
                <li className="pt-2 pb-0.5">
                  <div className="bg-white text-[#FF1493] py-1.5 px-3 rounded-xl border border-pink-200 shadow-xs flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-black text-[11px] sm:text-xs uppercase tracking-wide text-[#FF1493]">
                      <span className="underline decoration-[#FF1493] decoration-2 underline-offset-2 font-black text-[#FF1493]">
                        OFERTA ESPECIAL: 5 SUPER BÔNUS INCLUSOS
                      </span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-black bg-pink-50 text-[#FF1493] border border-[#FF1493]/30 px-2 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </li>

                {/* Bônus 1 */}
                <li className="flex items-start gap-2 bg-pink-50/90 py-2 px-2.5 rounded-xl border border-pink-200/90 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E64394] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-pink-900 font-extrabold underline decoration-[#E64394] decoration-2 underline-offset-2">
                      BÔNUS 1: Módulo Sílaba Alfabético
                    </strong>{' '}
                    <span className="text-pink-900 font-medium">(sílabas simples, junções e sons fundamentais)</span>
                  </span>
                </li>

                {/* Bônus 2 */}
                <li className="flex items-start gap-2 bg-pink-50/90 py-2 px-2.5 rounded-xl border border-pink-200/90 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E64394] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-pink-900 font-extrabold underline decoration-[#E64394] decoration-2 underline-offset-2">
                      BÔNUS 2: Módulo Sílabas Complexas
                    </strong>{' '}
                    <span className="text-pink-900 font-medium">(famílias silábicas avançadas: CH, LH, NH, etc.)</span>
                  </span>
                </li>

                {/* Bônus 3 */}
                <li className="flex items-start gap-2 bg-pink-50/90 py-2 px-2.5 rounded-xl border border-pink-200/90 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E64394] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-pink-900 font-extrabold underline decoration-[#E64394] decoration-2 underline-offset-2">
                      BÔNUS 3: Módulo Pré-Silábicos
                    </strong>{' '}
                    <span className="text-pink-900 font-medium">(consciência fonológica e treino auditivo infantil)</span>
                  </span>
                </li>

                {/* Bônus 4 */}
                <li className="flex items-start gap-2 bg-pink-50/90 py-2 px-2.5 rounded-xl border border-pink-200/90 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E64394] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-pink-900 font-extrabold underline decoration-[#E64394] decoration-2 underline-offset-2">
                      BÔNUS 4: Formação de Palavras
                    </strong>{' '}
                    <span className="text-pink-900 font-medium">(frases ilustradas e primeiras leituras guiadas)</span>
                  </span>
                </li>

                {/* Bônus 5 */}
                <li className="flex items-start gap-2 bg-pink-50/90 py-2 px-2.5 rounded-xl border border-pink-200/90 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#E64394] shrink-0 mt-0.5" />
                  <span className="leading-snug">
                    <strong className="text-pink-900 font-extrabold underline decoration-[#E64394] decoration-2 underline-offset-2">
                      BÔNUS 5: Canções Infantis
                    </strong>{' '}
                    <span className="text-pink-900 font-medium">(cantigas clássicas ilustradas para cantar e colorir)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standout Prominent CTA with Traveling Border Beam */}
          <div className="w-full space-y-2 pt-4 mt-auto">
            <div className="btn-beam-container w-full">
              <div className="btn-beam-light" />
              <button
                onClick={() => onSelectPlan(effectiveCompletePlan)}
                id="btn-plano-completo"
                className="w-full relative z-10 touch-target-btn bg-gradient-to-r from-[#FF69B4] to-[#E64394] hover:from-[#FF77BC] hover:to-[#C72477] active:scale-[0.98] text-white font-black text-xs sm:text-sm py-3.5 px-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer uppercase tracking-tight text-center"
              >
                <span>
                  {isOfferExpired ? 'QUERO O KIT COMPLETO - R$ 75,00' : 'QUERO O KIT COMPLETO - R$ 24,90'}
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] text-gray-500 font-medium pt-0.5">
              <span className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" /> Pagamento Seguro
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" /> 7 Dias de Garantia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


