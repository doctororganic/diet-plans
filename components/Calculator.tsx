
import React, { useState } from 'react';
import { UserStats, Gender, ActivityLevel, Goal, NutritionPlan } from '../types';
import { CALORIE_RANGE } from '../constants';
import { getHealthTip } from '../services/geminiService';
import { IconCalculator, IconMale, IconFemale } from './Icons';
import { calculateNutritionPlan } from '../utils/nutritionCalculator';

interface CalculatorProps {
  onCalculate: (calories: number) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const [stats, setStats] = useState<UserStats>({
    gender: Gender.Female,
    age: 30,
    height: 165,
    weight: 70,
    activityLevel: ActivityLevel.Sedentary,
    goal: 'weight-loss'
  });
  
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState<string | null>(null);
  const [result, setResult] = useState<NutritionPlan | null>(null);

  const calculateCalories = async () => {
    setLoading(true);
    
    // 1. Perform Advanced Calculation
    const nutritionPlan = calculateNutritionPlan(stats);
    setResult(nutritionPlan);

    // 2. Find closest plan for the Grid
    const target = nutritionPlan.calories.target;
    const closestPlan = CALORIE_RANGE.reduce((prev, curr) => {
      return (Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev);
    });

    onCalculate(closestPlan);
    
    // 3. Get AI Tip
    const aiTip = await getHealthTip(closestPlan, stats.age, stats.gender);
    setTip(aiTip);
    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl shadow-purple-900/5 dark:shadow-purple-900/20 p-8 md:p-10 max-w-4xl mx-auto border border-white/50 dark:border-gray-700 relative overflow-hidden transition-colors duration-300">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 dark:bg-emerald-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-30 -ml-32 -mb-32"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-black text-gray-800 dark:text-white mb-8 flex items-center gap-3 border-b-2 border-purple-100 dark:border-purple-900/30 pb-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl text-purple-600 dark:text-purple-400">
            <IconCalculator className="w-8 h-8" />
          </div>
          حاسبة السعرات والماكروز
        </h2>

        {/* Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Gender */}
          <div className="md:col-span-2">
            <label className="block text-sm font-bold text-purple-700 dark:text-purple-300 mb-3">الجنس</label>
            <div className="grid grid-cols-2 gap-4">
              <label 
                className={`
                  cursor-pointer p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-300
                  ${stats.gender === Gender.Male 
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 shadow-lg shadow-emerald-500/10' 
                    : 'border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-white dark:hover:bg-gray-700'
                  }
                `}
              >
                <input 
                  type="radio" 
                  name="gender" 
                  className="hidden" 
                  checked={stats.gender === Gender.Male} 
                  onChange={() => setStats({...stats, gender: Gender.Male})}
                />
                <IconMale className="w-8 h-8" />
                <span className="font-bold">ذكر</span>
              </label>
              
              <label 
                className={`
                  cursor-pointer p-4 rounded-2xl border-2 flex flex-col items-center justify-center gap-3 transition-all duration-300
                  ${stats.gender === Gender.Female 
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 shadow-lg shadow-emerald-500/10' 
                    : 'border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 hover:border-emerald-200 dark:hover:border-emerald-800 hover:bg-white dark:hover:bg-gray-700'
                  }
                `}
              >
                <input 
                  type="radio" 
                  name="gender" 
                  className="hidden" 
                  checked={stats.gender === Gender.Female} 
                  onChange={() => setStats({...stats, gender: Gender.Female})}
                />
                <IconFemale className="w-8 h-8" />
                <span className="font-bold">أنثى</span>
              </label>
            </div>
          </div>

          {/* Age, Height, Weight */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">العمر (سنة)</label>
            <input
              type="number"
              value={stats.age}
              onChange={(e) => setStats({...stats, age: parseInt(e.target.value) || 0})}
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-transparent focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500 rounded-xl outline-none font-bold text-lg text-gray-800 dark:text-white transition-colors"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">الطول (سم)</label>
            <input
              type="number"
              value={stats.height}
              onChange={(e) => setStats({...stats, height: parseInt(e.target.value) || 0})}
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-transparent focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500 rounded-xl outline-none font-bold text-lg text-gray-800 dark:text-white transition-colors"
            />
          </div>

          <div className="group">
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">الوزن (كجم)</label>
            <input
              type="number"
              value={stats.weight}
              onChange={(e) => setStats({...stats, weight: parseInt(e.target.value) || 0})}
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-transparent focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500 rounded-xl outline-none font-bold text-lg text-gray-800 dark:text-white transition-colors"
            />
          </div>

          {/* Activity Level */}
          <div className="group">
            <label className="block text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">مستوى النشاط</label>
            <div className="relative">
              <select
                value={stats.activityLevel}
                onChange={(e) => setStats({...stats, activityLevel: e.target.value as ActivityLevel})}
                className="w-full p-4 bg-gray-50 dark:bg-gray-700 border-2 border-transparent focus:bg-white dark:focus:bg-gray-600 focus:border-purple-500 rounded-xl outline-none font-bold text-gray-800 dark:text-white appearance-none cursor-pointer transition-colors"
              >
                <option value={ActivityLevel.Sedentary}>خامل (مكتبي)</option>
                <option value={ActivityLevel.LightlyActive}>خفيف (1-3 أيام)</option>
                <option value={ActivityLevel.ModeratelyActive}>متوسط (3-5 أيام)</option>
                <option value={ActivityLevel.VeryActive}>عالي (6-7 أيام)</option>
                <option value={ActivityLevel.ExtraActive}>شاق (يومياً)</option>
              </select>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-purple-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>
        </div>

        {/* GOAL SELECTION */}
        <div className="mb-8">
            <label className="block text-sm font-bold text-purple-700 dark:text-purple-300 mb-3">هدفك الشخصي</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                    { id: 'weight-loss', label: 'خسارة وزن', emoji: '📉' },
                    { id: 'maintenance', label: 'حفاظ', emoji: '⚖️' },
                    { id: 'muscle-gain', label: 'بناء عضل', emoji: '💪' },
                    { id: 'performance', label: 'أداء رياضي', emoji: '⚡' },
                ].map((goalOption) => (
                    <button
                        key={goalOption.id}
                        onClick={() => setStats({...stats, goal: goalOption.id as Goal})}
                        className={`
                            p-3 rounded-xl border-2 font-bold text-sm transition-all duration-200
                            ${stats.goal === goalOption.id 
                                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300' 
                                : 'border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'}
                        `}
                    >
                        <span className="block text-xl mb-1">{goalOption.emoji}</span>
                        {goalOption.label}
                    </button>
                ))}
            </div>
        </div>

