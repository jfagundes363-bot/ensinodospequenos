import React from 'react';
import { X, Check, CheckCircle2, Download, Printer } from 'lucide-react';
import { ActivitySlide } from '../types';

interface WorksheetModalProps {
  activity: ActivitySlide | null;
  onClose: () => void;
}

export const WorksheetModal: React.FC<WorksheetModalProps> = ({ activity, onClose }) => {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden text-left max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-3.5 bg-[#FAF8F5] border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800">
              {activity.tag}
            </span>
            <span className="text-xs font-bold text-gray-800 truncate">
              {activity.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-200/80 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body - Sheet Zoom Preview */}
        <div className="p-4 overflow-y-auto space-y-3.5 text-xs bg-[#FFFFFF]">
          <div>
            <h3 className="text-sm font-extrabold text-gray-900 leading-tight">
              {activity.title}
            </h3>
            <p className="text-[11px] text-gray-600 mt-1">
              {activity.description}
            </p>
          </div>

          {/* Activity Specs Box */}
          <div className="bg-gray-50 p-3 rounded-2xl border border-gray-200/70 space-y-1.5 text-[11px]">
            <p className="flex items-center justify-between">
              <span className="text-gray-500">Habilidade trabalhada:</span>
              <span className="font-bold text-gray-800">{activity.previewDetails.skill}</span>
            </p>
            <p className="flex items-center justify-between">
              <span className="text-gray-500">Faixa etária sugerida:</span>
              <span className="font-bold text-orange-600">{activity.previewDetails.targetAge}</span>
            </p>
          </div>

          {/* Sheet Simulated Content */}
          <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-dashed border-amber-300 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] text-gray-500 border-b border-gray-200 pb-1">
              <span>Orientação:</span>
              <span className="font-semibold text-emerald-600">Fácil de aplicar</span>
            </div>
            <p className="text-[11px] font-semibold text-gray-800 italic">
              "{activity.previewDetails.instructions}"
            </p>

            <div className="space-y-1.5 pt-1">
              {activity.previewDetails.elements.map((el, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-white border border-gray-100">
                  <span className="font-bold text-gray-800">{el.label}</span>
                  {el.hint && <span className="text-[10px] text-gray-500">{el.hint}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[10px] text-gray-500 font-medium">Formato A4 • Alta Definição</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-orange-600 text-white text-xs font-bold rounded-xl hover:bg-orange-700 transition-colors"
          >
            Fechar Amostra
          </button>
        </div>
      </div>
    </div>
  );
};
