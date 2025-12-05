import React from 'react';
import { IconBreakfast, IconLunch, IconDinner, IconCalendar } from './Icons';

interface Balanced1500PlanViewProps {
  onBack: () => void;
}

const Balanced1500PlanView: React.FC<Balanced1500PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      day: "اليوم الأول: التوازن الكلاسيكي",
      meals: [
        { type: "breakfast", k: 350, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "2 توست أسمر، بيضة مسلوقة، 1 كوب خضار.", prep: "سلق البيض.", benefit: "بروتين وألياف." },
        { type: "lunch", k: 550, icon: <IconLunch />, color: "green", title: "الغداء", content: "120غ صدر دجاج مشوي، 6 ملاعق أرز بني، سلطة.", prep: "شوي الدجاج وسلق الأرز.", benefit: "طاقة مستدامة." },
        { type: "dinner", k: 300, icon: <IconDinner />, color: "red", title: "العشاء", content: "علبة زبادي قليل الدسم، ثمرة فاكهة.", prep: "جاهز.", benefit: "كالسيوم وبروبيوتيك." },
        { type: "snack", k: 300, icon: "🍎", color: "blue", title: "سناك وبدائل", content: "موزة صغيرة و 20غ مكسرات نيئة.", prep: "بديل: زبادي يوناني أو سمك.", benefit: "دهون صحية." },
      ]
    },
    {
      day: "اليوم الثاني: الألياف والبقوليات",
      meals: [
        { type: "breakfast", k: 380, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "نصف كوب شوفان مطبوخ، نصف كوب توت، بذور شيا.", prep: "طبخ الشوفان.", benefit: "ألياف قابلة للذوبان." },
        { type: "lunch", k: 520, icon: <IconLunch />, color: "green", title: "الغداء", content: "كوب عدس مطبوخ، نصف رغيف أسمر، سلطة جرجير.", prep: "سلق العدس.", benefit: "حديد وبروتين نباتي." },
        { type: "dinner", k: 270, icon: <IconDinner />, color: "red", title: "العشاء", content: "كوب شوربة خضار، 60غ جبنة قريش.", prep: "سلق الخضار.", benefit: "خفيف ومرطب." },
        { type: "snack", k: 330, icon: "dates", color: "blue", title: "سناك وبدائل", content: "كمثرى و 3 تمرات.", prep: "بديل: كينوا أو جبنة فيتا.", benefit: "طاقة سريعة." },
      ]
    },
    {
      day: "اليوم الثالث: المأكولات البحرية",
      meals: [
        { type: "breakfast", k: 400, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "أومليت سبانخ (بيضتان)، 2 شريحة خبز قمح.", prep: "قلي البيض.", benefit: "فيتامين K." },
        { type: "lunch", k: 500, icon: <IconLunch />, color: "green", title: "الغداء", content: "100غ سمك مشوي، بطاطا حلوة، خضار سوتيه.", prep: "شوي السمك والبطاطا.", benefit: "أوميغا 3." },
        { type: "dinner", k: 350, icon: <IconDinner />, color: "red", title: "العشاء", content: "سلطة تونة (100غ)، خس وطماطم، زيت زيتون.", prep: "خلط المكونات.", benefit: "بروتين سريع." },
        { type: "snack", k: 250, icon: "🥝", color: "blue", title: "سناك وبدائل", content: "زبادي وكيوي.", prep: "بديل: دجاج أو فاصوليا.", benefit: "فيتامين C." },
      ]
    },
    {
      day: "اليوم الرابع: الفيتامينات والمعادن",
      meals: [
        { type: "breakfast", k: 330, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "3 ملاعق لبنة، نصف رغيف قمح، خيار.", prep: "فرد اللبنة.", benefit: "كالسيوم وألياف." },
        { type: "lunch", k: 580, icon: <IconLunch />, color: "green", title: "الغداء", content: "150غ لحم مشوي، كوب خضار مطبوخة، 3 ملاعق أرز.", prep: "شوي اللحم.", benefit: "فيتامين B12." },
        { type: "dinner", k: 300, icon: <IconDinner />, color: "red", title: "العشاء", content: "حساء شوفان بالحليب.", prep: "تسخين الحليب والشوفان.", benefit: "نوم هادئ." },
        { type: "snack", k: 290, icon: "🍊", color: "blue", title: "سناك وبدائل", content: "برتقالة و 25غ لوز.", prep: "بديل: سمك أو حمص.", benefit: "فيتامين C ومغنيسيوم." },
      ]
    },
    {
      day: "اليوم الخامس: الكينوا المتكامل",
      meals: [
        { type: "breakfast", k: 420, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "2 توست، زبدة فول سوداني، نصف موزة.", prep: "دهن التوست.", benefit: "طاقة مركزة." },
        { type: "lunch", k: 550, icon: <IconLunch />, color: "green", title: "الغداء", content: "سلطة كينوا (كوب مطبوخ)، حمص، خضار.", prep: "خلط المكونات.", benefit: "بروتين كامل." },
        { type: "dinner", k: 250, icon: <IconDinner />, color: "red", title: "العشاء", content: "زبادي يوناني، عسل.", prep: "جاهز.", benefit: "دعم العضلات." },
        { type: "snack", k: 280, icon: "🍓", color: "blue", title: "سناك وبدائل", content: "فراولة وجوز.", prep: "بديل: أرز بني أو دجاج.", benefit: "مضادات أكسدة." },
      ]
    },
    {
      day: "اليوم السادس: الحجم الكبير",
      meals: [
        { type: "breakfast", k: 200, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "عصير أخضر (سبانخ، تفاح، ليمون).", prep: "خلط بالخلاط.", benefit: "ديتوكس وفيتامينات." },
        { type: "lunch", k: 550, icon: <IconLunch />, color: "green", title: "الغداء", content: "120غ سلمون، بروكلي، فطر.", prep: "شوي السلمون.", benefit: "دهون صحية." },
        { type: "dinner", k: 400, icon: <IconDinner />, color: "red", title: "العشاء", content: "سلطة خضراء، 100غ جبنة حلوم مشوية.", prep: "شوي الجبن.", benefit: "بروتين مرضي." },
        { type: "snack", k: 350, icon: "🍫", color: "blue", title: "سناك وبدائل", content: "تفاحة وشوكولاتة داكنة.", prep: "بديل: تونة أو بيض.", benefit: "مزاج جيد." },
      ]
    },
    {
      day: "اليوم السابع: خفيف وتقليدي",
      meals: [
        { type: "breakfast", k: 300, icon: <IconBreakfast />, color: "yellow", title: "الإفطار", content: "2 توست، عسل، قهوة/شاي.", prep: "سريع.", benefit: "نشاط صباحي." },
        { type: "lunch", k: 550, icon: <IconLunch />, color: "green", title: "الغداء", content: "120غ شاورما دجاج منزلي، نصف رغيف، خضار.", prep: "شوي الدجاج.", benefit: "بديل صحي." },
        { type: "dinner", k: 300, icon: <IconDinner />, color: "red", title: "العشاء", content: "طبق فول مدمس، نصف رغيف، سلطة.", prep: "تتبيل الفول.", benefit: "ألياف وبوتاسيوم." },
        { type: "snack", k: 350, icon: "🍇", color: "blue", title: "سناك وبدائل", content: "حليب وعنب.", prep: "بديل: عدس أو لحم.", benefit: "كالسيوم." },
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
        case 'yellow': return 'bg-amber-50 dark:bg-amber-900/10 border-amber-500 text-amber-900 dark:text-amber-100';
        case 'green': return 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-500 text-emerald-900 dark:text-emerald-100';
        case 'red': return 'bg-rose-50 dark:bg-rose-900/10 border-rose-500 text-rose-900 dark:text-rose-100';
        case 'blue': return 'bg-blue-50 dark:bg-blue-900/10 border-blue-500 text-blue-900 dark:text-blue-100';
        default: return 'bg-gray-50 border-gray-500';
    }
  };

  const getTitleColor = (color: string) => {
    switch(color) {
        case 'yellow': return 'text-amber-700 dark:text-amber-400';
        case 'green': return 'text-emerald-700 dark:text-emerald-400';
        case 'red': return 'text-rose-700 dark:text-rose-400';
        case 'blue': return 'text-blue-700 dark:text-blue-400';
        default: return 'text-gray-700';
    }
  };

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
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
            خطة التغذية المتوازنة
        </h1>
        <div className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-6 py-2 rounded-full font-bold border border-blue-200 dark:border-blue-800 mb-6">
            إجمالي 1500 سعر حراري يومياً
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            خطة لسبعة أيام تهدف إلى فقدان الوزن الصحي والحفاظ على توازن العناصر الغذائية (بروتين، كربوهيدرات معقدة، دهون صحية).
        </p>
      </header>

      {/* Days Grid */}
      <div className="space-y-12">
        {days.map((day, idx) => (
             <section key={idx} className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-black text-white bg-gradient-to-l from-blue-600 to-blue-500 p-4 rounded-xl shadow-lg shadow-blue-500/20 mb-8 flex items-center gap-3">
                    <IconCalendar className="w-6 h-6" />
                    {day.day}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className={`p-5 rounded-2xl border-r-4 shadow-sm transition-transform hover:-translate-y-1 ${getColorClass(meal.color)}`}>
                            <h3 className={`text-lg font-bold flex items-center gap-2 mb-2 ${getTitleColor(meal.color)}`}>
                                <span className="text-2xl">{typeof meal.icon === 'string' ? meal.icon : <span className="w-6 h-6 block">{meal.icon}</span>}</span>
                                {meal.title}
                                <span className="text-xs bg-white/50 dark:bg-black/20 px-2 py-0.5 rounded-full mr-auto">{meal.k} كالوري</span>
                            </h3>
                            <div className="space-y-2 text-sm">
                                <p className="font-medium opacity-90"><strong>المكونات:</strong> {meal.content}</p>
                                <p className="opacity-75"><strong>التحضير:</strong> {meal.prep}</p>
                                <p className={`text-xs font-bold mt-2 ${getTitleColor(meal.color)}`}>الفائدة: {meal.benefit}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </section>
        ))}
      </div>

       <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl border-r-8 border-red-500 shadow-sm mt-12">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.3 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                إخلاء مسؤولية هام
            </h3>
            <ul className="list-disc pr-5 space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li><strong>الاستشارة الطبية:</strong> هذه الخطة هي مثال إرشادي عام، وليست بديلاً عن الاستشارة الطبية.</li>
                <li><strong>السعرات الحرارية:</strong> تم حساب السعرات بناءً على المتوسطات.</li>
                <li><strong>شرب الماء:</strong> تأكد من شرب 8 أكواب من الماء على الأقل يومياً.</li>
            </ul>
        </div>
    </div>
  );
};

export default Balanced1500PlanView;