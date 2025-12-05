
import React, { useState } from 'react';

interface LowCarb1700PlanViewProps {
  onBack: () => void;
}

const LowCarb1700PlanView: React.FC<LowCarb1700PlanViewProps> = ({ onBack }) => {
  const [activeDay, setActiveDay] = useState<string | null>('day1');

  const toggleDay = (day: string) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const days = [
    {
      id: "day1",
      title: "📅 اليوم الأول: السهل والمغذي",
      meals: [
        { type: "الفطور", name: "بيض مخفوق بالجبن والأفوكادو", cal: 400, desc: "اخفق البيض وتبّله. ذوّب الزبدة. اسكب البيض وأضف الجبنة قبل النضج. قدّمه مع مكعبات الأفوكادو.", ingredients: ["3 بيضات", "30 جرام جبنة شيدر", "1/3 حبة أفوكادو"] },
        { type: "الغداء", name: "سلطة التونة بالمايونيز والجرجير", cal: 550, desc: "خلط علبة تونة مع مايونيز وتقديمها على فرش من الجرجير.", ingredients: ["علبة تونة", "2 م.ك مايونيز", "جرجير"] },
        { type: "العشاء", name: "صدر دجاج مشوي مع البروكلي بالزبدة", cal: 750, desc: "شوي الدجاج وتقديمه مع بروكلي مسلوق ومقلب بالزبدة.", ingredients: ["180 جم دجاج", "كوب بروكلي", "زبدة"] }
      ]
    },
    {
      id: "day2",
      title: "📅 اليوم الثاني: دهون صحية وألياف",
      meals: [
        { type: "الفطور", name: "زبادي يوناني كامل الدسم وبذور الشيا", cal: 450, desc: "كوب زبادي مع ملعقة بذور شيا.", ingredients: ["1 كوب زبادي يوناني", "1 م.ك بذور شيا"] },
        { type: "الغداء", name: "لفائف الخس باللحم البقري المفروم", cal: 600, desc: "لحم مفروم مطبوخ ملفوف بأوراق الخس.", ingredients: ["150 جم لحم مفروم", "أوراق خس"] },
        { type: "العشاء", name: "سمك السلمون المشوي مع الهليون", cal: 650, desc: "ادهن السلمون والهليون بالزيت والليمون والملح والفلفل. اشوِهما في الفرن أو على الشواية.", ingredients: ["150 جرام سلمون: أوميغا-3 وفيتامين د", "هليون: حمض الفوليك وألياف"] }
      ]
    },
    {
      id: "day3",
      title: "📅 اليوم الثالث: التركيز على الخضار",
      meals: [
        { type: "الفطور", name: "قهوة بالزبدة (Bulletproof) مع بيضة مسلوقة", cal: 450, desc: "قهوة ممزوجة بالزبدة وزيت MCT مع بيضة جانبية.", ingredients: ["قهوة", "1 م.ك زبدة", "1 بيضة"] },
        { type: "الغداء", name: "سلطة الكيتو الملونة بالجبن والديك الرومي", cal: 550, desc: "سلطة خضراء مع شرائح ديك رومي وجبن.", ingredients: ["خضروات مشكلة", "50 جم جبن", "ديك رومي"] },
        { type: "العشاء", name: "يخنة لحم البقر مع القرنبيط المهروس", cal: 700, desc: "اسلق القرنبيط و اهرسه مع الزبدة والكريمة والملح والفلفل ليصبح كالبطاطا المهروسة.", ingredients: ["150 جرام لحم بقري", "3 أكواب قرنبيط (بديل النشا)", "كريمة طبخ وزبدة"] }
      ]
    },
    {
      id: "day4",
      title: "📅 اليوم الرابع: التنوع والمذاق",
      meals: [
        { type: "الفطور", name: "جبنة قريش كاملة الدسم مع التوت الأزرق", cal: 400, desc: "كوب جبن قريش مع حفنة توت.", ingredients: ["جبن قريش", "توت أزرق"] },
        { type: "الغداء", name: "برجر اللحم بدون خبز", cal: 650, desc: "شريحة لحم برجر مع الجبن والخس والطماطم (بدون خبز).", ingredients: ["لحم برجر", "جبن شريحة", "خضروات"] },
        { type: "العشاء", name: "روبيان بالزبدة والثوم مع السبانخ المقلية", cal: 650, desc: "قلّب الثوم في الزبدة، ثم أضف الروبيان. قلّب السبانخ بسرعة حتى تذبل وقدمها بجانب الروبيان.", ingredients: ["200 جرام روبيان مقشر", "3 أكواب سبانخ طازجة", "زبدة وثوم"] }
      ]
    },
    {
      id: "day5",
      title: "📅 اليوم الخامس: التركيز على البيض والبروتين",
      meals: [
        { type: "الفطور", name: "أومليت الخضروات (سبانخ وفلفل)", cal: 450, desc: "بيض مخفوق مع الخضروات المقلية.", ingredients: ["3 بيضات", "سبانخ", "فلفل"] },
        { type: "الغداء", name: "بقايا روبيان بالسبانخ", cal: 600, desc: "إعادة تسخين وجبة العشاء السابقة.", ingredients: ["روبيان", "سبانخ"] },
        { type: "العشاء", name: "شرائح لحم الضأن (لامب تشوب) مع سلطة", cal: 650, desc: "تبل لحم الضأن واشوه على الشواية. قدّمه مع سلطة الخس والخيار.", ingredients: ["200 جرام شرائح لحم ضأن", "2 ملعقة كبيرة زيت زيتون", "خس وخيار"] }
      ]
    },
    {
      id: "day6",
      title: "📅 اليوم السادس: وجبات مُشبعة",
      meals: [
        { type: "الفطور", name: "بيض مسلوق وأفوكادو", cal: 400, desc: "3 بيضات مسلوقة مع نصف أفوكادو.", ingredients: ["3 بيض", "1/2 أفوكادو"] },
        { type: "الغداء", name: "سلطة الدجاج بالمايونيز والخردل", cal: 650, desc: "دجاج مسلوق ومقطع مخلوط بالمايونيز والخردل.", ingredients: ["150 جم دجاج", "مايونيز", "خردل"] },
        { type: "العشاء", name: "سمك القد مع صلصة الزبدة والليمون", cal: 650, desc: "اشوِ سمك القد. قم بإذابة الزبدة مع عصير الليمون. صب الصلصة فوق السمك وقدمه مع الخضار المقلية.", ingredients: ["200 جرام سمك القد", "2 ملعقة كبيرة زبدة", "سبانخ أو قرنبيط"] }
      ]
    },
    {
      id: "day7",
      title: "📅 اليوم السابع: إفطار غني ودهون صحية",
      meals: [
        { type: "الفطور", name: "عجة (Omelette) بالجبن والبيبروني", cal: 450, desc: "بيض مخفوق مع شرائح بيبروني وجبن.", ingredients: ["3 بيض", "بيبروني", "جبن"] },
        { type: "الغداء", name: "سلطة جبن الماعز مع الجوز والجرجير", cal: 500, desc: "جرجير طازج مع جبن الماعز والجوز.", ingredients: ["جرجير", "جبن ماعز", "جوز"] },
        { type: "العشاء", name: "شرائح لحم ستيك (Ribeye) مع الفاصوليا", cal: 750, desc: "تبل الستيك واشوه في مقلاة ساخنة مع الزبدة. قلّب الفاصوليا الخضراء مع زيت الزيتون والثوم وقدمها بجانبه.", ingredients: ["200 جرام ستيك (Ribeye)", "2 كوب فاصوليا خضراء", "زبدة وثوم"] }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#1a5b48] dark:hover:bg-[#1a5b48] hover:text-white rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header */}
      <header className="text-center mb-10 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a5b48] dark:text-[#34d399] mb-2">🍽️ خطة النظام الغذائي الأسبوعية</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">منخفض الكربوهيدرات (Low-Carb) - 1700 سعر حراري تقريبي يومياً</p>
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 rounded-xl inline-block shadow-inner border border-green-100 dark:border-green-800">
            <span className="text-green-700 dark:text-green-300 font-bold ml-2">السعرات الحرارية اليومية:</span> 
            <span className="text-xl font-black text-green-800 dark:text-green-200">≈ 1700</span>
        </div>
      </header>

      {/* Notes */}
      <section className="mb-10 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-r-4 border-[#1a5b48] dark:border-[#34d399]">
        <h2 className="text-2xl font-bold text-[#1a5b48] dark:text-[#34d399] mb-4">📝 ملاحظات هامة</h2>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
                <span className="text-[#1a5b48] dark:text-[#34d399] font-bold ml-3 text-xl">•</span>
                <span><strong>توزيع الوجبات:</strong> 3 وجبات رئيسية يوميًا (فطور، غداء، عشاء).</span>
            </li>
            <li className="flex items-start">
                <span className="text-[#1a5b48] dark:text-[#34d399] font-bold ml-3 text-xl">•</span>
                <span><strong>الترطيب:</strong> اشرب كمية كافية من الماء (لا تقل عن 8 أكواب) يوميًا.</span>
            </li>
            <li className="flex items-start">
                <span className="text-[#1a5b48] dark:text-[#34d399] font-bold ml-3 text-xl">•</span>
                <span><strong>الخطة:</strong> مُركّزة على البروتينات عالية الجودة، الدهون الصحية، والخضروات غير النشوية.</span>
            </li>
        </ul>
      </section>

      {/* Accordion Plan */}
      <section className="space-y-4">
        {days.map((day) => (
            <div key={day.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300">
                <button 
                    onClick={() => toggleDay(day.id)}
                    className={`flex justify-between items-center w-full p-5 text-right transition-colors duration-300 ${activeDay === day.id ? 'bg-[#e6f7f2] dark:bg-[#1a5b48]/30' : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                    <h3 className="text-xl font-bold text-[#1a5b48] dark:text-[#34d399]">{day.title}</h3>
                    <span className={`text-gray-600 dark:text-gray-400 transform transition-transform duration-300 ${activeDay === day.id ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeDay === day.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5 border-t border-gray-100 dark:border-gray-700">
                        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider text-right">الوجبة</th>
                                        <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider text-right">الوصف</th>
                                        <th className="px-4 py-3 text-xs font-bold text-gray-500 dark:text-gray-300 uppercase tracking-wider text-right">السعرات</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                                    {day.meals.map((meal, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                            <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900 dark:text-white">{meal.type}</td>
                                            <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{meal.name}</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-[#1a5b48] dark:text-[#34d399] font-bold">{meal.cal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Detailed Description for Dinner (as per HTML sample logic) */}
                        <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">تفاصيل العشاء:</h4>
                            <ul className="list-disc pr-5 text-gray-700 dark:text-gray-300 text-sm space-y-1 mb-3">
                                {day.meals[2].ingredients.map((ing, i) => (
                                    <li key={i}>{ing}</li>
                                ))}
                            </ul>
                            <p className="text-sm italic text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-r-2 border-[#1a5b48]">
                                <span className="font-bold not-italic ml-1">طريقة التحضير:</span> {day.meals[2].desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </section>

      <footer className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
         <p>تم إعداد هذه الخطة بعناية. يُرجى استشارة أخصائي تغذية قبل البدء بأي نظام غذائي جديد.</p>
      </footer>
    </div>
  );
};

export default LowCarb1700PlanView;
