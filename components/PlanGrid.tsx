
import React, { useState } from 'react';
import { DIET_GROUPS } from '../constants';
import PlanCard from './PlanCard';
import { getIconByKey } from './Icons';

interface PlanGridProps {
  recommendedCalories: number | null;
  onSelectPlan: (planId: string) => void;
}

const PlanGrid: React.FC<PlanGridProps> = ({ recommendedCalories, onSelectPlan }) => {
  const [activeTab, setActiveTab] = useState(DIET_GROUPS[0].name);

  return (
    <div className="mt-20 animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4 transition-colors border-b-4 border-purple-500 inline-block pb-1">
          خطط الأنظمة الغذائية
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed transition-colors mt-4">
          اختر نوع النظام الغذائي المفضل لديك لترى الخيارات المتاحة بالسعرات الحرارية المختلفة. 
        </p>
        {recommendedCalories && (
          <div className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full shadow-lg shadow-emerald-500/30 animate-bounce-slow transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="font-bold">أفضل خيار لك: {recommendedCalories} سعر حراري</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {DIET_GROUPS.map((group) => (
          <button
            key={group.name}
            onClick={() => setActiveTab(group.name)}
            className={`
              flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all duration-300 text-sm md:text-base border-2
              ${activeTab === group.name 
                ? 'bg-purple-600 border-purple-600 text-white shadow-xl shadow-purple-200 dark:shadow-purple-900/20 scale-105' 
                : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10'
              }
            `}
          >
            <span className={`${activeTab === group.name ? 'text-purple-100' : 'text-gray-400 dark:text-gray-500'}`}>
              {getIconByKey(group.icon, "w-6 h-6")}
            </span>
            {group.name}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] p-6 md:p-10 transition-colors shadow-2xl shadow-purple-50/50 dark:shadow-none">
        {DIET_GROUPS.map((group) => (
          group.name === activeTab && (
            <div key={group.name} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 animate-fade-in">
              {group.plans.map((plan) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan} 
                  isRecommended={recommendedCalories === plan.calories}
                  onSelect={onSelectPlan}
                />
              ))}
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default PlanGrid;
