
import React from 'react';

interface LowCarb1300PlanViewProps {
  onBack: () => void;
}

const LowCarb1300PlanView: React.FC<LowCarb1300PlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto p-4 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-700 dark:hover:text-indigo-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden mb-8 border border-gray-100 dark:border-gray-700">
        {/* Header Section */}
        <header className="bg-indigo-600 dark:bg-indigo-900 p-8 text-white text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">🍽️ خطة الوجبات منخفضة الكربوهيدرات</h1>
            <p className="text-indigo-200 text-lg">نظام غذائي متكامل لمدة 7 أيام - 1300 سعر حراري يوميًا</p>
        </header>

        {/* General Overview */}
        <section className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2 border-indigo-100 dark:border-indigo-800">🥑 نظرة عامة على الخطة</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">هذا النظام الغذائي مقترح بمعدل 1300 سعر حراري يوميًا، مع التركيز على زيادة الدهون الصحية والبروتين وتقليل الكربوهيدرات النشوية.</p>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-xl shadow-inner">
                <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-300 mb-4">توزيع العناصر الغذائية التقريبي</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-medium">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-sm">
                        <p className="text-sm text-gray-500 dark:text-gray-400">البروتين</p>
                        <p className="text-xl font-bold text-green-600 dark:text-green-400">30% - 40%</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-sm">
                        <p className="text-sm text-gray-500 dark:text-gray-400">الدهون الصحية</p>
                        <p className="text-xl font-bold text-yellow-600 dark:text-yellow-400">40% - 50%</p>
                    </div>
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-indigo-100 dark:border-indigo-800 shadow-sm">
                        <p className="text-sm text-gray-500 dark:text-gray-400">الكربوهيدرات</p>
                        <p className="text-xl font-bold text-red-600 dark:text-red-400">10% - 20%</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Daily Meal Plan Section */}
        <section className="p-8 bg-gray-50 dark:bg-gray-900/30">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">📅 خطة الوجبات لـ 7 أيام</h2>

            {/* Days Loop */}
            {[
                {
                    day: "1️⃣ اليوم الأول",
                    title: "التركيز على البيض والدهون الصحية",
                    color: "green",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "أومليت بالخضار والجبن: (3 بيضات، سبانخ، فلفل رومي، 30 جرام جبنة شيدر، زيت زيتون).", alt: "2 ملعقة كبيرة من الأفوكادو المهروس بدل الجبن." },
                        { type: "الغداء", cal: "450", desc: "سلطة التونة الكيتو: (علبة تونة، 2 م.ك مايونيز عالي الدسم، 1/2 أفوكادو، خس وخيار).", alt: "100 جرام صدر دجاج مسلوق ومقطع." },
                        { type: "العشاء", cal: "450", desc: "صدر دجاج مشوي مع البروكلي: (120 جرام صدر دجاج، 1 كوب بروكلي مطهو على البخار، 1 م.ك زيت زيتون).", alt: "زهرة القرنبيط (الزهرة)." }
                    ]
                },
                {
                    day: "2️⃣ اليوم الثاني",
                    title: "خيارات سريعة وصديقة للدايت",
                    color: "blue",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "زبادي يوناني كامل الدسم مع المكسرات: (1 كوب زبادي، 10 حبات لوز، 1 م.ص بذور شيا).", alt: "2 بيضة مسلوقة مع 1 شريحة جبن." },
                        { type: "الغداء", cal: "450", desc: "لحم مفروم بالخس (Lettuce Wraps): (100 جرام لحم بقري مفروم، بصل، ثوم، بهارات، 4 أوراق خس كبيرة).", alt: "100 جرام تونة مطبوخة بصلصة طماطم خفيفة." },
                        { type: "العشاء", cal: "450", desc: "سمك سلمون مشوي مع الهليون: (100 جرام فيليه سلمون، 10 سيقان هليون، 1 م.ك زيت زيتون).", alt: "120 جرام دجاج مشوي مع طبق سلطة كبير." }
                    ]
                },
                {
                    day: "3️⃣ اليوم الثالث",
                    title: "وجبات مشبعة ومليئة بالنكهات",
                    color: "red",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "بان كيك جوز الهند الكيتو: (دقيق جوز هند، بيض، حليب لوز غير محلى، محلي صناعي، زيت جوز هند).", alt: "أومليت بيض تقليدي." },
                        { type: "الغداء", cal: "450", desc: "سلطة جبن الماعز والجرجير: (1 كوب جرجير، 50 جرام جبن ماعز، 5 حبات جوز، زيت زيتون وخل).", alt: "سلطة خضراء مع 100 جرام جبن حلومي مشوي." },
                        { type: "العشاء", cal: "450", desc: "كرات لحم بقري مع زهرة القرنبيط المهروسة: (120 جرام لحم مفروم، 1.5 كوب قرنبيط مهروس بزبدة).", alt: "100 جرام شريحة ستيك مشوية." }
                    ]
                },
                {
                    day: "4️⃣ اليوم الرابع",
                    title: "التوازن والبروتين الخالي من الدهون",
                    color: "yellow",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "عجة البيض المكسيكية: (3 بيضات، فاصوليا خضراء، 30 جرام موزاريلا، بقدونس).", alt: "3 بيضات مسلوقة مع 1 كوب خضار ورقية." },
                        { type: "الغداء", cal: "450", desc: "سلطة الدجاج بالمايونيز والأفوكادو: (100 جرام دجاج مسلوق، 2 م.ك مايونيز، 1/2 أفوكادو، كرفس).", alt: "100 جرام لحم ديك رومي بارد مع جبن." },
                        { type: "العشاء", cal: "450", desc: "محشي كوسة باللحم المفروم: (2 حبة كوسة مفرغة، 100 جرام لحم مفروم مطبوخ، صلصة طماطم).", alt: "100 جرام كبدة مقلية أو مشوية مع سلطة." }
                    ]
                },
                {
                    day: "5️⃣ اليوم الخامس",
                    title: "يوم الأسماك والخضروات الغنية",
                    color: "teal",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "فطيرة البيض بالسبانخ والزبدة: (3 بيضات، 1/2 كوب سبانخ، 1 م.ص زبدة).", alt: "زبادي يوناني مع بذور الكتان." },
                        { type: "الغداء", cal: "450", desc: "سردين مع زيت الزيتون وشرائح الفلفل: (1 علبة سردين، 1/2 حبة فلفل رومي، خس).", alt: "100 جرام صدر ديك رومي بارد مع مخلل." },
                        { type: "العشاء", cal: "450", desc: "شريحة لحم بقري (ستيك) مع فطر سوتيه: (100 جرام ستيك قليل الدهن، 1 كوب فطر بـ 1 م.ك زبدة).", alt: "دجاج مشوي مع صوص زبادي بالخيار." }
                    ]
                },
                {
                    day: "6️⃣ اليوم السادس",
                    title: "التنويع في مصادر البروتين",
                    color: "purple",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "بودنج بذور الشيا (Keto Chia Pudding): (3 م.ك بذور شيا، 1 كوب حليب لوز، محلي، جوز هند).", alt: "3 بيضات مخفوقة." },
                        { type: "الغداء", cal: "450", desc: "شوربة الدجاج والخضار الكيتو: (100 جرام دجاج، مرقة عظام، 1/2 كوب خضروات، زيت زيتون).", alt: "علبة تونة مع طبق خضروات كبير." },
                        { type: "العشاء", cal: "450", desc: "أصابع جبنة الحلومي المقلية مع سلطة: (100 جرام حلومي مقلية بزيت قليل، طبق سلطة كبير).", alt: "100 جرام لحم مفروم بالجبن." }
                    ]
                },
                {
                    day: "7️⃣ اليوم السابع",
                    title: "اختتام مُرضٍ ومغذٍ",
                    color: "pink",
                    meals: [
                        { type: "الافطار", cal: "400", desc: "فطيرة البيض السريعة: (2 بيضة، 2 م.ك كريمة طبخ كاملة الدسم، 20 جرام موزاريلا).", alt: "2 م.ك زبدة فول سوداني طبيعية مع كرفس." },
                        { type: "الغداء", cal: "450", desc: "سلطة البيض المسلوق والأفوكادو: (3 بيضات مسلوقة، 1/2 حبة أفوكادو، 1 م.ك مايونيز، بصل أخضر).", alt: "طبق كبير من الخضروات الورقية مع 100 جرام دجاج." },
                        { type: "العشاء", cal: "450", desc: "أجنحة دجاج في الفرن: (150 جرام أجنحة متبلة ومخبوزة، 1 كوب سبانخ مطهو على البخار).", alt: "120 جرام شريحة لحم ضأن مشوية." }
                    ]
                },
            ].map((day, idx) => (
                <div key={idx} className={`mb-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-t-4 border-${day.color}-500`}>
                    <h3 className={`text-2xl font-bold mb-6 flex items-center text-${day.color}-600 dark:text-${day.color}-400`}>
                        {day.day}: {day.title}
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm sm:text-base text-gray-700 dark:text-gray-300">
                            <thead className="bg-indigo-50 dark:bg-indigo-900/20">
                                <tr>
                                    <th className="p-3 text-right w-1/4 rounded-r-lg">الوجبة</th>
                                    <th className="p-3 text-right w-1/4">السعرات (تقريبي)</th>
                                    <th className="p-3 text-right w-2/4 rounded-l-lg">الوصف الشامل والبدائل</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {day.meals.map((meal, mIdx) => (
                                    <tr key={mIdx}>
                                        <td className="p-3 font-semibold">{meal.type}</td>
                                        <td className="p-3 font-bold text-gray-900 dark:text-white">{meal.cal} كالوري</td>
                                        <td className="p-3">
                                            <p className="font-bold text-gray-800 dark:text-white mb-1">{meal.desc}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">البديل: {meal.alt}</p>
                                        </td>
                                    </tr>
                                ))}
                                <tr className={`bg-${day.color}-50 dark:bg-${day.color}-900/10 font-bold`}>
                                    <td colSpan={2} className="p-3">المجموع</td>
                                    <td className="p-3 text-gray-900 dark:text-white">1300 كالوري</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </section>

        {/* Extra Tips Section */}
        <section className="p-8 bg-gray-100 dark:bg-gray-700/30">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2 border-gray-300 dark:border-gray-600">💡 نصائح إضافية لنجاح النظام</h2>
            <div className="grid md:grid-cols-2 gap-4">
                {[
                    { icon: "💧", title: "الترطيب والإلكتروليتات", text: "احرص على شرب كميات كبيرة من الماء. قد تحتاج لإضافة القليل من الملح." },
                    { icon: "🥬", title: "الخضروات", text: "ركز على الخضروات الورقية والصليبية (البروكلي، القرنبيط) فهي قليلة الكربوهيدرات." },
                    { icon: "🚫", title: "تجنب السكر الخفي", text: "تحقق دائمًا من ملصقات الأغذية المعلبة للتأكد من خلوها من السكريات المضافة." },
                    { icon: "🥑", title: "الدهون الصحية", text: "استثمر في مصادر الدهون الجيدة مثل زيت الزيتون، الأفوكادو، والزبدة الطبيعية." }
                ].map((tip, idx) => (
                    <div key={idx} className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                        <span className="text-2xl ml-3">{tip.icon}</span>
                        <div>
                            <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1">{tip.title}:</span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{tip.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
};

export default LowCarb1300PlanView;
