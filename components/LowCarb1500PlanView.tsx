
import React from 'react';

interface LowCarb1500PlanViewProps {
  onBack: () => void;
}

const LowCarb1500PlanView: React.FC<LowCarb1500PlanViewProps> = ({ onBack }) => {
  const days = [
    {
        day: "اليوم 1",
        title: "اليوم الأول",
        cal: 1500,
        p: 130,
        nc: 25,
        f: 95,
        details: [
            { name: "الإفطار: أومليت بالخضار والجبن (350 سعرة)", ing: "3 بيضات، 1 ملعقة طعام زيت زيتون، 30 جرام جبنة شيدر، فلفل وبصل.", method: "قلي الخضار، خفق البيض وصبه، وضع الجبن.", alt: "جبنة قريش أو فيتا.", ben: "بروتين ممتاز، دهون صحية." },
            { name: "الغداء: سلطة التونة بالمايونيز والخضار (550 سعرة)", ing: "علبة تونة، 2 م.ك مايونيز، 1/2 أفوكادو، خس.", method: "خلط التونة والمايونيز، ووضعه فوق الخس.", alt: "سمك سلمون معلب.", ben: "أوميغا 3 وألياف." },
            { name: "العشاء: دجاج مشوي مع البروكلي بالزبدة (600 سعرة)", ing: "180 جرام صدر دجاج، 1 كوب بروكلي، 1 م.ك زبدة.", method: "شوي الدجاج. سلق البروكلي وخلطه بالزبدة.", alt: "لحم بقر ستيك.", ben: "بروتين عالي وفيتامينات." }
        ]
    },
    {
        day: "اليوم 2",
        title: "اليوم الثاني",
        cal: 1500,
        p: 110,
        nc: 32,
        f: 97,
        details: [
            { name: "الإفطار: زبادي يوناني مع التوت والمكسرات (350 سعرة)", ing: "1 كوب زبادي يوناني، 1/2 كوب توت، 15 جرام لوز.", method: "وضع التوت والمكسرات فوق الزبادي.", alt: "جبن قريش.", ben: "بروبيوتيك ومضادات أكسدة." },
            { name: "الغداء: شوربة القرع بالكريمة واللحم (550 سعرة)", ing: "قرع، كريمة طبخ، 100 جرام لحم مفروم.", method: "طهي القرع والكريمة. إضافة اللحم المقلي.", alt: "قرنبيط مهروس.", ben: "فيتامين A ودهون صحية." },
            { name: "العشاء: سمك السلمون المشوي مع الهليون (600 سعرة)", ing: "180 جرام سلمون، 10 سيقان هليون، زيت زيتون.", method: "شوي السلمون والهليون بالفرن.", alt: "سمك الماكريل.", ben: "أوميغا 3 وحمض الفوليك." }
        ]
    },
    {
        day: "اليوم 3",
        title: "اليوم الثالث",
        cal: 1500,
        p: 130,
        nc: 24,
        f: 95,
        details: [
            { name: "الإفطار: عجة البيض والسبانخ بجبن الفيتا (350 سعرة)", ing: "3 بيضات، سبانخ، 30 جرام فيتا، زيت زيتون.", method: "قلي السبانخ، إضافة البيض والفيتا.", alt: "سلق بدل السبانخ.", ben: "حديد وبروتين كامل." },
            { name: "الغداء: لفائف الخس باللحم المفروم (550 سعرة)", ing: "150 جرام لحم مفروم، 4 أوراق خس، خضروات.", method: "قلي اللحم ووضعه في الخس.", alt: "دجاج مفروم.", ben: "بروتين ودهون صحية." },
            { name: "العشاء: أضلاع لحم الغنم مع الخضار (600 سعرة)", ing: "180 جرام أضلاع، كوب خضار مشكلة، زيت زيتون.", method: "تتبيل وشوي الأضلاع والخضار.", alt: "لحم الضأن (الموزة).", ben: "فيتامين B12 وألياف." }
        ]
    },
    {
        day: "اليوم 4",
        title: "اليوم الرابع",
        cal: 1500,
        p: 120,
        nc: 30,
        f: 100,
        details: [
            { name: "الإفطار: بودنغ بذور الشيا (350 سعرة)", ing: "كوب حليب لوز، 3 م.ك شيا، لوز.", method: "نقع الشيا في الحليب بالثلاجة.", alt: "حليب جوز الهند.", ben: "ألياف وأوميغا 3." },
            { name: "الغداء: صدر دجاج محشي موزاريلا (550 سعرة)", ing: "150 جرام دجاج، 30 جرام موزاريلا، بيستو، سبانخ.", method: "حشو الدجاج وخبزه.", alt: "ديك رومي.", ben: "بروتين وفيتامين A." },
            { name: "العشاء: ستيك لحم البقر وسلطة أفوكادو (600 سعرة)", ing: "180 جرام ستيك، 1/2 أفوكادو، طماطم.", method: "شوي الستيك وتقديمه مع السلطة.", alt: "لحم عجل.", ben: "حديد وزنك." }
        ]
    },
    {
        day: "اليوم 5",
        title: "اليوم الخامس",
        cal: 1500,
        p: 118,
        nc: 23,
        f: 100,
        details: [
            { name: "الإفطار: بيض مسلوق وأفوكادو (350 سعرة)", ing: "3 بيضات، 1/2 أفوكادو.", method: "سلق البيض وتقديمه مع الأفوكادو.", alt: "بيض مقلي.", ben: "بروتين ودهون صحية." },
            { name: "الغداء: كفتة لحم مع طماطم مشوية (550 سعرة)", ing: "150 جرام كفتة، طماطم كبيرة.", method: "شوي الكفتة والطماطم.", alt: "كرات دجاج.", ben: "بروتين وليكوبين." },
            { name: "العشاء: روبيان بالزبدة والثوم (600 سعرة)", ing: "180 جرام روبيان، زبدة، ثوم، سبانخ.", method: "قلي الروبيان بالزبدة، طهي السبانخ.", alt: "سمك بلطي.", ben: "يود وفيتامين C." }
        ]
    },
    {
        day: "اليوم 6",
        title: "اليوم السادس",
        cal: 1500,
        p: 130,
        nc: 30,
        f: 90,
        details: [
            { name: "الإفطار: بان كيك الكيتو (350 سعرة)", ing: "دقيق لوز، بيض، كريمة خفق.", method: "خلط وقلي الأقراص.", alt: "وافل الكيتو.", ben: "ألياف ودهون صحية." },
            { name: "الغداء: سلطة دجاج مشوي (550 سعرة)", ing: "150 جرام دجاج، خضار مشكلة، زيت زيتون.", method: "خلط الدجاج مع الخضار.", alt: "لحم بقري مقطع.", ben: "مضادات أكسدة." },
            { name: "العشاء: كبدة مطهية بالبصل (600 سعرة)", ing: "180 جرام كبدة، بصل، فلفل.", method: "قلي الكبدة مع الخضار.", alt: "كفتة.", ben: "حديد وفيتامين A." }
        ]
    },
    {
        day: "اليوم 7",
        title: "اليوم السابع",
        cal: 1500,
        p: 105,
        nc: 28,
        f: 105,
        details: [
            { name: "الإفطار: جبنة قريش وخيار (350 سعرة)", ing: "كوب جبنة قريش كاملة الدسم، خيار.", method: "خلط الجبنة بالتوابل.", alt: "جبنة فيتا.", ben: "بروتين كازين." },
            { name: "الغداء: سلطة بيض ومايونيز (550 سعرة)", ing: "4 بيضات، مايونيز، خردل، خس.", method: "خلط البيض بالصوص.", alt: "تونة.", ben: "فيتامين D." },
            { name: "العشاء: محاشي كوسة باللحم (600 سعرة)", ing: "كوسة، 150 جرام لحم مفروم.", method: "حشو الكوسة وطهيها.", alt: "فلفل محشو.", ben: "ألياف وبروتين." }
        ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header */}
      <header className="text-center mb-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border-t-4 border-emerald-600">
        <h1 className="text-3xl md:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 mb-2">🍽️ نظام الكاربوهيدرات المنخفضة (Low Carb)</h1>
        <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-6">خطة غذائية متكاملة لمدة 7 أيام - 1500 سعر حراري يوميًا</p>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl text-sm font-medium text-emerald-800 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-800/50">
            <span className="font-bold">ملاحظات هامة:</span> الكميات تقريبية (يفضل ميزان طعام). يجب شرب 2-3 لتر ماء يوميًا. التوابل والأعشاب مسموحة بحرية. الزيوت المسموحة: زيت الزيتون، زيت الأفوكادو، وزيت جوز الهند.
        </div>
      </header>

      {/* Summary Table */}
      <section className="mb-10 bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white p-6 border-b border-gray-100 dark:border-gray-700">ملخص السعرات والمغذيات الأسبوعي</h2>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-right text-gray-500 dark:text-gray-400 min-w-[600px]">
                <thead className="text-xs text-gray-700 dark:text-gray-200 uppercase bg-emerald-100 dark:bg-emerald-900/40">
                    <tr>
                        <th scope="col" className="p-4">اليوم</th>
                        <th scope="col" className="p-4">السعرات</th>
                        <th scope="col" className="p-4">البروتين (جم)</th>
                        <th scope="col" className="p-4">الكارب الصافي (جم)</th>
                        <th scope="col" className="p-4">الدهون (جم)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {days.map((row, idx) => (
                        <tr key={idx} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <th scope="row" className="p-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">{row.day}</th>
                            <td className="p-4 text-emerald-600 dark:text-emerald-400 font-bold">{row.cal}</td>
                            <td className="p-4">{row.p}</td>
                            <td className="p-4 text-orange-500 dark:text-orange-400 font-bold">{row.nc}</td>
                            <td className="p-4">{row.f}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Daily Details */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b-2 border-emerald-500 pb-2 inline-block">الوصف التفصيلي للوجبات الأسبوعية</h2>
        <div className="space-y-4">
            {days.map((day, idx) => (
                <details key={idx} className="group bg-white dark:bg-gray-800 p-2 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 open:ring-2 open:ring-emerald-500/30 transition-all duration-300">
                    <summary className="flex justify-between items-center p-4 cursor-pointer text-lg font-extrabold text-gray-800 dark:text-white select-none">
                        <span className="group-open:text-emerald-600 dark:group-open:text-emerald-400 transition-colors">{day.title}</span>
                        <span className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full group-open:bg-emerald-100 dark:group-open:bg-emerald-900/50 transition-colors">
                            {day.cal} سعرة
                        </span>
                    </summary>
                    <div className="px-4 pb-4 mt-2 space-y-4 border-t border-gray-100 dark:border-gray-700 pt-4 animate-fade-in">
                        {day.details.map((meal, mIdx) => (
                            <div key={mIdx} className={`p-4 rounded-xl border border-transparent ${mIdx === 0 ? 'bg-emerald-50 dark:bg-emerald-900/10' : mIdx === 1 ? 'bg-orange-50 dark:bg-orange-900/10' : 'bg-blue-50 dark:bg-blue-900/10'}`}>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-base">{meal.name}</h3>
                                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                                    <li><span className="font-bold text-gray-900 dark:text-gray-200">المكونات:</span> {meal.ing}</li>
                                    <li><span className="font-bold text-gray-900 dark:text-gray-200">التحضير:</span> {meal.method}</li>
                                    <li><span className="font-bold text-gray-900 dark:text-gray-200">البدائل:</span> {meal.alt}</li>
                                    <li className="text-emerald-600 dark:text-emerald-400 font-bold">✨ {meal.ben}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </details>
            ))}
        </div>
      </section>

      <footer className="mt-12 p-6 bg-emerald-600 dark:bg-emerald-800 text-white rounded-2xl shadow-lg text-center">
        <p className="text-lg font-bold mb-2">أتمنى لك خطة غذائية موفقة!</p>
        <p className="text-sm text-emerald-100">هل تود البحث عن وصفات محددة لهذه الوجبات؟</p>
      </footer>

    </div>
  );
};

export default LowCarb1500PlanView;
