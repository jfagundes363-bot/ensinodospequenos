import React, { useState } from 'react';
import { HeaderBar } from './components/HeaderBar';
import { HeroSection } from './components/HeroSection';
import { QuickBenefitsSection } from './components/QuickBenefitsSection';
import { InteractiveGallerySection } from './components/InteractiveGallerySection';
import { WhyItWorksSection } from './components/WhyItWorksSection';
import { RelatosSection } from './components/RelatosSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { BonusSection } from './components/BonusSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FooterSection } from './components/FooterSection';
import { WorksheetModal } from './components/WorksheetModal';
import { CheckoutSettingsModal, PlanCheckoutModal } from './components/CheckoutSettingsModal';
import { PurchaseNotification } from './components/PurchaseNotification';
import { OfferExpiredModal } from './components/OfferExpiredModal';
import { UpgradeOfferModal } from './components/UpgradeOfferModal';
import { ActivitySlide, PricingPlan } from './types';
import { PRICING_PLANS } from './data/content';

export default function App() {
  // Mobile viewport simulator state (defaults to 'full' or responsive width)
  const [viewportWidth, setViewportWidth] = useState<number | 'full'>('full');
  
  // Timer state for dynamic pricing (changes from R$ 29,90 to R$ 75,00 on timer expiry)
  const [isOfferExpired, setIsOfferExpired] = useState(false);
  const [isExpiredModalOpen, setIsExpiredModalOpen] = useState(false);

  // Modals state
  const [selectedActivity, setSelectedActivity] = useState<ActivitySlide | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleTimerStateChange = (expired: boolean) => {
    setIsOfferExpired(expired);
    if (expired) {
      setIsExpiredModalOpen(true);
    }
  };

  // Dynamic checkout links with default Kiwify URLs
  const [basicCheckoutUrl, setBasicCheckoutUrl] = useState<string>('https://pay.kiwify.com.br/XTvHATQ');
  const [completeCheckoutUrl, setCompleteCheckoutUrl] = useState<string>('https://pay.kiwify.com.br/XzG6pz4');
  const [upgradeCheckoutUrl, setUpgradeCheckoutUrl] = useState<string>('https://pay.kiwify.com.br/aloHppE');

  const scrollToOffers = () => {
    const offerSection = document.getElementById('ofertas-section');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanSelect = (plan: PricingPlan) => {
    const targetUrl =
      plan.id === 'basic'
        ? basicCheckoutUrl
        : plan.id === 'upgrade_18'
        ? upgradeCheckoutUrl
        : completeCheckoutUrl;

    const updatedPlan: PricingPlan = {
      ...plan,
      checkoutUrl: targetUrl,
    };
    setSelectedPlan(updatedPlan);
  };

  const handlePlanBack = () => {
    const previousPlanId = selectedPlan?.id;
    setSelectedPlan(null);
    // If the user was viewing the 12,90 or 29,90 (or original complete) plan and pressed voltar/close, show 18,90 upgrade pop-up
    if (previousPlanId === 'basic' || previousPlanId === 'complete') {
      setIsUpgradeModalOpen(true);
    }
  };

  const handleAcceptUpgrade = () => {
    setIsUpgradeModalOpen(false);
    if (upgradeCheckoutUrl && upgradeCheckoutUrl.startsWith('http')) {
      window.open(upgradeCheckoutUrl, '_blank');
      return;
    }
    const upgradePlan: PricingPlan = {
      id: 'upgrade_18',
      name: 'Kit Completo + 5 Bônus (Oferta Especial)',
      badge: '75% OFF • Super Oferta',
      price: 'R$ 18,90',
      priceValue: 18.9,
      originalPrice: 'R$ 75,00',
      discountBadge: '75% OFF',
      periodText: 'Pagamento único • Acesso vitalício aos arquivos',
      subheadline: 'Experiência completa + todos os materiais extras',
      description: 'Aproveite a oportunidade e garanta a coleção completa de alfabetização com todos os 5 bônus por apenas R$ 18,90.',
      features: [
        { text: 'Kit Completo — Coleção completa de alfabetização pronta para imprimir', included: true, highlight: true },
        { text: 'Acesso vitalício ao material em PDF de alta resolução', included: true, highlight: true },
        { text: 'BÔNUS 1: Coleção de Jogos Fonéticos e Lúdicos', included: true },
        { text: 'BÔNUS 2: Caderno de Caligrafia Prática & Traçado', included: true },
        { text: 'BÔNUS 3: Cartões Sonoros de Vogais & Consoantes', included: true },
        { text: 'BÔNUS 4: Bloco de Atividades de Junção Silábica', included: true },
        { text: 'BÔNUS 5: Guia do Alfabetizador — Dicas práticas', included: true },
      ],
      ctaText: 'Garantir Tudo por R$ 18,90',
      checkoutUrl: upgradeCheckoutUrl,
    };
    setSelectedPlan(upgradePlan);
  };

  const handleKeepBasic = () => {
    const basicPlan = PRICING_PLANS.find((p) => p.id === 'basic')!;
    const updatedPlan: PricingPlan = {
      ...basicPlan,
      checkoutUrl: basicCheckoutUrl,
    };
    setIsUpgradeModalOpen(false);
    setSelectedPlan(updatedPlan);
  };

  const handleAccept2990 = () => {
    const completePlan = PRICING_PLANS.find((p) => p.id === 'complete')!;
    const updatedPlan: PricingPlan = {
      ...completePlan,
      price: 'R$ 29,90',
      priceValue: 29.9,
      originalPrice: 'R$ 75,90',
      discountBadge: '60% OFF',
      checkoutUrl: completeCheckoutUrl,
    };
    setIsExpiredModalOpen(false);
    setSelectedPlan(updatedPlan);
  };

  const handleSaveCheckoutUrls = (basic: string, complete: string, upgrade: string) => {
    setBasicCheckoutUrl(basic);
    setCompleteCheckoutUrl(complete);
    setUpgradeCheckoutUrl(upgrade);
  };

  const handleProceedExternal = (url: string) => {
    if (url.startsWith('http')) {
      window.open(url, '_blank');
    } else {
      alert(
        'Simulação de Checkout Seguro:\n\nEm um ambiente de produção, este botão redireciona o cliente para a plataforma de pagamento (Kiwify, Hotmart, Eduzz, etc.).\n\nVocê pode configurar o link real no botão "Links de Checkout" no topo da página!'
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2A26] flex flex-col items-center">
      {/* Top Bar with Live Visitor Counter, Timer & Expired Interaction */}
      <div className="w-full">
        <HeaderBar
          currentViewport={viewportWidth}
          onSelectViewport={setViewportWidth}
          onOpenSettings={() => setIsSettingsOpen(true)}
          onTimerStateChange={handleTimerStateChange}
        />
      </div>

      {/* Main Content Container */}
      <main className="w-full max-w-[430px] transition-all duration-300 bg-[#FAF8F5]">
        {/* 01. HERO SECTION */}
        <HeroSection onCtaClick={scrollToOffers} />

        {/* 02. BENEFÍCIOS RÁPIDOS / IDENTIFICAÇÃO (2x2) */}
        <QuickBenefitsSection />

        {/* 03. COMO FUNCIONA (4 Passos - Simples e Rápido) */}
        <HowItWorksSection />

        {/* 04. GALERIA INTERATIVA / DEMONSTRAÇÃO (Carrossel Horizontal + Tudo em um único material) */}
        <InteractiveGallerySection onSelectActivity={(act) => setSelectedActivity(act)} />

        {/* 05. ROTINA 1x1 (Uma rotina simples de 15 a 20 minutos por dia) */}
        <WhyItWorksSection />

        {/* 06. ANTES × DEPOIS */}
        <BeforeAfterSection />

        {/* 07. BÔNUS EXCLUSIVOS */}
        <BonusSection />

        {/* 08. SEÇÃO DE RELATOS RECEBIDOS (DEPOIMENTOS - POSICIONADA ACIMA DAS OFERTAS) */}
        <RelatosSection />

        {/* 09. OFERTAS R$ 12,90 × R$ 29,90 / R$ 40,90 (Oportunidades Exclusivas com Preço Dinâmico) */}
        <PricingSection
          onSelectPlan={handlePlanSelect}
          isOfferExpired={isOfferExpired}
        />

        {/* 10. GARANTIA DE 7 DIAS */}
        <GuaranteeSection />

        {/* 11. FAQ ACCORDION */}
        <FaqSection />

        {/* 12. RODAPÉ DE AUTORIA E DIREITOS AUTORAIS */}
        <FooterSection />
      </main>

      {/* Persistent Bottom-Left Purchase & Approval Floating Notification */}
      <PurchaseNotification />

      {/* Interactive Activity Worksheet Modal */}
      <WorksheetModal
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      {/* Checkout Settings Modal for Sellers */}
      <CheckoutSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        basicUrl={basicCheckoutUrl}
        completeUrl={completeCheckoutUrl}
        upgradeUrl={upgradeCheckoutUrl}
        onSaveUrls={handleSaveCheckoutUrls}
      />

      {/* Special Upgrade Offer Pop-up (R$ 18,90) when clicking Voltar on 12,90 or 29,90 plans */}
      <UpgradeOfferModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onAcceptUpgrade={handleAcceptUpgrade}
        onKeepBasic={handleKeepBasic}
        upgradeUrl={upgradeCheckoutUrl}
      />

      {/* Order Summary & Checkout Simulator Modal */}
      <PlanCheckoutModal
        plan={selectedPlan}
        onClose={handlePlanBack}
        onBack={handlePlanBack}
        onProceedExternal={handleProceedExternal}
      />

      {/* Center Modal Notification when Timer Expires */}
      <OfferExpiredModal
        isOpen={isExpiredModalOpen}
        onClose={() => setIsExpiredModalOpen(false)}
        onAccept2990={handleAccept2990}
      />
    </div>
  );
}
