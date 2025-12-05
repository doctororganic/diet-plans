import React from 'react';
import { DietPlan } from '../types';
import { getIconByKey, IconFire } from './Icons';

interface PlanCardProps {
  plan: DietPlan;
  isRecommended: boolean;
  onSelect: (planId: string) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, isRecommended, onSelect }) => {
  return (
    <div 
      className={`
        relative group flex flex-col items-center justify-between p-6 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden
        ${isRecommended 
          ? 'bg-gradient-to-br from-emerald-500 to-purple-600 text-white shadow-2xl shadow-emerald-500/30 scale-105 z-10' 
          : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:shadow-xl hover:-translate-y-2'
        }
      `}
      onClick={() => onSelect(plan.id)}
    >
      {/* Decorative background circle for standard cards */}
      {!isRecommended && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-full mix-blend-multiply dark:mix-blend-overlay -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
      )}

      {isRecommended && (
        <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
          موصى به لك
        </span>
      )}

      <div className={`
        mb-6 p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
        ${isRecommended ? 'bg-white/10 text-white' : 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'}
      `}>
        {getIconByKey(plan.icon, "w-10 h-10")}
      </div>
      
      <div className="text-center w-full">
        <h3 className={`text-xl font-black mb-2 flex items-center justify-center gap-2 ${isRecommended ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
          <IconFire className={`w-5 h-5 ${isRecommended ? 'text-emerald-200' : 'text-orange-500'}`} />
          {plan.calories}
        </h3>
        
        <p className={`text-sm mb-6 font-medium ${isRecommended ? 'text-emerald-50' : 'text-gray-400 dark:text-gray-500'}`}>
          سعر حراري يومياً
        </p>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onSelect(plan.id);
          }}
          className={`
            w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
            ${isRecommended 
              ? 'bg-white text-emerald-600 hover:bg-emerald-50 shadow-lg shadow-black/10' 
              : 'bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white'
            }
          `}
        >
          عرض الخطة
          <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default PlanCard;