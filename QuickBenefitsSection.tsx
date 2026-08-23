import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import { QUICK_BENEFITS } from '../data/content';

export const QuickBenefitsSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-7 sm:py-9 px-3 sm:px-4 w-full max-w-[500px] mx-auto box-border" id="identificacao-section">
      {/* Section Header */}
      <div className="text-center mb-4 sm:mb-6">
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block shadow-2xs">
          Identificação & Desafios Reais
        </span>
        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#2D2A26] mt-2 tracking-tight leading-tight text-center">
          Você passa por isso?
        </h2>
        <p className="text-xs sm:text-[13px] text-gray-600 mt-1.5 leading-relaxed text-balance max-w-[420px] mx-auto">
          Seja você pai, mãe ou educador pedagógico, o processo de alfabetização pode ser desgastante quando faltam materiais estruturados:
        </p>
      </div>

      {/* 2 x 2 Mobile Grid Cards with 3D Flip */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
        {QUICK_BENEFITS.map((item) => {
          const isFlipped = !!flippedCards[item.id];

          return (
            <div
              key={item.id}
              className="flip-card-perspective min-h-[250px] sm:min-h-[265px] w-full"
            >
              <div
                className={`flip-card-inner ${isFlipped ? 'flip-card-flipped' : ''}`}
              >
                {/* LADO DA FRENTE (FRONT) */}
                <div
                  onClick={() => toggleCard(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleCard(item.id)}
                  className={`flip-card-front ${
                    item.imageFront
                      ? 'p-0 overflow-hidden bg-transparent border-0 shadow-none'
                      : `p-3.5 sm:p-4 flex flex-col justify-between rounded-2xl ${item.bgTone} border ${item.borderTone} shadow-2xs`
                  } transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer box-border select-none group relative`}
                >
                  {item.imageFront ? (
                    /* Imagem preenchendo perfeitamente o card sem borda ou fundo visível */
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
                      <img
                        src={item.imageFront}
                        alt={item.title || item.description}
                        className="w-full h-full object-cover rounded-2xl"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Cabeçalho do Card: 'Seu pequeno tem?' no topo */}
                      <div className="text-center w-full pt-0.5">
                        <span className="text-[12px] sm:text-[13px] font-black text-gray-800 tracking-tight text-center">
                          Seu pequeno tem?
                        </span>
                      </div>

                      {/* Texto principal perfeitamente centralizado em negrito com alto contraste para mobile */}
                      <div className="flex-grow flex items-center justify-center w-full px-1 py-2">
                        <p className="text-[12.5px] sm:text-[13.5px] text-gray-900 font-extrabold leading-snug text-center text-balance tracking-tight">
                          {item.description}
                        </p>
                      </div>

                      {/* Rodapé: 'clique aqui' posicionado acima de 'Toque para ver a solução' */}
                      <div className="flex flex-col items-center justify-center w-full gap-1 pt-1 pb-0.5">
                        <button
                          type="button"
                          onClick={(e) => toggleCard(item.id, e)}
                          className={`text-[11px] sm:text-[12px] font-extrabold ${item.textColor} underline underline-offset-2 decoration-2 decoration-current tracking-tight flex items-center justify-center gap-1 hover:scale-105 transition-transform cursor-pointer`}
                          aria-label={`Ver solução para ${item.description}`}
                        >
                          <span>clique aqui</span>
                          <RotateCw className="w-2.5 h-2.5 opacity-90 stroke-[2.5]" />
                        </button>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-gray-400 group-hover:text-gray-600 transition-colors uppercase tracking-wider">
                          Toque para ver a solução
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* LADO DE TRÁS (BACK) - Mostra a Solução Prática */}
                <div
                  onClick={() => toggleCard(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && toggleCard(item.id)}
                  className={`flip-card-back ${
                    item.imageBack
                      ? 'p-0 overflow-hidden bg-transparent border-0 shadow-none'
                      : `p-3.5 sm:p-4 flex flex-col justify-between rounded-2xl ${item.bgTone} border ${item.borderTone} shadow-2xs`
                  } transition-all duration-200 hover:shadow-md cursor-pointer box-border select-none group relative`}
                >
                  {item.imageBack ? (
                    /* Imagem preenchendo perfeitamente o verso do card sem borda ou fundo visível */
                    <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
                      <img
                        src={item.imageBack}
                        alt={item.title || item.solution}
                        className="w-full h-full object-cover rounded-2xl"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <>
                      {/* Cabeçalho do Verso: 'Solução recomendada' no topo */}
                      <div className="text-center w-full pt-0.5">
                        <span className="text-[12px] sm:text-[13px] font-black text-gray-800 tracking-tight text-center">
                          Solução recomendada
                        </span>
                      </div>

                      {/* Texto da Solução Organizado, Centralizado e com cor temática de destaque */}
                      <div className="flex-grow flex items-center justify-center w-full px-1 py-1.5 overflow-hidden">
                        <p className={`text-[11px] sm:text-[11.5px] ${item.solutionTextColor || 'text-gray-950'} font-extrabold leading-relaxed text-center text-balance tracking-tight`}>
                          {item.solution}
                        </p>
                      </div>

                      {/* Rodapé do Verso: 'voltar' posicionado acima de 'Toque para voltar' */}
                      <div className="flex flex-col items-center justify-center w-full gap-1 pt-1 pb-0.5">
                        <button
                          type="button"
                          onClick={(e) => toggleCard(item.id, e)}
                          className={`text-[11px] sm:text-[12px] font-extrabold ${item.textColor} underline underline-offset-2 decoration-2 decoration-current tracking-tight flex items-center justify-center gap-1 hover:scale-105 transition-transform cursor-pointer`}
                          aria-label="Voltar para o desafio anterior"
                        >
                          <span>voltar</span>
                          <RotateCw className="w-2.5 h-2.5 opacity-90 stroke-[2.5]" />
                        </button>
                        <span className="text-[9.5px] sm:text-[10px] font-bold text-gray-400 group-hover:text-gray-600 transition-colors uppercase tracking-wider">
                          Toque para voltar
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


