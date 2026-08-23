import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-8 px-4 max-w-[430px] mx-auto overflow-hidden" id="como-funciona-section">
      {/* Header */}
      <div className="text-center mb-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block shadow-2xs">
          Simples e Rápido
        </span>
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#2D2A26] mt-2 tracking-tight">
          Começar é muito simples
        </h2>
        <p className="text-xs text-gray-600 mt-1">
          Em apenas quatro passos você já pode iniciar as atividades hoje mesmo.
        </p>
      </div>

      {/* 4 Staggered Scroll-Triggered Step Cards (Slide from Left to Right) */}
      <div className="space-y-3">
        {HOW_IT_WORKS.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`p-3.5 rounded-2xl ${step.bgTone} border ${step.borderColor} flex items-start gap-3 shadow-2xs transition-shadow hover:shadow-md will-change-transform`}
          >
            {/* Step Number Badge */}
            <div
              className={`w-9 h-9 rounded-xl ${step.textColor} bg-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs border border-black/5`}
            >
              {step.step}
            </div>

            {/* Step Details */}
            <div className="flex-1">
              <div className="flex items-center justify-between gap-1 mb-0.5">
                <h3 className={`text-xs font-black ${step.textColor} tracking-wide uppercase`}>
                  {step.title}
                </h3>
                <span className="text-[10px] font-bold text-gray-600 bg-white/80 px-2 py-0.5 rounded-md border border-black/5 shrink-0">
                  {step.badge}
                </span>
              </div>
              <p className="text-xs text-gray-700 leading-snug font-medium">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
