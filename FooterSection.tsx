import React from 'react';
import { ShieldCheck, Instagram, Facebook } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/ensinodospequenos/#";
  const facebookUrl = "https://www.facebook.com/profile.php?id=61593207399471";

  return (
    <footer className="w-full max-w-[430px] mx-auto py-8 px-4 text-center border-t border-gray-200/90 mt-4" id="footer-direitos-autorais">
      <div className="space-y-4">
        {/* Selo de Material Verificado */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-800 shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Material Verificado e Autenticado</span>
        </div>

        {/* Redes Sociais */}
        <div className="pt-2 flex flex-col items-center justify-center gap-1.5" id="secao-redes-sociais">
          <span className="text-xs sm:text-sm font-black text-gray-900 tracking-tight">
            Siga nas redes sociais:
          </span>
          <span className="text-[11px] font-semibold text-[#E64394]">
            Clique aqui
          </span>

          {/* Botões Interativos com Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-1">
            {/* Instagram Button */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="link-social-instagram"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 border border-pink-200 hover:border-pink-400 text-xs font-bold text-gray-900 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              title="Instagram @ensinodospequenos"
            >
              <Instagram className="w-4 h-4 text-[#E1306C] shrink-0" />
              <span>@ensinodospequenos</span>
            </a>

            {/* Facebook Button */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="link-social-facebook"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50/80 border border-blue-200 hover:border-blue-400 text-xs font-bold text-gray-900 shadow-2xs hover:shadow-xs transition-all active:scale-[0.98] cursor-pointer"
              title="Facebook Ensino dos Pequenos"
            >
              <Facebook className="w-4 h-4 text-[#1877F2] shrink-0 fill-[#1877F2]" />
              <span>ensinodospequenos</span>
            </a>
          </div>
        </div>

        {/* Direitos Autorais e Políticas */}
        <div className="pt-3 border-t border-gray-100 text-[10px] text-gray-400 space-y-1">
          <p>© {new Date().getFullYear()} Ensino dos Pequenos. Todos os direitos reservados.</p>
          <p className="max-w-[340px] mx-auto leading-normal">
            Conteúdo digital protegido pela Lei de Direitos Autorais. É proibida a reprodução ou revenda não autorizada.
          </p>
        </div>
      </div>
    </footer>
  );
};
