import React from 'react';

interface Balanced1900PlanViewProps {
  onBack: () => void;
}

const Balanced1900PlanView: React.FC<Balanced1900PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      title: "اليوم الأول: الانطلاقة",
      borderColor: "border-blue-500",
      meals: [
        { type: "الإفطار", name: "عجة الشوفان بالخضروات", cal: 450, color: "blue", ingredients: ["3 م.ك شوفان (30 جم)", "2 بيضة كاملة، 1/4 كوب حليب (60 مل)", "1/2 كوب خضروات، زيت زيتون"], method: ["يُسخن الزيت، تُخفق البيض مع الشوفان.", "تُضاف الخضروات ثم مزيج البيض."], benefits: "بروتين وألياف عالية.", alt: "توست أسمر مع بيض مسلوق." },
        { type: "الغداء", name: "أرز بني مع دجاج مشوي", cal: 700, color: "orange", ingredients: ["150 جم دجاج مشوي", "1 كوب أرز بني (150 جم)", "1.5 كوب خضار سوتيه"], method: ["يُشوى الدجاج المتبل.", "تُسلق الخضروات وتُقدم مع الأرز."], benefits: "طاقة مستدامة.", alt: "سمك مشوي أو لحم بقري." },
        { type: "العشاء", name: "سلطة التونة والأفوكادو", cal: 750, color: "red", ingredients: ["علبة تونة بالماء (100 جم)", "1/2 أفوكادو (50 جم)", "3 كوب خضروات، شريحتا خبز"], method: ["تُخلط التونة مع الخضروات.", "تُقدم مع الخبز المحمص."], benefits: "غني بأوميغا-3.", alt: "جبن قريش أو حمص." }
      ]
    },
    {
      title: "اليوم الثاني: الأسماك والبقوليات",
      borderColor: "border-green-500",
      meals: [
        { type: "الإفطار", name: "زبادي يوناني بالفواكه", cal: 450, color: "blue", ingredients: ["1 كوب زبادي يوناني", "1/2 كوب توت، عسل", "بذور شيا، 5 حبات لوز"], method: ["يُخلط الزبادي مع المكونات."], benefits: "بروبيوتيك، بروتين عالي.", alt: "جبن قريش مع حليب." },
        { type: "الغداء", name: "عدس وأرز مع سلطة", cal: 700, color: "orange", ingredients: ["1.5 كوب عدس مطبوخ", "1/2 كوب أرز أبيض", "سلطة خضراء، زيت زيتون"], method: ["يُطبخ العدس والأرز.", "يُتبل الطبق بالزيت."], benefits: "بروتين نباتي وحديد.", alt: "حمص أو فاصوليا بيضاء." },
        { type: "العشاء", name: "سلمون مشوي وبطاطا حلوة", cal: 750, color: "red", ingredients: ["150 جم سلمون مشوي", "1 بطاطا حلوة مشوية", "2 كوب خضروات"], method: ["يُشوى السلمون والبطاطا.", "تُسلق الخضروات."], benefits: "أوميغا-3 وفيتامينات.", alt: "150 جم سمك ماكريل." }
      ]
    },
    {
      title: "اليوم الثالث: وجبات سريعة وصحية",
      borderColor: "border-yellow-500",
      meals: [
        { type: "الإفطار", name: "ساندويتش بيض وسبانخ", cal: 450, color: "blue", ingredients: ["شريحتا توست أسمر", "2 بيضة مقلية، سبانخ", "شريحة جبن قليل الدسم"], method: ["تُقلى البيضة مع السبانخ.", "تُوضع في التوست."], benefits: "كالسيوم وحديد.", alt: "خبز الشوفان." },
        { type: "الغداء", name: "برجر لحم بقري قليل الدهن", cal: 700, color: "orange", ingredients: ["120 جم لحم مشوي", "خبز برجر كامل الحبة", "سلطة، كاتشب، تفاح"], method: ["يُشوى اللحم ويُقدم في البرجر."], benefits: "حديد وزنك.", alt: "صدر ديك رومي مفروم." },
        { type: "العشاء", name: "باستا القمح الكامل بالفيتا", cal: 750, color: "red", ingredients: ["1 كوب مكرونة قمح كامل", "صلصة طماطم، 50 جم فيتا", "زيت زيتون"], method: ["تُسلق المكرونة وتخلط بالصلصة."], benefits: "كربوهيدرات معقدة.", alt: "جبن بارميزان." }
      ]
    },
    {
      title: "اليوم الرابع: التنوع والمغذيات",
      borderColor: "border-purple-500",
      meals: [
        { type: "الإفطار", name: "شوفان بالحليب والموز", cal: 450, color: "blue", ingredients: ["1 كوب حليب", "3 م.ك شوفان، موزة", "مكسرات مفرومة"], method: ["يُسخن الحليب مع الشوفان.", "يُزين بالموز."], benefits: "بوتاسيوم وطاقة.", alt: "كورن فليكس كامل." },
        { type: "الغداء", name: "سلطة الكينوا والدجاج", cal: 700, color: "orange", ingredients: ["1 كوب كينوا مطبوخة", "150 جم دجاج، فاصوليا", "خضروات، زيت زيتون"], method: ["تُخلط المكونات وتتبل."], benefits: "بروتين كامل وألياف.", alt: "برغل مطبوخ." },
        { type: "العشاء", name: "يخنة خضروات باللحم", cal: 750, color: "red", ingredients: ["100 جم لحم بقري", "2 كوب خضروات مطبوخة", "شريحة خبز"], method: ["يُطهى اللحم والخضروات."], benefits: "وجبة دافئة ومشبعة.", alt: "فاصوليا حمراء مطبوخة." }
      ]
    },
    {
      title: "اليوم الخامس: خيارات مختلفة",
      borderColor: "border-pink-500",
      meals: [
        { type: "الإفطار", name: "ساندويتش حلوم مشوي", cal: 450, color: "blue", ingredients: ["شريحتا توست أسمر", "50 جم جبن حلوم", "طماطم وخيار"], method: ["تُشوى الحلوم وتُقدم مع التوست."], benefits: "بروتين وكالسيوم.", alt: "جبنة فيتا." },
        { type: "الغداء", name: "فيليه سمك وبطاطس مخبوزة", cal: 700, color: "orange", ingredients: ["150 جم سمك فيليه", "1 بطاطس مخبوزة", "سلطة كول سلو دايت"], method: ["يُشوى السمك وتخبز البطاطس."], benefits: "بروتين سهل الهضم.", alt: "روبيان مشوي." },
        { type: "العشاء", name: "بيتزا تورتيلا صحية", cal: 750, color: "red", ingredients: ["2 خبز تورتيلا", "صلصة، 40 جم موزاريلا", "خضروات"], method: ["تُخبز حتى تذوب الجبنة."], benefits: "حبوب كاملة وخضروات.", alt: "خبز بيتا." }
      ]
    },
    {
      title: "اليوم السادس: وجبات تقليدية خفيفة",
      borderColor: "border-indigo-500",
      meals: [
        { type: "الإفطار", name: "بان كيك الشوفان والموز", cal: 450, color: "blue", ingredients: ["3 م.ك شوفان، بيضة، حليب", "1/2 موزة، عسل"], method: ["تُخلط وتُقلى الأقراص."], benefits: "طاقة مستدامة.", alt: "تفاح مبروش." },
        { type: "الغداء", name: "ملوخية بالدجاج والأرز", cal: 700, color: "orange", ingredients: ["150 جم دجاج مسلوق", "1.5 كوب ملوخية", "1/2 كوب أرز، خبز"], method: ["تُطبخ الملوخية مع الدجاج."], benefits: "حديد وبروتين.", alt: "لحم أرنب." },
        { type: "العشاء", name: "شوربة العدس والقريش", cal: 750, color: "red", ingredients: ["1 كوب عدس، 2 كوب خضار", "100 جم جبن قريش", "خبز أسمر"], method: ["تُقدم الشوربة مع الجبن."], benefits: "ألياف وبروبيوتيك.", alt: "زبادي قليل الدسم." }
      ]
    },
    {
      title: "اليوم السابع: إكمال الأسبوع",
      borderColor: "border-red-500",
      meals: [
        { type: "الإفطار", name: "فول مدمس بالليمون", cal: 450, color: "blue", ingredients: ["1/2 كوب فول مدمس", "زيت زيتون، ليمون", "خضروات، خبز"], method: ["يُتبل الفول ويقدم."], benefits: "بروتين نباتي وألياف.", alt: "حمص مطحون." },
        { type: "الغداء", name: "صينية خضروات ودجاج", cal: 700, color: "orange", ingredients: ["150 جم دجاج", "1 كوب بطاطس", "خضروات، بهارات"], method: ["تُشوى في الفرن."], benefits: "وجبة شاملة.", alt: "توفو." },
        { type: "العشاء", name: "سلطة البيض والأفوكادو", cal: 750, color: "red", ingredients: ["2 بيضة مسلوقة", "1/2 أفوكادو", "خضروات ورقية، توست"], method: ["يُخلط البيض مع الخضروات."], benefits: "دهون صحية.", alt: "مكسرات مشكلة." }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header */}
      <header className="text-center mb-12 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-800 dark:text-blue-400 mb-4">النظام الغذائي المتوازن</h1>
        <div className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full border border-blue-100 dark:border-blue-800">
           <span className="font-bold text-blue-700 dark:text-blue-300">1900 سعرة حرارية</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">خطة مفصلة لمدة 7 أيام، مصممة لتوفير التوازن الغذائي وتحقيق أهدافك الصحية.</p>
      </header>

      {/* Calorie Breakdown */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl shadow-inner mb-12 border border-indigo-100 dark:border-indigo-900/50">
         <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">توزيع السعرات الحرارية المقترح</h2>
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-4xl font-extrabold text-green-500">450</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-bold">الإفطار (24%)</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-4xl font-extrabold text-orange-500">700</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-bold">الغداء (37%)</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <p className="text-4xl font-extrabold text-red-500">750</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 font-bold">العشاء (39%)</p>
            </div>
         </div>
      </div>

      {/* Days */}
      <div className="space-y-12">
        {days.map((day, idx) => (
            <section key={idx} className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border-t-8 ${day.borderColor} dark:border-opacity-80`}>
                <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-8 border-b dark:border-gray-700 pb-4">{day.title}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className={`p-6 border rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                            meal.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800' :
                            meal.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-100 dark:border-orange-800' :
                            'bg-red-50 dark:bg-red-900/10 border-red-100 dark:border-red-800'
                        }`}>
                            <div className="flex justify-between items-start mb-3">
                                <h3 className={`text-xl font-bold ${
                                    meal.color === 'blue' ? 'text-blue-700 dark:text-blue-400' :
                                    meal.color === 'orange' ? 'text-orange-700 dark:text-orange-400' :
                                    'text-red-700 dark:text-red-400'
                                }`}>{meal.type}</h3>
                                <span className="bg-white dark:bg-gray-800 text-xs font-bold px-2 py-1 rounded-lg shadow-sm text-gray-600 dark:text-gray-300">{meal.cal} سعرة</span>
                            </div>
                            
                            <h4 className="font-bold text-gray-800 dark:text-white mb-4 text-lg">{meal.name}</h4>
                            
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="font-bold text-gray-700 dark:text-gray-300 cursor-pointer flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        <svg className="w-4 h-4 transition-transform group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        المكونات والطريقة
                                    </summary>
                                    <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-900/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                                        <p className="font-bold text-gray-800 dark:text-gray-200 mb-2">المكونات:</p>
                                        <ul className="list-disc list-inside mb-3 space-y-1">
                                            {meal.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                        <p className="font-bold text-gray-800 dark:text-gray-200 mb-2">الطريقة:</p>
                                        <ol className="list-decimal list-inside space-y-1">
                                            {meal.method.map((step, i) => <li key={i}>{step}</li>)}
                                        </ol>
                                    </div>
                                </details>
                                
                                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl border border-gray-100 dark:border-gray-700 text-sm">
                                    <p className="mb-1"><span className="text-emerald-600 dark:text-emerald-400 font-bold">الفوائد:</span> <span className="text-gray-600 dark:text-gray-400">{meal.benefits}</span></p>
                                    <p><span className="text-gray-500 dark:text-gray-500 font-bold">البديل:</span> <span className="text-gray-500 dark:text-gray-400 italic">{meal.alt}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        ))}
      </div>

      <footer className="mt-12 p-8 bg-blue-900 text-white rounded-3xl text-center shadow-lg">
        <h3 className="text-xl font-bold mb-4">ملاحظات هامة للالتزام بالخطة</h3>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <p>• استشر أخصائي تغذية قبل البدء.</p>
            <p>• استخدم ميزان طعام للدقة.</p>
            <p>• اشرب 8 أكواب ماء يوميًا.</p>
        </div>
      </footer>
    </div>
  );
};

export default Balanced1900PlanView;