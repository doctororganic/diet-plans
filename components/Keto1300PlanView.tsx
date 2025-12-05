
import React from 'react';

interface Keto1300PlanViewProps {
  onBack: () => void;
}

const Keto1300PlanView: React.FC<Keto1300PlanViewProps> = ({ onBack }) => {
  const mealsData = [
    {
        day: "اليوم الأول – السبت",
        calories: "1290 سعرة",
        meals: [
            { type: "الإفطار", name: "بيض مقلي بالزبدة مع أفوكادو وبيكون", details: "بيضتان كاملتان + 2 شريحة بيكون تركي مدخن + ½ حبة أفوكادو + 1 ملعقة كبيرة زبدة.", carbs: "2 جم", benefits: "غني بدهون صحية + بوتاسيوم + بروتين عالي الامتصاص.", icon: "🍳" },
            { type: "الغداء", name: "سلطة تونة بالمايونيز والخضار الورقية", details: "علبة تونة مصفاة + 2 ملعقة كبيرة مايونيز كامل الدسم + خيار + خس + ½ أفوكادو + 10 حبات زيتون أسود + 30 جم جبنة شيدر.", carbs: "4 جم", benefits: "أوميجا-3 + فيتامين K2.", icon: "🥗" },
            { type: "العشاء", name: "ستيك سلمون مشوي بزبدة الليمون والثوم", details: "150 جم فيليه سلمون + 1 ملعقة كبيرة زبدة + عصير نصف ليمونة + ثوم مهروس + 100 جم بروكلي مسلوق (مع زبدة إضافية).", carbs: "3 جم", benefits: "أوميجا-3 عالية جداً.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم الثاني – الأحد",
        calories: "1310 سعرة",
        meals: [
            { type: "الإفطار", name: "أومليت جبنة وفطر بالكريمة الثقيلة", details: "3 بيضات + ¼ كوب كريمة ثقيلة + 50 جم فطر + 40 جم جبنة موزاريلا + زبدة للقلي.", carbs: "4 جم", benefits: "دهون غنية وكالسيوم.", icon: "🍄" },
            { type: "الغداء", name: "كرات اللحم الكيتو (لحم مفروم + جبنة بارميزان)", details: "200 جم لحم بقري مفروم + بيضة + 30 جم بارميزان + بهارات، تقدم مع صوص كريمة الطبخ.", carbs: "3 جم", benefits: "بروتين عالي الحديد.", icon: "🍽️" },
            { type: "العشاء", name: "دجاج بالزبدة (Butter Chicken كيتو)", details: "150 جم صدور دجاج + ½ كوب كريمة ثقيلة + 1 ملعقة صغيرة معجون طماطم + بهارات.", carbs: "5 جم", benefits: "مذاق غني ومشبع.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم الثالث – الإثنين",
        calories: "1280 سعرة",
        meals: [
            { type: "الإفطار", name: "قهوة مضادة للرصاص (Bulletproof) + بيض", details: "القهوة: قهوة + 1 م.ك زبدة + 1 م.ك زيت MCT + 3 بيضات مسلوقة + أفوكادو.", carbs: "2 جم", benefits: "طاقة مستدامة وكيتونات.", icon: "☕" },
            { type: "الغداء", name: "سلطة سيزر بالدجاج المشوي والجبنة", details: "150 جم دجاج مشوي + خس رومين + 2 ملعقة كبيرة صوص سيزر كيتو + جبنة بارميزان مبشور.", carbs: "4 جم", benefits: "سهل وسريع التحضير.", icon: "🍽️" },
            { type: "العشاء", name: "كبدة مشوية بالثوم والزبدة مع كوسا مقلية", details: "150 جم كبدة عجل + زبدة + ثوم + 150 جم كوسا مقلية بزيت الزيتون.", carbs: "5 جم", benefits: "غنية جداً بفيتامين A وB12 والحديد.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم الرابع – الثلاثاء",
        calories: "1305 سعرة",
        meals: [
            { type: "الإفطار", name: "بانكيك كيتو بدقيق اللوز", details: "بيضتان + ¼ كوب دقيق لوز + كريمة ثقيلة + فانيليا ومحلي ستيفيا، يقدم مع زبدة وقليل من التوت الأزرق (30 جم).", carbs: "4 جم", benefits: "بديل محبب للفطور التقليدي.", icon: "🥞" },
            { type: "الغداء", name: "روبيان بالثوم والزبدة مع القرنبيط المهروس", details: "200 جم روبيان + زبدة + ثوم + قرنبيط مهروس مع كريمة وجبنة.", carbs: "6 جم", benefits: "بروتين عالي وقليل السعرات.", icon: "🍽️" },
            { type: "العشاء", name: "برجر لحم بدون خبز مع جبنة وأفوكادو", details: "150 جم برجر بقري + شريحة جبنة شيدر + أفوكادو + خس + مايونيز.", carbs: "3 جم", benefits: "وجبة كلاسيكية ومشبعة.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم الخامس – الأربعاء",
        calories: "1290 سعرة",
        meals: [
            { type: "الإفطار", name: "جبنة كريمية ملفوفة بسموك سالمون", details: "100 جم جبنة كريمية كاملة الدسم + 80 جم سموك سالمون + شرائح خيار.", carbs: "2 جم", benefits: "دهون وأوميجا-3 سهلة وسريعة.", icon: "🧀" },
            { type: "الغداء", name: "بيتزا كيتو بقاعدة الدجاج", details: "قاعدة من الدجاج المفروم المطبوخ + صوص طماطم قليل السكر + موزاريلا + زيتون وفلفل.", carbs: "6 جم", benefits: "بديل رائع للبيتزا التقليدية.", icon: "🍕" },
            { type: "العشاء", name: "سمك مشوي مع صوص الكريما والسبانخ", details: "150 جم سمك أبيض (قاروص أو هامور) + سبانخ مطهية بكريمة ثقيلة وجبنة بارميزان.", carbs: "4 جم", benefits: "وجبة خفيفة وغنية بالدهون.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم السادس – الخميس",
        calories: "1315 سعرة",
        meals: [
            { type: "الإفطار", name: "عجة خضراء بالجبنة والسبانخ", details: "3 بيضات + سبانخ + جبنة فيتا + زبدة.", carbs: "3 جم", benefits: "خضار ورقية ومعادن.", icon: "🥚" },
            { type: "الغداء", name: "شاورما لحم كيتو بتورتيلا جوز الهند", details: "150 جم لحم متبل + مايونيز ثوم + خيار ومخلل (باستخدام تورتيلا جوز الهند أو خبز كيتو جاهز).", carbs: "5-7 جم", benefits: "مذاق الشاورما بدون كربوهيدرات.", icon: "🥙" },
            { type: "العشاء", name: "فخدة ضأن مشوية مع زبدة الأعشاب والهليون", details: "150 جم فخدة ضأن + زبدة أعشاب + 100 جم هليون مشوي.", carbs: "4 جم", benefits: "غنية بالبروتين والدهون الصحية.", icon: "🍽️" }
        ]
    },
    {
        day: "اليوم السابع – الجمعة",
        calories: "1280 سعرة",
        meals: [
            { type: "الإفطار", name: "فرنش توست كيتو", details: "خبز كيتو + بيض + كريمة ثقيلة + قرفة، مقلي بزبدة، مع كريمة مخفوقة بدون سكر.", carbs: "5 جم", benefits: "وجبة 'ترفيهية' كيتونية.", icon: "🍞" },
            { type: "الغداء", name: "تاكو كيتو بقشرة جبنة", details: "لحم مفروم متبل + قشرة جبنة شيدر مشوية + جواكامولي + كريما حامضة.", carbs: "5 جم", benefits: "طعم مكسيكي شهي.", icon: "🌮" },
            { type: "العشاء", name: "ريش لحم ضأن مع صوص المشروم والكريمة", details: "3 قطع ريش ضأن + صوص مشروم بكريمة ثقيلة وخردل.", carbs: "4 جم", benefits: "وجبة فاخرة ومشبعة.", icon: "🍄" }
        ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <header className="bg-gradient-to-l from-emerald-700 to-emerald-600 text-white p-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">نظام كيتو دايت متكامل (7 أيام)</h1>
            <p className="text-lg font-light opacity-90 mb-4">1300 سعرة حرارية يومياً | دهون عالية، كربوهيدرات صافية منخفضة</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-bold text-emerald-800">
                <span className="py-1 px-3 bg-white rounded-full shadow">70-75% دهون</span>
                <span className="py-1 px-3 bg-white rounded-full shadow">20-25% بروتين</span>
                <span className="py-1 px-3 bg-white rounded-full shadow">أقل من 25 جم كارب</span>
            </div>
        </header>

        <section className="p-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 border-r-4 border-emerald-500 pr-3">القواعد العامة للنظام</h2>
            <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                    <span className="text-emerald-500 font-bold ml-3 mt-1">✓</span>
                    <span>اشرب <strong>3-4 لتر ماء</strong> يومياً + ملح هيمالايا (لتعويض المعادن).</span>
                </li>
                <li className="flex items-start">
                    <span className="text-emerald-500 font-bold ml-3 mt-1">✓</span>
                    <span>الزيوت المستخدمة: <strong>زيت زيتون بكر – زبدة – زيت جوز الهند – زيت أفوكادو</strong>.</span>
                </li>
            </ul>
        </section>

        <div className="p-6 md:p-8 space-y-8">
            {mealsData.map((day, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                    <div className="bg-emerald-600 dark:bg-emerald-800 p-4 flex justify-between items-center text-white">
                        <h3 className="text-xl font-bold">{day.day}</h3>
                        <span className="bg-orange-400 dark:bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-sm">{day.calories}</span>
                    </div>
                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {day.meals.map((meal, mIdx) => (
                            <div key={mIdx} className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border-r-4 border-emerald-500 dark:border-emerald-600 hover:-translate-y-1 transition-transform shadow-sm">
                                <div className="flex items-center mb-3">
                                    <span className="text-3xl ml-3">{meal.icon}</span>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{meal.type}</h4>
                                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{meal.name}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">{meal.details}</p>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-600">
                                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                        كارب صافي: <span className="text-red-600 dark:text-red-400 font-bold">{meal.carbs}</span>
                                    </span>
                                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 text-left max-w-[50%]">
                                        {meal.benefits}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Keto1300PlanView;
