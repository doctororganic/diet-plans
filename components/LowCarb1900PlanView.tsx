
import React from 'react';

interface LowCarb1900PlanViewProps {
  onBack: () => void;
}

const LowCarb1900PlanView: React.FC<LowCarb1900PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      title: "📅 اليوم الأول: السهل والمغذي",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🥚", type: "الفطور", name: "بيض مخفوق بالجبن والأفوكادو", cal: "450", color: "yellow", 
          details: [
            { label: "بيض", val: "3 حبات (بروتين عالي)" },
            { label: "زبدة/زيت", val: "1 م.ص (دهون صحية)" },
            { label: "جبنة شيدر", val: "30 جرام (كالسيوم، دهون)" },
            { label: "أفوكادو (زيادة)", val: "نصف حبة", highlight: true }
          ]
        },
        { icon: "🐟", type: "الغداء", name: "سلطة التونة بالمايونيز والجرجير", cal: "550", color: "green" },
        { icon: "🍗", type: "العشاء", name: "صدر دجاج مشوي مع البروكلي بالزبدة والزيت", cal: "900", color: "indigo",
          details: [
            { label: "صدر دجاج (زيادة)", val: "220 جرام (بروتين صافي)", highlight: true },
            { label: "زبدة", val: "2 ملعقة كبيرة (دهون، طعم)" },
            { label: "زيت زيتون (مُضاف)", val: "1 ملعقة كبيرة (دهون أحادية)", highlight: true },
            { label: "بروكلي", val: "3 أكواب (ألياف، فيتامينات)" },
            { note: "طريقة التحضير: تُضاف ملعقة زيت الزيتون مع الزبدة لتقليب البروكلي وتغطية الخضار بمزيد من الدهون الصحية." }
          ]
        }
      ]
    },
    {
      title: "📅 اليوم الثاني: دهون صحية وألياف",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🥛", type: "الفطور", name: "زبادي يوناني كامل الدسم وبذور الشيا والمكسرات", cal: "550", color: "yellow" },
        { icon: "🌮", type: "الغداء", name: "لفائف الخس باللحم البقري المفروم", cal: "650", color: "green" },
        { icon: "🍣", type: "العشاء", name: "سمك السلمون المشوي مع الهليون", cal: "700", color: "indigo" }
      ]
    },
    {
      title: "📅 اليوم الثالث: التركيز على الخضار",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "☕", type: "الفطور", name: "قهوة بالزبدة (Bulletproof Coffee) مع بيضة مسلوقة", cal: "450", color: "yellow" },
        { icon: "🥗", type: "الغداء", name: "سلطة الكيتو الملونة بالجبن والديك الرومي مع زيت إضافي", cal: "650", color: "green" },
        { icon: "🥩", type: "العشاء", name: "يخنة لحم البقر مع القرنبيط المهروس بالزبدة الإضافية", cal: "800", color: "indigo" }
      ]
    },
    {
      title: "📅 اليوم الرابع: التنوع والمذاق",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🧀", type: "الفطور", name: "جبنة قريش كاملة الدسم وكريمة مع التوت", cal: "450", color: "yellow" },
        { icon: "🍔", type: "الغداء", name: "برجر اللحم بدون خبز (أكبر حصة)", cal: "700", color: "green" },
        { icon: "🍤", type: "العشاء", name: "روبيان بالزبدة والثوم مع السبانخ بالزبدة الإضافية", cal: "750", color: "indigo" }
      ]
    },
    {
      title: "📅 اليوم الخامس: التركيز على البيض والبروتين",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🍳", type: "الفطور", name: "أومليت الخضروات بالجبن والكريمة", cal: "500", color: "yellow" },
        { icon: "🍤", type: "الغداء", name: "بقايا روبيان بالسبانخ (من عشاء الأمس)", cal: "650", color: "green" },
        { icon: "🍖", type: "العشاء", name: "شرائح لحم الضأن (لامب تشوب) مع سلطة جانبية", cal: "750", color: "indigo" }
      ]
    },
    {
      title: "📅 اليوم السادس: وجبات مُشبعة",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🥚", type: "الفطور", name: "بيض مسلوق وأفوكادو (حصة أكبر)", cal: "450", color: "yellow" },
        { icon: "🍗", type: "الغداء", name: "سلطة الدجاج بالمايونيز والخردل (بالمايونيز الإضافي)", cal: "750", color: "green" },
        { icon: "🐠", type: "العشاء", name: "سمك القد (Cod Fish) مع صلصة الزبدة والليمون", cal: "700", color: "indigo" }
      ]
    },
    {
      title: "📅 اليوم السابع: إفطار غني ودهون صحية",
      cal: "1900 سعر حراري تقريبي",
      meals: [
        { icon: "🍳", type: "الفطور", name: "عجة (Omelette) بالجبن والبيبروني", cal: "450", color: "yellow" },
        { icon: "🥗", type: "الغداء", name: "سلطة جبن الماعز مع الجوز والجرجير (حصة أكبر)", cal: "600", color: "green" },
        { icon: "🥩", type: "العشاء", name: "شرائح لحم ستيك (Ribeye) بوزن 250 جرام مع الفاصوليا الخضراء", cal: "850", color: "indigo" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header */}
      <header className="text-center mb-10 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border-t-8 border-indigo-600">
        <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-3">🍽️ نظامك الغذائي المُحدَّث</h1>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300">منخفض الكربوهيدرات: <span className="text-red-600 dark:text-red-400 font-black">1900 سعر حراري</span> يوميًا</p>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">تم زيادة السعرات الحرارية بإضافة المزيد من الدهون الصحية وزيادة طفيفة في حصص البروتين.</p>
      </header>

      {/* Notes */}
      <div className="mb-12 p-8 bg-indigo-100 dark:bg-indigo-900/20 border-r-4 border-indigo-500 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">📋 الملاحظات العامة (مُحدَّثة)</h2>
        <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 list-inside">
            <li className="flex items-start">
                <span className="text-indigo-500 font-bold ml-2">🔹</span>
                <p><span className="font-bold">السعرات الحرارية اليومية التقريبية:</span> ≈ 1900 سعر حراري.</p>
            </li>
            <li className="flex items-start">
                <span className="text-indigo-500 font-bold ml-2">🔹</span>
                <p><span className="font-bold">مبدأ الزيادة:</span> التركيز على زيادة حصص البروتين والدهون الصحية (زيوت، زبدة، أفوكادو، مكسرات).</p>
            </li>
        </ul>
      </div>

      {/* Days */}
      <div className="space-y-16">
        {days.map((day, idx) => (
            <section key={idx} className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-3xl shadow-xl border-t-4 border-red-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 dark:border-gray-700 pb-6 mb-8">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{day.title}</h3>
                    <div className="mt-4 md:mt-0 text-xl font-extrabold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-6 py-2 rounded-full border border-red-100 dark:border-red-900/50">
                        {day.cal}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className="flex flex-col">
                            <div className={`p-6 rounded-2xl border-r-4 shadow-md h-full transition-transform hover:-translate-y-1 ${
                                meal.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-500' :
                                meal.color === 'green' ? 'bg-green-50 dark:bg-green-900/10 border-green-500' :
                                'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-500'
                            }`}>
                                <p className={`text-xl font-bold mb-2 flex items-center ${
                                    meal.color === 'yellow' ? 'text-yellow-700 dark:text-yellow-400' :
                                    meal.color === 'green' ? 'text-green-700 dark:text-green-400' :
                                    'text-indigo-700 dark:text-indigo-400'
                                }`}>
                                    <span className="ml-2 text-2xl">{meal.icon}</span> {meal.type}:
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-3 font-medium">{meal.name}</p>
                                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">{meal.cal} سعر حراري</p>
                            </div>

                            {/* Show Details only if present */}
                            {meal.details && (
                                <div className={`mt-4 p-4 rounded-xl text-sm ${
                                    meal.color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/5' : 
                                    'bg-indigo-50 dark:bg-indigo-900/5'
                                }`}>
                                    <p className={`font-bold mb-3 ${
                                        meal.color === 'yellow' ? 'text-yellow-800 dark:text-yellow-300' : 
                                        'text-indigo-800 dark:text-indigo-300'
                                    }`}>تفاصيل {meal.type}:</p>
                                    <div className="grid grid-cols-1 gap-2 text-gray-700 dark:text-gray-300">
                                        {meal.details.map((detail: any, dIdx: number) => (
                                            detail.note ? (
                                                <p key={dIdx} className="text-xs text-indigo-600 dark:text-indigo-400 mt-2 italic">{detail.note}</p>
                                            ) : (
                                                <div key={dIdx} className={`p-2 rounded-lg ${
                                                    meal.color === 'yellow' ? 'bg-yellow-100 dark:bg-yellow-900/30' : 
                                                    'bg-indigo-100 dark:bg-indigo-900/30'
                                                }`}>
                                                    <span className={`font-medium ${detail.highlight ? 'text-red-600 dark:text-red-400 font-bold' : ''}`}>{detail.label}:</span> {detail.val}
                                                </div>
                                            )
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        ))}
      </div>

      <footer className="text-center mt-12 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl shadow-lg border border-indigo-100 dark:border-indigo-900/50">
        <p className="text-lg text-indigo-800 dark:text-indigo-300 font-medium">ملاحظة هامة: تم تصميم هذه التعديلات لرفع السعرات إلى 1900 مع الحفاظ على التوازن بين الدهون والبروتين، وهو ما يناسب النظام منخفض الكربوهيدرات.</p>
      </footer>
    </div>
  );
};

export default LowCarb1900PlanView;