        <button
          onClick={calculateCalories}
          disabled={loading}
          className="w-full bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-700 hover:to-emerald-600 text-white font-black text-lg py-5 px-6 rounded-2xl transition-all shadow-xl shadow-purple-500/20 active:scale-[0.99] flex items-center justify-center gap-3 disabled:opacity-70"
        >
          {loading ? (
            <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          ) : (
            <>
              احسب احتياجي الدقيق
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </>
          )}
        </button>
        
        {/* DETAILED RESULTS CARD */}
        {result && (
          <div className="mt-10 animate-fade-in">
             <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                    <div className="text-center md:text-right mb-4 md:mb-0">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">احتياجك اليومي المقترح</p>
                        <p className="text-4xl font-black text-purple-600 dark:text-purple-400">{result.calories.target} <span className="text-lg text-gray-500">سعر</span></p>
                    </div>
                    <div className="flex gap-4 text-sm">
                        <div className="text-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-purple-100 dark:border-gray-700">
                            <p className="text-gray-400 text-xs font-bold">معدل الحرق (BMR)</p>
                            <p className="font-bold text-gray-700 dark:text-gray-300">{result.calories.bmr}</p>
                        </div>
                        <div className="text-center bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-emerald-100 dark:border-gray-700">
                            <p className="text-gray-400 text-xs font-bold">النشاط (TDEE)</p>
                            <p className="font-bold text-gray-700 dark:text-gray-300">{result.calories.tdee}</p>
                        </div>
                    </div>
                </div>

                {/* MACROS */}
                <h4 className="font-bold text-gray-800 dark:text-white mb-4">توزيع المغذيات (الماكروز):</h4>
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Protein */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 text-center">
                        <p className="text-blue-600 dark:text-blue-400 font-extrabold text-xl">{result.macronutrients.protein.grams}g</p>
                        <p className="text-xs font-bold text-blue-400 uppercase">بروتين</p>
                        <div className="w-full bg-blue-200 h-1.5 rounded-full mt-2">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: `${result.macronutrients.protein.percentage}%`}}></div>
                        </div>
                    </div>
                     {/* Carbs */}
                     <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 text-center">
                        <p className="text-emerald-600 dark:text-emerald-400 font-extrabold text-xl">{result.macronutrients.carbs.grams}g</p>
                        <p className="text-xs font-bold text-emerald-400 uppercase">كارب</p>
                         <div className="w-full bg-emerald-200 h-1.5 rounded-full mt-2">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: `${result.macronutrients.carbs.percentage}%`}}></div>
                        </div>
                    </div>
                     {/* Fat */}
                     <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border border-purple-100 dark:border-purple-800 text-center">
                        <p className="text-purple-600 dark:text-purple-400 font-extrabold text-xl">{result.macronutrients.fat.grams}g</p>
                        <p className="text-xs font-bold text-purple-400 uppercase">دهون</p>
                         <div className="w-full bg-purple-200 h-1.5 rounded-full mt-2">
                            <div className="bg-purple-500 h-1.5 rounded-full" style={{width: `${result.macronutrients.fat.percentage}%`}}></div>
                        </div>
                    </div>
                </div>

                {/* MICROS */}
                <h4 className="font-bold text-gray-800 dark:text-white mb-4">المغذيات الدقيقة (الفيتامينات والمعادن):</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {result.micronutrients.map((micro, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700">
                      <p className="text-xs text-gray-400 font-bold mb-1">{micro.name}</p>
                      <p className="text-lg font-black text-gray-700 dark:text-gray-200">{micro.value} <span className="text-xs font-normal">{micro.unit}</span></p>
                      {micro.note && <p className="text-[10px] text-purple-500 mt-1">{micro.note}</p>}
                    </div>
                  ))}
                </div>

                {/* RECOMMENDATIONS */}
                 <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        يوصى بشرب {Math.round(result.calories.target / 1000 * 1.5)} لتر ماء يومياً.
                    </p>
                    {result.recommendations.slice(0, 3).map((rec, idx) => (
                      <p key={idx} className="text-sm font-bold text-gray-600 dark:text-gray-300 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                          {rec}
                      </p>
                    ))}
                 </div>
             </div>
          </div>
        )}

        {tip && (
          <div className="mt-8 p-6 bg-purple-50/80 dark:bg-purple-900/30 border border-purple-100 dark:border-purple-800 rounded-2xl text-purple-900 dark:text-purple-100 text-base leading-relaxed animate-fade-in flex gap-4 items-start backdrop-blur-sm transition-colors duration-300">
            <div className="bg-purple-200/50 dark:bg-purple-500/20 p-2 rounded-lg text-purple-600 dark:text-purple-300 mt-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div>
              <strong className="block mb-1 text-lg font-bold">نصيحة ذكية لك:</strong>
              {tip}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
