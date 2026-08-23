import React from 'react';
import { Target, Zap, Heart, Star, BookOpen, TrendingUp } from 'lucide-react';

const BENEFITS_GRID = [
  {
    id: 'foco',
    title: 'Foco e atenção',
    icon: Target,
    iconColor: 'text-amber-600',
    bgIcon: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    id: 'rapido',
    title: 'Aprenda 3x mais rápido',
    icon: Zap,
    iconColor: 'text-rose-600',
    bgIcon: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    id: 'amor',
    title: 'Amor por estudar',
    icon: Heart,
    iconColor: 'text-pink-600',
    bgIcon: 'bg-pink-50',
    border: 'border-pink-100',
  },
  {
    id: 'confianca',
    title: 'Autoconfiança',
    icon: Star,
    iconColor: 'text-orange-600',
    bgIcon: 'bg-orange-50',
    border: 'border-orange-100',
  },
  {
    id: 'leitura',
    title: 'Leitura fluente',
    icon: BookOpen,
    iconColor: 'text-emerald-600',
    bgIcon: 'bg-emerald-50',
    border: 'border-emerald-100',
  },
  {
    id: 'notas',
    title: 'Notas melhores',
    icon: TrendingUp,
    iconColor: 'text-blue-600',
    bgIcon: 'bg-blue-50',
    border: 'border-blue-100',
  },
];

export const WhyItWorksSection: React.FC = () => {
  return (
    <section className="py-4 px-4 max-w-[430px] mx-auto" id="rotina-section">
      {/* Imagem em Formato 1 por 1 Substituindo o Texto */}
      <div className="relative rounded-2xl overflow-hidden shadow-sm transition-all duration-300 w-full">
        <img
          src="https://i.imgur.com/pKBecFU.png"
          alt="Uma rotina simples de 15 a 20 minutos por dia"
          className="w-full h-auto object-cover block"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Seção com os 6 Cards: Em poucas semanas, seu filho terá */}
      <div className="mt-6">
        <div className="text-center mb-3">
          <h3 className="text-sm sm:text-base font-black text-[#2D2A26] tracking-tight">
            Em poucas semanas, seu filho terá:
          </h3>
        </div>

        {/* Grade 3 em cima e 3 embaixo com espaçamento */}
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
          {BENEFITS_GRID.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl p-2.5 sm:p-3 border ${item.border} shadow-2xs flex flex-col items-center justify-center text-center hover:shadow-xs transition-all duration-200 min-h-[88px]`}
              >
                <div className={`w-8 h-8 rounded-lg ${item.bgIcon} flex items-center justify-center mb-1.5 shrink-0`}>
                  <Icon className={`w-4 h-4 ${item.iconColor}`} />
                </div>
                <span className="text-[11px] sm:text-xs font-black text-[#2D2A26] leading-tight">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


