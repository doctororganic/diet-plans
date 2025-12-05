import React from 'react';
import { IconBreakfast, IconLunch, IconDinner, IconCalendar } from './Icons';

interface Balanced1300PlanViewProps {
  onBack: () => void;
}

const Balanced1300PlanView: React.FC<Balanced1300PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      day: "اليوم الأول: الأحد",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "عجة الخضار والتوست الأسمر", desc: "2 بيضة مخفوقة مع ملعقة حليب، ربع كوب سبانخ، 1/4 حبة فلفل. تُطهى برشة زيت زيتون. تُقدم مع شريحتي توست أسمر.", benefit: "بروتين عالي وألياف.", alt: "1 كوب زبادي يوناني قليل الدسم + نصف كوب توت." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "سلطة التونة والعدس", desc: "علبة تونة صغيرة في الماء (100جم)، نصف كوب عدس مطبوخ، طبق سلطة كبير. تتبيلة: خل وزيت زيتون.", benefit: "بروتين عالي، كربوهيدرات معقدة.", alt: "100 جرام صدر دجاج مشوي مع طبق سلطة كبير." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "أرز بني بالخضار والدجاج", desc: "100جم صدر دجاج مشوي. نصف كوب أرز بني. كوب خضار سوتيه (بروكلي وجزر).", benefit: "توازن مثالي بين البروتين والكربوهيدرات.", alt: "كوب ونصف شوربة خضار مع قطعة خبز." }
      ]
    },
    {
      day: "اليوم الثاني: الإثنين",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "شوفان بالحليب والموز", desc: "نصف كوب شوفان، كوب حليب قليل الدسم. يُضاف نصف حبة موز و 5 حبات لوز.", benefit: "طاقة، بوتاسيوم ودهون صحية.", alt: "كوب لبن رايب مع ملعقة عسل." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "ساندويتش الديك الرومي", desc: "شريحتا خبز أسمر، 50جم ديك رومي، جبن قليل الدسم، خضروات.", benefit: "بروتين وقليلة الدهون.", alt: "نصف كوب مكرونة سمراء بصلصة طماطم." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "صينية خضار مشوية وسمك", desc: "100جم فيليه مشوي، طبق خضار مشوي (كوسة، باذنجان، بصل).", benefit: "أوميجا 3 وألياف.", alt: "طبق كبير من شوربة العدس." }
      ]
    },
    {
      day: "اليوم الثالث: الثلاثاء",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "زبادي يوناني بالعسل", desc: "كوب زبادي يوناني، ملعقة صغيرة عسل، بذور الشيا.", benefit: "بروتين عالي ودهون صحية.", alt: "شريحتا توست مع زبدة فول سوداني." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "طبق حمص بالليمون", desc: "كوب حمص مطبوخ (250جم)، كمون وليمون، ربع رغيف خبز أسمر.", benefit: "بروتين نباتي وحديد.", alt: "100جم لحم مفروم مع خضروات." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "دجاج سوتيه بالخضار", desc: "100جم دجاج، كوب خضروات (مشروم، فلفل)، ربع كوب أرز أبيض.", benefit: "بروتين خفيف سهل الهضم.", alt: "طبق تبولة كبير مع كوب لبن." }
      ]
    },
    {
      day: "اليوم الرابع: الأربعاء",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "سندويتش بيض مسلوق", desc: "بيضتان مسلوقتان، شريحتا توست أسمر، طماطم وخس.", benefit: "بروتين نقي وألياف.", alt: "جبن قريش مع طماطم وخبز." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "فاصوليا خضراء باللحم", desc: "كوب فاصوليا، 70جم لحم بقري قليل الدسم، صلصة طماطم خفيفة.", benefit: "حديد وألياف.", alt: "كوب شوربة حريرة وربع رغيف." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "بطاطا حلوة مشوية", desc: "حبة بطاطا حلوة متوسطة (250جم) مع قطعة جبن قريش.", benefit: "فيتامين أ وكربوهيدرات معقدة.", alt: "سلطة سيزر خفيفة بدون خبز." }
      ]
    },
    {
      day: "اليوم الخامس: الخميس",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "بانكيك الشوفان", desc: "نصف كوب شوفان مطحون، بيضة، حليب. تُطهى وتقدم مع توت.", benefit: "وجبة مشبعة وغنية بالألياف.", alt: "كورن فليكس كامل الحبوب وحليب." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "سلطة الكينوا بالخضار", desc: "نصف كوب كينوا، كوب خضروات، تتبيلة ليمون.", benefit: "بروتين كامل نباتي.", alt: "طبق فتوش كبير." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "سموثي بروتين", desc: "كوب حليب، نصف موزة، ملعقة بروتين (اختياري)، سبانخ.", benefit: "سريعة الامتصاص وكالسيوم.", alt: "حليب بالقهوة وبسكويت نخالة." }
      ]
    },
    {
      day: "اليوم السادس: الجمعة",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "جبن وخضروات", desc: "100جم جبن قريش، شريحتا توست أسمر، طبق خضروات.", benefit: "بروتين بطيء الامتصاص.", alt: "بيضة مسلوقة وفول مدمس." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "محشي كوسة خفيف", desc: "5 حبات كوسة محشية أرز ولحم قليل الدسم، صلصة خفيفة.", benefit: "ألياف وكمية معتدلة.", alt: "سلطة خضراء وجبن وخبز." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "دجاج بالليمون والثوم", desc: "120جم دجاج مشوي، كوب سبانخ.", benefit: "بروتين نقي.", alt: "100جم سلمون مشوي." }
      ]
    },
    {
      day: "اليوم السابع: السبت",
      meals: [
        { type: "breakfast", title: "الإفطار (350 سعرة)", name: "حساء الشوفان بالخضار", desc: "مرق خفيف، ربع كوب شوفان، خضروات.", benefit: "بداية دافئة ومغذية.", alt: "بطاطا مسلوقة وجبن." },
        { type: "lunch", title: "الغداء (450 سعرة)", name: "طاجن خضروات", desc: "خضروات مشكلة بالفرن (ني في ني) مع 70جم لحم مفروم.", benefit: "فيتامينات ومعادن.", alt: "100جم توفو مشوي." },
        { type: "dinner", title: "العشاء (500 سعرة)", name: "شعيرية بالحليب", desc: "نصف كوب شعيرية بالحليب قليل الدسم، نصف تفاحة.", benefit: "وجبة خفيفة للنوم.", alt: "زبادي ومشمش مجفف." }
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
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl mb-10 border-b-4 border-emerald-500">
        <h1 className="text-3xl md:text-4xl font-black text-center text-gray-800 dark:text-white mb-2">
           نظام غذائي متوازن <span className="text-emerald-600">(1300 سعر حراري)</span>
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6 font-bold">خطة مفصلة لمدة 7 أيام (3 وجبات يوميًا)</p>

        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 text-red-800 dark:text-red-200 rounded-xl flex items-start gap-3">
             <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.3 16c-.77 1.333.192 3 1.732 3z"></path></svg>
             <div>
                <strong className="block text-lg mb-1">تنبيه هام حول السعرات الحرارية:</strong>
                <p className="text-sm opacity-90">نظام 1300 سعرة حرارية هو <strong>مستوى منخفض</strong>. يجب استشارة طبيب أو أخصائي تغذية قبل البدء لضمان تلبية احتياجاتك الفردية.</p>
             </div>
        </div>
      </div>

      {/* Days */}
      <div className="space-y-8">
        {days.map((day, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="bg-emerald-600 p-4 flex justify-between items-center text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <IconCalendar className="w-6 h-6 text-emerald-200" />
                        {day.day}
                    </h2>
                    <span className="bg-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500">~1300 سعرة</span>
                </div>
                
                <div className="p-6 space-y-6">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className="border-b border-gray-100 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                             <h3 className="text-lg font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2 mb-2">
                                {meal.type === 'breakfast' ? <IconBreakfast className="w-6 h-6" /> : meal.type === 'lunch' ? <IconLunch className="w-6 h-6" /> : <IconDinner className="w-6 h-6" />}
                                {meal.title}
                             </h3>
                             <p className="text-gray-800 dark:text-gray-200 font-bold mb-1">{meal.name}</p>
                             <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{meal.desc}</p>
                             <div className="bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg text-xs">
                                <span className="text-blue-700 dark:text-blue-300 font-bold block mb-1">الفوائد: {meal.benefit}</span>
                                <span className="text-gray-500 dark:text-gray-400">🔄 البديل: {meal.alt}</span>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>

       <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border border-amber-200 dark:border-amber-800 mt-8">
        <h3 className="text-lg font-bold text-amber-800 dark:text-amber-400 mb-3">ملاحظات هامة</h3>
        <ul className="list-disc list-inside space-y-2 text-sm text-amber-900 dark:text-amber-100/80">
            <li><strong>المشروبات:</strong> يُسمح بالقهوة والشاي والمشروبات العشبية بدون سكر.</li>
            <li><strong>الدهون:</strong> الدهون المضافة (زيت زيتون، زبدة فول) لا تتجاوز ملعقة كبيرة يومياً.</li>
            <li><strong>التوابل:</strong> استخدم الأعشاب والليمون والخل بحرية للنكهة.</li>
        </ul>
      </div>

    </div>
  );
};

export default Balanced1300PlanView;