import React from 'react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-6 px-4 max-w-[430px] mx-auto" id="garantia-section">
      <div className="w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img
          src="https://i.imgur.com/de4Mkzs.png"
          alt="Garantia incondicional de 7 dias ou seu dinheiro de volta"
          className="w-full h-auto object-contain block select-none"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
    </section>
  );
};

