import React from 'react';
import { getIconByKey, IconCalendar, IconFire } from './Icons';

const mealsData = [
    {
        day: 'اليوم الأول',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: '3 بيضات كبيرة، 2 شريحة جبن شيدر، 1 ملعقة كبيرة زيت زيتون، كوب سبانخ طازجة.', prep: 'يُسخن الزيت في مقلاة، تُضاف السبانخ ثم البيض والجبن. يُطهى كأومليت.', calories: 550, benefits: 'مصدر ممتاز للبروتين عالي الجودة وفيتامينات A و K والدهون الأساسية.', alternatives: 'استبدال البيض بـ 150 جرامًا من اللحم المقدد (Bacon).' },
            { type: 'lunch', label: 'الغداء', components: '180 جرامًا من سمك السلمون المشوي، 2 كوب بروكلي مطبوخ على البخار مع 1 ملعقة كبيرة زبدة.', prep: 'يُتبل السلمون ويُشوى، يُسلق البروكلي ثم يُضاف إليه الزبدة.', calories: 700, benefits: 'غني بأحماض أوميغا-3 الدهنية (EPA و DHA) الضرورية لصحة القلب والدماغ.', alternatives: 'استبدال السلمون بـ 200 جرام من التونة المعلبة في الزيت (تصفيتها قليلًا).' },
            { type: 'dinner', label: 'العشاء', components: '150 جرامًا لحم بقري مفروم (دهني)، نصف حبة أفوكادو، 30 جرام كريمة حامضة (Sour Cream).', prep: 'يُطهى اللحم مع التوابل. يُقدم مع الأفوكادو والكريمة الحامضة.', calories: 750, benefits: 'يوفر الحديد وفيتامين B12، والأفوكادو يضيف دهونًا أحادية غير مشبعة صحية.', alternatives: 'استبدال اللحم البقري بـ 180 جرامًا من لحم الضأن (Lamb).' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم الثاني',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: 'مشروب قهوة بالزبدة (Bulletproof Coffee): كوب قهوة، 1 ملعقة كبيرة زبدة غير مملحة، 1 ملعقة كبيرة زيت جوز الهند (MCT Oil).', prep: 'تُمزج المكونات في الخلاط حتى تصبح رغوية.', calories: 450, benefits: 'دفعة سريعة من الطاقة والدهون لدعم الشعور بالشبع لفترة طويلة.', alternatives: 'استبدال القهوة بشاي الأعشاب مع نفس كمية الدهون.' },
            { type: 'lunch', label: 'الغداء', components: 'سلطة التونة الكيتونية: علبة تونة بالزيت (تصفيتها قليلًا)، 3 ملاعق كبيرة مايونيز كامل الدسم، كوب خس، نصف حبة طماطم صغيرة.', prep: 'تُخلط التونة مع المايونيز وتُقدم على أوراق الخس.', calories: 650, benefits: 'بروتين قليل الكربوهيدرات، ودهون صحية من المايونيز.', alternatives: 'استبدال التونة بـ 150 جرامًا من الدجاج المفروم (Chicken Salad).' },
            { type: 'dinner', label: 'العشاء', components: '200 جرام فخذ دجاج (مع الجلد) مشوي، 1.5 كوب قرنبيط مهروس مع 2 ملعقة كبيرة كريمة ثقيلة.', prep: 'يُتبل الدجاج ويُشوى. يُسلق القرنبيط ويُهرس مع الكريمة والزبدة.', calories: 900, benefits: 'يوفر البروتين والدهون اللازمة من الجلد، والقرنبيط بديل ممتاز للنشويات.', alternatives: 'استبدال فخذ الدجاج بـ 180 جرامًا من لحم العجل (Veal).' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم الثالث',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: 'زبادي يوناني كامل الدسم (نصف كوب)، 50 جرام مكسرات مشكلة (لوز، جوز)، 1/4 كوب توت أزرق.', prep: 'تُخلط المكونات معًا.', calories: 600, benefits: 'مصدر للبروبيوتيك والدهون والألياف من المكسرات.', alternatives: 'استبدال الزبادي بـ جبن قريش (Cottage Cheese) كامل الدسم.' },
            { type: 'lunch', label: 'الغداء', components: 'بيتزا الكيتو (بقاعدة القرنبيط أو الجبن): قطعة بيتزا صغيرة، عليها 100 جرام جبنة موزاريلا، شرائح زيتون وبيبروني.', prep: 'تُحضر قاعدة الكيتو وتُخبز مع المكونات.', calories: 750, benefits: 'وجبة مرضية توفر الكالسيوم والبروتين والدهون.', alternatives: 'استبدال البيتزا بـ كاساديا (Quesadilla) كيتو (باستخدام خبز التورتيلا قليل الكربوهيدرات).' },
            { type: 'dinner', label: 'العشاء', components: '200 جرام ستيك (Ribeye) متبل، كوب فطر سوتيه مع 1 ملعقة كبيرة زبدة.', prep: 'يُقلى أو يُشوى الستيك حسب الرغبة، ويُقلى الفطر في الزبدة.', calories: 650, benefits: 'مصدر ممتاز للبروتين والدهون المشبعة الصحية، والفطر يضيف المعادن.', alternatives: 'استبدال الستيك بـ 150 جرامًا من الكبدة المقلية.' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم الرابع',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: '2 بيضة مقلية في ملعقة كبيرة زبدة، مع 3 شرائح جبن حلوم مقلية.', prep: 'يُقلى البيض والجبن في الزبدة حتى يصبح ذهبيًا.', calories: 600, benefits: 'مزيج غني بالبروتين والدهون لتوليد طاقة مستمرة.', alternatives: 'استبدال جبن الحلوم بـ 70 جرامًا من جبن الماعز.' },
            { type: 'lunch', label: 'الغداء', components: '200 جرام كفتة لحم، طبق سلطة كبير (خيار، خس، جرجير)، تتبيلة زيت زيتون وليمون.', prep: 'تُشوى الكفتة وتُقدم مع السلطة متبلة.', calories: 700, benefits: 'بروتين سهل الهضم، والسلطة تمد الجسم بالألياف والمعادن.', alternatives: 'استبدال الكفتة بـ 200 جرام من سوسيس اللحم البقري قليل الكربوهيدرات.' },
            { type: 'dinner', label: 'العشاء', components: 'شوربة كريمة الدجاج: كوب مرق دجاج، 100 جرام دجاج مُقطّع، نصف كوب كريمة ثقيلة، كرفس وبصل أخضر.', prep: 'تُطهى المكونات معًا للحصول على شوربة كريمية غنية.', calories: 700, benefits: 'ترطيب، وإلكتروليتات من المرق، وسعرات عالية من الكريمة والبروتين.', alternatives: 'استبدال الدجاج بشوربة كريمة الفطر.' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم الخامس',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: 'بان كيك الكيتو: 2 قطعة بان كيك (مصنوعة من دقيق اللوز أو جوز الهند) مع 50 جرام كريمة خفق و50 جرام توت أحمر.', prep: 'تُخلط وتُخبز عجينة الكيتو، وتُزين بالكريمة والتوت.', calories: 650, benefits: 'وجبة حلوة قليلة الكربوهيدرات وغنية بالدهون والألياف.', alternatives: 'استبدال البان كيك بـ وافل الكيتو بنفس المكونات.' },
            { type: 'lunch', label: 'الغداء', components: 'سلطة البيض والأفوكادو: 2 بيضة مسلوقة، نصف حبة أفوكادو، 2 ملعقة كبيرة مايونيز، تُقدم على أوراق خس.', prep: 'تُهرس المكونات وتُخلط وتُقدم.', calories: 750, benefits: 'مصدر ممتاز للدهون الجيدة (أوميغا-3 وأحادية غير مشبعة) والبروتين.', alternatives: 'استبدال البيض بـ الجبن الفيتا (Feta Cheese).' },
            { type: 'dinner', label: 'العشاء', components: '180 جرام سمك الماكريل (أو أي سمك دهني)، 2 كوب هليون (Asparagus) مقلي في 1 ملعقة كبيرة زيت زيتون.', prep: 'يُشوى السمك، ويُقلى الهليون مع الثوم.', calories: 600, benefits: 'دهون صحية جدًا وبروتين، والهليون مصدر جيد للفيتامينات والألياف.', alternatives: 'استبدال الماكريل بـ 150 جرامًا من الروبيان (Shrimp) المطهو بالزبدة.' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم السادس',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: 'بودنج بذور الشيا الكيتو: 3 ملاعق كبيرة بذور شيا، 1 كوب حليب جوز الهند (كامل الدسم)، 50 جرام جوز هند مبشور.', prep: 'تُخلط المكونات وتُترك في الثلاجة ليلة كاملة.', calories: 500, benefits: 'مصدر ممتاز للألياف والدهون المشبعة النباتية لدعم الجهاز الهضمي.', alternatives: 'استبدال حليب جوز الهند بحليب اللوز غير المحلى.' },
            { type: 'lunch', label: 'الغداء', components: '200 جرام شيش طاووق (مُتبل بالزيت والبهارات)، كوب خضروات مشوية (فلفل رومي، بصل أبيض بكمية قليلة).', prep: 'يُشوى على الشواية أو في الفرن.', calories: 750, benefits: 'وجبة غنية بالبروتين ومتبلة بشكل جيد لتعزيز النكهة.', alternatives: 'استبدال الشيش طاووق بـ 200 جرام من سيخ الكباب.' },
            { type: 'dinner', label: 'العشاء', components: 'طاجن السجق بالبيض: 150 جرام سجق (قليل الكربوهيدرات)، 2 بيضة، 50 جرام جبن موزاريلا.', prep: 'يُقلى السجق، ثم يُضاف البيض والجبن ويُترك ليُطهى معًا في طبق.', calories: 750, benefits: 'وجبة "All-in-one" عالية السعرات والبروتين والدهون.', alternatives: 'استبدال السجق بـ 150 جرامًا من السلامي (Salami).' },
        ],
        totalCalories: 2000
    },
    {
        day: 'اليوم السابع',
        meals: [
            { type: 'breakfast', label: 'الإفطار', components: 'أومليت بالزبدة والفطر: 3 بيضات، 1 ملعقة كبيرة زبدة، كوب فطر مُقطع، 2 شريحة جبن سويسري.', prep: 'يُطهى الفطر في الزبدة، ثم يُضاف البيض والجبن.', calories: 600, benefits: 'وجبة مغذية توفر فيتامين D من البيض والفطر.', alternatives: 'استبدال الجبن السويسري بـ جبن الماعز.' },
            { type: 'lunch', label: 'الغداء', components: 'برجر الكيتو (بدون خبز): 200 جرام لحم برجر (2 باتي)، 2 شريحة جبن، أوراق خس كبيرة (لاستخدامها كبديل للخبز)، مايونيز.', prep: 'يُشوى البرجر، وتُوضع المكونات بين ورقتي خس.', calories: 750, benefits: 'وجبة كلاسيكية مُعدلة للكيتو، غنية بالدهون والبروتين.', alternatives: 'استبدال لحم البرجر بـ شرائح لحم الديك الرومي.' },
            { type: 'dinner', label: 'العشاء', components: 'سمك بلطي مقلي: 180 جرام سمك بلطي (أو قشر البياض)، يُقلى في ملعقة كبيرة زيت جوز هند، يُقدم مع سلطة خضراء مع زيتون.', prep: 'يُتبل السمك ويُقلى، ويُقدم بجانب السلطة.', calories: 650, benefits: 'بروتين خفيف ودهون صحية، وجبة عشاء مناسبة.', alternatives: 'استبدال السمك المقلي بـ 150 جرامًا من صدور الدجاج المطهوة بالزبدة.' },
        ],
        totalCalories: 2000
    }
];

interface KetoPlanViewProps {
  onBack: () => void;
}

const KetoPlanView: React.FC<KetoPlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 animate-fade-in" style={{ fontFamily: "'Cairo', sans-serif" }}>
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header and Macro Summary */}
      <header className="relative overflow-hidden mb-12 p-8 md:p-12 bg-gradient-to-br from-emerald-900 to-gray-900 rounded-3xl shadow-2xl text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/50 rounded-full mix-blend-overlay filter blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-900/50 rounded-full mix-blend-overlay filter blur-3xl -ml-16 -mb-16"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">خطة الكيتو الأسبوعية</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            تم تصميم هذه الخطة بدقة للوصول إلى <span className="text-emerald-400 font-bold">2000 سعر حراري</span> مع الحفاظ على النسب المثالية للكيتو.
          </p>
          
          {/* Macro Breakdown Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                 <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
              </div>
              <p className="text-lg font-bold text-gray-300 mb-1">الدهون</p>
              <p className="text-2xl font-black text-white">75%</p>
              <p className="text-sm text-gray-400 mt-1">155 - 177 جرام</p>
            </div>
            
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
              </div>
              <p className="text-lg font-bold text-gray-300 mb-1">البروتين</p>
              <p className="text-2xl font-black text-white">20%</p>
              <p className="text-sm text-gray-400 mt-1">100 - 125 جرام</p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
               <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                 <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <p className="text-lg font-bold text-gray-300 mb-1">الكربوهيدرات</p>
              <p className="text-2xl font-black text-white">5%</p>
              <p className="text-sm text-gray-400 mt-1">أقل من 30 جرام</p>
            </div>
          </div>
        </div>
      </header>

      {/* Daily Meal Plan Section */}
      <div className="space-y-12">
        {mealsData.map((dayPlan, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 hover:border-emerald-100 dark:hover:border-emerald-800 transition-all duration-300 shadow-xl shadow-gray-100/50 dark:shadow-emerald-900/10 hover:shadow-2xl hover:shadow-emerald-100/30 dark:hover:shadow-emerald-900/20"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-black text-gray-800 dark:text-white flex items-center gap-4 mb-2 md:mb-0">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl text-emerald-600 dark:text-emerald-400">
                  <IconCalendar className="w-8 h-8" />
                </div>
                {dayPlan.day}
              </h2>
              <div className="flex items-center gap-2 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-200 text-sm font-bold px-4 py-2 rounded-full border border-gray-200 dark:border-gray-600">
                <IconFire className="w-4 h-4 text-orange-500" />
                الإجمالي: {dayPlan.totalCalories} سعرة حرارية
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {dayPlan.meals.map((meal, mIndex) => (
                <div key={mIndex} className="relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-gray-50/50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800 transition-colors">
                  
                  {/* Icon Column */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                     <div className={`p-4 rounded-2xl ${
                       meal.type === 'breakfast' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                       meal.type === 'lunch' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' :
                       'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                     }`}>
                        {getIconByKey(meal.type, "w-8 h-8")}
                     </div>
                     <span className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{meal.type === 'breakfast' ? 'صباحاً' : meal.type === 'lunch' ? 'ظهراً' : 'مساءً'}</span>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">{meal.label}</h3>
                      <span className="bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-200 text-xs font-bold px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-500 shadow-sm">
                        {meal.calories} سعر
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-3">
                          <div>
                            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1">المكونات</p>
                            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{meal.components}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">التحضير</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{meal.prep}</p>
                          </div>
                       </div>

                       <div className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-600">
                          <div>
                            <p className="text-xs font-bold text-blue-500 dark:text-blue-400 uppercase mb-1">الفوائد</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{meal.benefits}</p>
                          </div>
                          <div className="pt-2 border-t border-gray-50 dark:border-gray-700">
                            <p className="text-xs font-bold text-amber-500 dark:text-amber-400 uppercase mb-1">بديل مقترح</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{meal.alternatives}</p>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Notes Section */}
      <section className="mt-16 bg-emerald-900 rounded-3xl p-8 md:p-12 text-emerald-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full mix-blend-multiply opacity-50 -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-800 rounded-full mix-blend-multiply opacity-50 -ml-16 -mb-16"></div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-black text-white mb-8 flex items-center">
            <svg className="w-8 h-8 ml-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            ملاحظات إضافية هامة
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-400">1</div>
               <div>
                 <h4 className="font-bold text-white mb-1">الترطيب والإلكتروليتات</h4>
                 <p className="text-sm text-emerald-100 leading-relaxed">اشرب كمية كافية من الماء (2-3 لتر يوميًا). يفضل إضافة القليل من الملح للطعام وتناول الأطعمة الغنية بالبوتاسيوم.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-400">2</div>
               <div>
                 <h4 className="font-bold text-white mb-1">توازن الدهون والبروتين</h4>
                 <p className="text-sm text-emerald-100 leading-relaxed">تأكد من وجود مصدر دهني صحي في كل وجبة. لا تفرط في تناول البروتين لتجنب تحوله لجلوكوز.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-400">3</div>
               <div>
                 <h4 className="font-bold text-white mb-1">صافي الكربوهيدرات</h4>
                 <p className="text-sm text-emerald-100 leading-relaxed">احسب دائماً صافي الكربوهيدرات (الإجمالي - الألياف) وحاول البقاء أقل من 30 جرام يومياً.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-emerald-400">4</div>
               <div>
                 <h4 className="font-bold text-white mb-1">المرونة والتعديل</h4>
                 <p className="text-sm text-emerald-100 leading-relaxed">هذه الكميات تقديرية. استمع لجسدك وعدل الكميات حسب نشاطك اليومي وشعورك بالجوع.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KetoPlanView;