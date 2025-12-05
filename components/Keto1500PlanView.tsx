
import React from 'react';

interface Keto1500PlanViewProps {
  onBack: () => void;
}

const Keto1500PlanView: React.FC<Keto1500PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      title: "اليوم 1: السبت",
      meals: [
        { title: "الفطور: بيض محشو بالأفوكادو واللحم المقدد", cals: 495, fat: "42 جرام", protein: "24 جرام", carbs: "6 جرام", ingredients: ["3 بيضات كبيرة (150 جرام)", "½ حبة أفوكادو متوسطة (100 جرام)", "3 شرائح لحم مقدد (30 جرام)", "1 ملعقة كبيرة زبدة (15 جرام)"], preparation: ["تقلى شرائح اللحم المقدد", "تُقلب البيض بالزبدة", "يُهرس الأفوكادو ويضاف للبيض"], alternatives: "سجق دجاج بدل اللحم المقدد", benefits: "بروتين كامل لبناء العضلات" },
        { title: "الغداء: سلطة الدجاج الكيتونية", cals: 510, fat: "38 جرام", protein: "35 جرام", carbs: "7 جرام", ingredients: ["150 جرام صدر دجاج", "2 كوب خس", "1/2 كوب خيار", "2 م.ك مايونيز", "1 م.ك زيت زيتون"], preparation: ["شوي الدجاج", "خلط الخضار", "إضافة الدجاج والمايونيز"], alternatives: "تونة بدل الدجاج", benefits: "بروتين عالي وإشباع" },
        { title: "العشاء: سمك السلمون بالزبدة والسبانخ", cals: 495, fat: "35 جرام", protein: "40 جرام", carbs: "4 جرام", ingredients: ["180 جرام سلمون", "2 م.ك زبدة", "2 كوب سبانخ", "ثوم"], preparation: ["شوي السلمون بالزبدة", "طهي السبانخ بالثوم"], alternatives: "ماكريل بدل السلمون", benefits: "أوميجا-3 عالية" },
      ]
    },
    {
      title: "اليوم 2: الأحد",
      meals: [
        { title: "الفطور: شاكو كيتو بالتوت", cals: 485, fat: "41 جرام", protein: "22 جرام", carbs: "5 جرام", ingredients: ["2 بيضة", "30 جرام جبن كريمي", "1 م.ك زيت جوز هند", "توت"], preparation: ["خفق البيض والجبن", "قلي كفطائر صغيرة", "تزيين بالتوت"], alternatives: "زبدة بدل زيت جوز الهند", benefits: "مضادات أكسدة ودهون MCT" },
        { title: "الغداء: برجر الكيتو", cals: 520, fat: "40 جرام", protein: "32 جرام", carbs: "6 جرام", ingredients: ["150 جرام لحم مفروم", "2 شريحة جبنة شيدر", "خس", "طماطم", "مايونيز"], preparation: ["شوي اللحم", "تذويب الجبنة", "التجميع بالخس"], alternatives: "دجاج مفروم بدل اللحم", benefits: "حديد وفيتامين B12" },
        { title: "العشاء: كاري الدجاج بالكريمة", cals: 495, fat: "38 جرام", protein: "34 جرام", carbs: "8 جرام", ingredients: ["150 جرام دجاج", "1/4 كوب كريمة", "زيت جوز هند", "كاري", "بروكلي"], preparation: ["شوي الدجاج", "إضافة الخضار والكريمة", "الطهي حتى التكثف"], alternatives: "حليب جوز هند بدل الكريمة", benefits: "مضاد للالتهابات" },
      ]
    },
    {
      title: "اليوم 3: الإثنين",
      meals: [
        { title: "الفطور: جبنه مشوية بالأعشاب", cals: 490, fat: "40 جرام", protein: "28 جرام", carbs: "5 جرام", ingredients: ["100 جرام جبن حلوم", "زيت زيتون", "فلفل ملون", "2 بيضة مسلوقة"], preparation: ["شوي الجبن", "قلي الفلفل", "تقديم مع البيض"], alternatives: "جبن فيتا مشوي", benefits: "كالسيوم ودهون مشبعة" },
        { title: "الغداء: سلطة التونة المتوسطية", cals: 505, fat: "38 جرام", protein: "35 جرام", carbs: "6 جرام", ingredients: ["150 جرام تونة", "خس وجرجير", "زيتون", "جبنة فيتا", "زيت زيتون"], preparation: ["خلط جميع المكونات", "التتبيل بالزيت والخل"], alternatives: "سردين بدل التونة", benefits: "أوميجا-3 وفيتامين E" },
        { title: "العشاء: ستيك بالفطر والكريمة", cals: 505, fat: "38 جرام", protein: "36 جرام", carbs: "4 جرام", ingredients: ["150 جرام ستيك", "كوب فطر", "1/4 كوب كريمة", "زبدة"], preparation: ["شوي الستيك", "طهي الفطر والكريمة لعمل صوص"], alternatives: "ستيك دجاج", benefits: "حديد عالي الامتصاص" },
      ]
    },
    {
      title: "اليوم 4: الثلاثاء",
      meals: [
        { title: "الفطور: بانكيك الكيتو", cals: 480, fat: "40 جرام", protein: "20 جرام", carbs: "6 جرام", ingredients: ["2 بيضة", "2 م.ك جبن كريمي", "1 م.ك دقيق لوز", "إريثريتول"], preparation: ["خلط المكونات", "قلي في الزبدة"], alternatives: "دقيق جوز هند", benefits: "خالي من الجلوتين" },
        { title: "الغداء: كباب دجاج بالطحينة", cals: 515, fat: "39 جرام", protein: "34 جرام", carbs: "8 جرام", ingredients: ["150 جرام دجاج مكعبات", "طحينة", "ليمون", "خضار مشوية"], preparation: ["شوي الدجاج والخضار", "إعداد صوص الطحينة"], alternatives: "كباب لحم", benefits: "كالسيوم وفيتامين C" },
        { title: "العشاء: كرنب محشو باللحم", cals: 505, fat: "36 جرام", protein: "32 جرام", carbs: "9 جرام", ingredients: ["150 جرام لحم مفروم", "أوراق كرنب", "صوص طماطم كيتو"], preparation: ["سلق الكرنب", "حشو باللحم", "خبز بالفرن"], alternatives: "باذنجان محشو", benefits: "فيتامين K وألياف" },
      ]
    },
    {
      title: "اليوم 5: الأربعاء",
      meals: [
        { title: "الفطور: عجة الجبن والخضار", cals: 490, fat: "39 جرام", protein: "30 جرام", carbs: "4 جرام", ingredients: ["3 بيضات", "30 جرام شيدر", "فطر", "سبانخ", "زبدة"], preparation: ["قلي الخضار", "إضافة البيض والجبن"], alternatives: "موزاريلا بدل الشيدر", benefits: "بروتين كامل وفيتامينات B" },
        { title: "الغداء: سلطة سيزر الكيتو", cals: 510, fat: "38 جرام", protein: "36 جرام", carbs: "5 جرام", ingredients: ["خس روماني", "150 جرام دجاج", "بارميزان", "مايونيز", "لحم مقدد"], preparation: ["خلط الخس والدجاج", "إضافة الصوص والجبن"], alternatives: "جمبري بدل الدجاج", benefits: "كالسيوم وبروتين" },
        { title: "العشاء: سمك القد بصوص الليمون", cals: 500, fat: "32 جرام", protein: "42 جرام", carbs: "8 جرام", ingredients: ["180 جرام سمك قد", "زبدة", "ليمون", "قرنبيط مهروس"], preparation: ["شوي السمك بالزبدة", "تقديم مع القرنبيط"], alternatives: "سمك هامور", benefits: "يود وبروتين قليل الدسم" },
      ]
    },
    {
      title: "اليوم 6: الخميس",
      meals: [
        { title: "الفطور: سموذي كيتو شوكولاتة", cals: 485, fat: "42 جرام", protein: "15 جرام", carbs: "7 جرام", ingredients: ["حليب لوز", "زبدة فول سوداني", "كاكاو خام", "زيت MCT"], preparation: ["خلط بالخلاط"], alternatives: "زبدة لوز", benefits: "طاقة سريعة ومضادات أكسدة" },
        { title: "الغداء: شيش طاووق بالثومية", cals: 515, fat: "35 جرام", protein: "40 جرام", carbs: "6 جرام", ingredients: ["150 جرام دجاج", "زبادي يوناني", "ثوم", "زيت زيتون"], preparation: ["شوي الدجاج", "عمل الثومية بالزبادي"], alternatives: "لحم ضأن", benefits: "بروبيوتيك وبروتين" },
        { title: "العشاء: كوردون بلو الكيتو", cals: 500, fat: "34 جرام", protein: "42 جرام", carbs: "5 جرام", ingredients: ["150 جرام دجاج", "لانشون ديك رومي", "شيدر", "دقيق لوز"], preparation: ["حشو الدجاج بالجبن واللانشون", "تغليف بدقيق اللوز وقلي"], alternatives: "سلامي بدل اللانشون", benefits: "وجبة فاخرة ومشبعة" },
      ]
    },
    {
      title: "اليوم 7: الجمعة",
      meals: [
        { title: "الفطور: جبنة قريش بالأعشاب", cals: 490, fat: "40 جرام", protein: "25 جرام", carbs: "6 جرام", ingredients: ["150 جرام جبن قريش", "زيت زيتون", "زيتون", "خيار"], preparation: ["خلط الجبن والزيت والخضار"], alternatives: "فيتا", benefits: "بروتين كازين" },
        { title: "الغداء: لحم مفروم بالباذنجان", cals: 520, fat: "38 جرام", protein: "32 جرام", carbs: "9 جرام", ingredients: ["150 جرام لحم مفروم", "باذنجان", "طماطم كيتو", "موزاريلا"], preparation: ["طهي اللحم والباذنجان", "إضافة الجبن"], alternatives: "كوسة بدل الباذنجان", benefits: "بوتاسيوم وألياف" },
        { title: "العشاء: رولات اللحم والجبن", cals: 490, fat: "38 جرام", protein: "28 جرام", carbs: "6 جرام", ingredients: ["لانشون لحم بقري", "جبن كريمي", "خيار", "جزر"], preparation: ["دهن اللانشون بالجبن", "لف حول الخضار"], alternatives: "لانشون ديك رومي", benefits: "وجبة خفيفة وسريعة" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <header className="bg-gray-900 text-center p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">نظام الكيتو دايت الأسبوعي</h1>
            <p className="text-xl text-emerald-400 border-b border-emerald-400/50 pb-2 inline-block">خطة كاملة (1500 سعرة حرارية يومياً)</p>
        </header>

        <section className="p-8 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-r-4 border-emerald-500 pr-3">الإرشادات العامة</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <li><strong className="text-emerald-500">• نسبة الماكروز:</strong> 75% دهون، 20% بروتين، 5% كربوهيدرات.</li>
                <li><strong className="text-emerald-500">• الماء:</strong> شرب لا يقل عن 2-3 لتر يومياً.</li>
                <li><strong className="text-emerald-500">• المكملات:</strong> الاهتمام بالملح، المغنيسيوم، والبوتاسيوم.</li>
            </ul>
        </section>

        <div className="p-6 md:p-8 space-y-6 bg-white dark:bg-gray-800">
            {days.map((day, idx) => (
                <div key={idx} className="space-y-4">
                    <h3 className="text-xl font-black text-emerald-700 dark:text-emerald-400 mt-4 mb-2 border-b border-gray-200 dark:border-gray-700 pb-2">{day.title}</h3>
                    {day.meals.map((meal, mIdx) => (
                        <details key={mIdx} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all hover:shadow-md open:ring-2 open:ring-emerald-500/20">
                            <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors list-none">
                                <span className="text-lg font-bold text-gray-800 dark:text-white group-open:text-emerald-600 dark:group-open:text-emerald-400">{meal.title}</span>
                                <div className="flex items-center gap-2">
                                    <span className="bg-emerald-600 dark:bg-emerald-700 text-white text-xs font-bold px-3 py-1 rounded-full">{meal.cals} سعرة</span>
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </summary>
                            <div className="p-5 text-gray-700 dark:text-gray-300 space-y-4 animate-fade-in">
                                <div className="flex justify-around text-center border-b border-gray-100 dark:border-gray-700 pb-3 bg-gray-50/50 dark:bg-gray-700/20 p-2 rounded-lg text-sm">
                                    <div><span className="block text-xs text-gray-500">دهون</span><span className="font-bold text-gray-900 dark:text-white">{meal.fat}</span></div>
                                    <div><span className="block text-xs text-gray-500">بروتين</span><span className="font-bold text-gray-900 dark:text-white">{meal.protein}</span></div>
                                    <div><span className="block text-xs text-gray-500">كارب</span><span className="font-bold text-gray-900 dark:text-white">{meal.carbs}</span></div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">المكونات:</p>
                                        <ul className="list-disc list-inside">{meal.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}</ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">التحضير:</p>
                                        <ol className="list-decimal list-inside">{meal.preparation.map((prep, i) => <li key={i}>{prep}</li>)}</ol>
                                    </div>
                                </div>
                                <div className="text-xs bg-blue-50 dark:bg-blue-900/10 p-3 rounded-lg">
                                    <p><span className="font-bold text-blue-700 dark:text-blue-300">البديل:</span> {meal.alternatives}</p>
                                    <p className="mt-1"><span className="font-bold text-blue-700 dark:text-blue-300">الفائدة:</span> {meal.benefits}</p>
                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Keto1500PlanView;
