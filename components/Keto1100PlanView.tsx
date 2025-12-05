
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Keto1100PlanViewProps {
  onBack: () => void;
}

const Keto1100PlanView: React.FC<Keto1100PlanViewProps> = ({ onBack }) => {
  const [isGeneratingList, setIsGeneratingList] = useState(false);
  const [shoppingList, setShoppingList] = useState<any[] | null>(null);
  const [listError, setListError] = useState<string | null>(null);

  const [alternativeInput, setAlternativeInput] = useState("");
  const [isGeneratingAlternative, setIsGeneratingAlternative] = useState(false);
  const [alternativeResult, setAlternativeResult] = useState<string | null>(null);
  const [altError, setAltError] = useState<string | null>(null);

  // Meal Data Constant
  const MEAL_DATA = [
    { day: "اليوم الأول", meals: [
        { type: "الافطار", cal: "350", name: "قهوة بالزبدة (Bulletproof Coffee) وبيضتين", desc: "1 كوب قهوة سادة، 1 ملعقة كبيرة زبدة، 2 بيضة مقلية." },
        { type: "الغداء", cal: "350", name: "سلطة الأفوكادو والجبن الفيتا", desc: "1 كوب خس، 1/2 حبة أفوكادو، 30 جرام جبن فيتا، زيت زيتون." },
        { type: "العشاء", cal: "400", name: "دجاج مشوي بصلصة الثوم والكريمة", desc: "100 جرام صدر دجاج، 1/4 كوب كريمة طبخ، ثوم، سبانخ." }
    ]},
    { day: "اليوم الثاني", meals: [
        { type: "الافطار", cal: "350", name: "بيض مخفوق مع جبنة كريمية", desc: "3 بيضات، 2 ملعقة كبيرة جبنة كريمية، زبدة." },
        { type: "الغداء", cal: "350", name: "سلطة التونة بالمايونيز", desc: "1 علبة تونة، 2 ملعقة كبيرة مايونيز، كرفس، خس." },
        { type: "العشاء", cal: "400", name: "فيليه سمك بصوص الزبدة والليمون", desc: "120 جرام فيليه سمك، زبدة، ليمون، بروكلي." }
    ]},
    { day: "اليوم الثالث", meals: [
        { type: "الافطار", cal: "350", name: "زبدة الفول السوداني مع الكرفس", desc: "2 ملعقة كبيرة زبدة فول سوداني، 3 سيقان كرفس." },
        { type: "الغداء", cal: "350", name: "كرات اللحم المفروم مع صوص الأفوكادو", desc: "80 جرام لحم بقري، 1/4 أفوكادو، خيار." },
        { type: "العشاء", cal: "400", name: "شريحة ستيك مع قرنبيط مهروس", desc: "100 جرام ستيك، 1.5 كوب قرنبيط، زبدة." }
    ]},
    { day: "اليوم الرابع", meals: [
        { type: "الافطار", cal: "350", name: "أومليت بالكريمة وجبنة الموزاريلا", desc: "3 بيضات، كريمة طبخ، 30 جرام موزاريلا." },
        { type: "الغداء", cal: "350", name: "سلطة الجرجير وزيت الزيتون", desc: "جرجير، زيتون، زيت زيتون، جبنة فيتا." },
        { type: "العشاء", cal: "400", name: "لحم ضأن مع الخضار المشوية", desc: "100 جرام لحم ضأن، كوسة، باذنجان، زيت زيتون." }
    ]},
    { day: "اليوم الخامس", meals: [
        { type: "الافطار", cal: "350", name: "بان كيك كيتو بدقيق اللوز", desc: "دقيق لوز، بيضة، حليب لوز، زبدة." },
        { type: "الغداء", cal: "350", name: "شوربة الدجاج والكريمة", desc: "50 جرام دجاج، مرق، كريمة طبخ، سبانخ." },
        { type: "العشاء", cal: "400", name: "أفخاذ الدجاج المخبوزة مع سلطة", desc: "100 جرام أفخاذ دجاج، سلطة." }
    ]},
    { day: "اليوم السادس", meals: [
        { type: "الافطار", cal: "350", name: "جبنة قريش كاملة الدسم مع زيت الزيتون", desc: "1/2 كوب جبنة قريش، زيت زيتون، نعناع." },
        { type: "الغداء", cal: "350", name: "سمك التونة والمايونيز مع البيض المسلوق", desc: "تونة، مايونيز، بيضة مسلوقة، خضروات." },
        { type: "العشاء", cal: "400", name: "كبدة بقري مقلية بالزبدة مع بصل", desc: "100 جرام كبدة، زبدة، بصل، كوسة." }
    ]},
    { day: "اليوم السابع", meals: [
        { type: "الافطار", cal: "350", name: "قهوة بالزبدة (Bulletproof Coffee)", desc: "قهوة، زبدة، زيت MCT." },
        { type: "الغداء", cal: "350", name: "سلطة البيض والأفوكادو بالمايونيز", desc: "2 بيضة، 1/2 أفوكادو، مايونيز." },
        { type: "العشاء", cal: "400", name: "أجنحة دجاج مشوية مع السبانخ", desc: "120 جرام أجنحة، سبانخ." }
    ]}
  ];

  // Helper: AI Client
  const getAiClient = () => {
    const apiKey = process.env.API_KEY || '';
    return new GoogleGenAI({ apiKey });
  };

  // Feature 1: Shopping List
  const generateShoppingList = async () => {
    setIsGeneratingList(true);
    setListError(null);
    setShoppingList(null);

    try {
      const ai = getAiClient();
      const systemPrompt = `أنت خبير في التغذية وتساعد في تجهيز قائمة تسوق لنظام غذائي كيتوني لـ 7 أيام (1100 سعر حراري في اليوم). يجب أن تكون مخرجاتك بتنسيق JSON حصراً. قم بتحليل الوجبات التالية وتجميع المكونات المشتركة وتقدير الكميات اللازمة بشكل إجمالي (مثال: '500 جرام صدر دجاج', '1 حبة أفوكادو'). يجب أن تكون القائمة باللغة العربية.`;
      const userQuery = `إليك خطة الوجبات الأسبوعية: ${JSON.stringify(MEAL_DATA)}.\n بناءً على هذه الخطة، قم بإنشاء قائمة تسوق مُنظمة في الفئات التالية: [البروتينات (لحوم وبيض)، الألبان والجبن، الدهون والزيوت، الخضروات الورقية وغير النشوية، المكسرات والبذور، المنكهات الأساسية].`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userQuery,
        config: {
            systemInstruction: systemPrompt,
            responseMimeType: "application/json",
            responseSchema: {
                type: "ARRAY",
                items: {
                    type: "OBJECT",
                    properties: {
                        category: { type: "STRING" },
                        items: { type: "ARRAY", items: { type: "STRING" } }
                    },
                    required: ["category", "items"]
                }
            }
        }
      });

      if (response.text) {
        setShoppingList(JSON.parse(response.text));
      } else {
        setListError("لم يتمكن النظام من توليد القائمة، حاول مرة أخرى.");
      }
    } catch (error) {
      console.error(error);
      setListError("حدث خطأ أثناء الاتصال بالخادم.");
    } finally {
      setIsGeneratingList(false);
    }
  };

  // Feature 2: Meal Alternative
  const generateMealAlternative = async () => {
    if (!alternativeInput.trim()) return;
    setIsGeneratingAlternative(true);
    setAltError(null);
    setAlternativeResult(null);

    try {
        const ai = getAiClient();
        const systemPrompt = `أنت خبير في نظام الكيتو وتتلقى طلباً من مستخدم لاستبدال وجبة معينة. يجب أن توفر وجبة بديلة كيتونية مناسبة تماماً، وأن تكون السعرات الحرارية لها قريبة جداً من 350-400 سعر حراري (كما هو مُشار في الخطة)، مع التركيز على الدهون الصحية والبروتين وتجنب الكربوهيدرات. يجب أن تكون الإجابة باللغة العربية وفي شكل وصفة مُنظمة.`;
        const userQuery = `أحتاج إلى بديل للوجبة التالية: ${alternativeInput}. يجب أن تكون الوجبة الجديدة ضمن حمية الكيتو، وتحتوي على سعرات حرارية تقريبية تتراوح بين 350 و 400 سعر حراري، مع مراعاة القيود الإضافية التي ذكرتها. قدم لي اسم الوجبة، المكونات، وطريقة التحضير.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userQuery,
            config: { systemInstruction: systemPrompt }
        });

        if (response.text) {
            setAlternativeResult(response.text);
        } else {
            setAltError("لم يتمكن النظام من اقتراح بديل.");
        }
    } catch (error) {
        console.error(error);
        setAltError("حدث خطأ أثناء الاتصال بالخادم.");
    } finally {
        setIsGeneratingAlternative(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-8 font-sans animate-fade-in">
        <button 
            onClick={onBack}
            className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:text-purple-700 dark:hover:text-purple-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
        >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            العودة للقائمة
        </button>

        {/* Header */}
        <header className="text-center mb-12 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-8 border-purple-600">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
                خطة نظام الكيتو الغذائي الكامل
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 border-b pb-4 border-gray-200 dark:border-gray-700 inline-block mb-6">
                7 أيام بمعدل <span className="font-bold text-red-600 dark:text-red-400">1100 سعر حراري</span> يومياً
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-xl border border-red-200 dark:border-red-800/50 max-w-3xl mx-auto">
                <span className="font-bold text-red-700 dark:text-red-300">تنبيه هام:</span> نظام 1100 سعر حراري هو نظام منخفض السعرات الحرارية جداً. يجب استخدامه تحت إشراف طبي أو متخصص.
            </p>
        </header>

        {/* Feature: Meal Alternative */}
        <section className="mb-12 p-8 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl shadow-lg border border-indigo-200 dark:border-indigo-800">
            <h2 className="text-2xl font-extrabold text-indigo-800 dark:text-indigo-300 mb-4 border-b border-indigo-300 dark:border-indigo-700 pb-2">
                ✨ مُقترح الوجبات البديلة (مدعوم بالذكاء الاصطناعي)
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
                هل لديك حساسية أو لا تفضل مكوناً معيناً؟ اطلب من الذكاء الاصطناعي اقتراح بديل كيتوني يُطابق السعرات الحرارية (350-400 كالوري).
            </p>
            <div className="flex flex-col md:flex-row gap-3">
                <input 
                    type="text" 
                    value={alternativeInput}
                    onChange={(e) => setAlternativeInput(e.target.value)}
                    placeholder="مثال: وجبة غداء اليوم الثالث. لا أريد اللحم البقري." 
                    className="flex-grow p-4 border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" 
                />
                <button 
                    onClick={generateMealAlternative}
                    disabled={isGeneratingAlternative || !alternativeInput.trim()}
                    className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex-shrink-0"
                >
                    {isGeneratingAlternative ? 'جاري التحليل...' : '✨ اقتراح بديل'}
                </button>
            </div>
            {altError && <div className="mt-4 text-red-500 dark:text-red-400 font-bold">{altError}</div>}
            {alternativeResult && (
                <div className="mt-6 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-t-4 border-yellow-500 shadow-md">
                    <h4 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-3">✅ اقتراح بديل لك:</h4>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                        {alternativeResult}
                    </div>
                </div>
            )}
        </section>

        {/* Overview Macros */}
        <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white border-r-4 border-green-500 pr-3 mb-6">
                نظرة عامة على الماكروز
            </h2>
            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <table className="w-full text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
                    <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
                        <tr>
                            <th className="px-6 py-4">العنصر الغذائي</th>
                            <th className="px-6 py-4">النسبة التقريبية</th>
                            <th className="px-6 py-4">ملاحظة</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="bg-blue-50 dark:bg-blue-900/10">
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">الدهون الصحية</td>
                            <td className="px-6 py-4">65% - 75%</td>
                            <td className="px-6 py-4">مصدر الطاقة الرئيسي (مثل الزبدة، زيت الزيتون).</td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">البروتين</td>
                            <td className="px-6 py-4">20% - 30%</td>
                            <td className="px-6 py-4">يجب أن يكون معتدلاً للحفاظ على الكتلة العضلية.</td>
                        </tr>
                        <tr className="bg-blue-50 dark:bg-blue-900/10">
                            <td className="px-6 py-4 font-bold text-gray-900 dark:text-white">الكربوهيدرات</td>
                            <td className="px-6 py-4 text-red-500 dark:text-red-400 font-bold">5% - 10%</td>
                            <td className="px-6 py-4">يتم التركيز بشكل كامل على الخضروات الورقية.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* 7-Day Plan */}
        <section className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white border-r-4 border-green-500 pr-3 mb-8">
                خطة الوجبات لمدة 7 أيام
            </h2>
            
            {MEAL_DATA.map((day, idx) => (
                <details key={idx} className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg transition-all hover:shadow-xl open:ring-2 open:ring-blue-500/30">
                    <summary className="w-full text-right p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-open:rounded-b-none hover:bg-blue-100 dark:hover:bg-blue-900/40 flex justify-between items-center cursor-pointer list-none transition-colors">
                        <h3 className="text-xl font-extrabold text-blue-800 dark:text-blue-300">{day.day}</h3>
                        <span className="text-lg font-bold text-red-600 dark:text-red-400 whitespace-nowrap">المجموع: 1100 كالوري</span>
                        <svg className="w-6 h-6 text-blue-800 dark:text-blue-300 transform transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </summary>
                    <div className="p-4 md:p-6 overflow-x-auto animate-fade-in">
                        <table className="min-w-full text-right text-gray-700 dark:text-gray-300">
                            <thead className="border-b-2 border-green-400 text-green-700 dark:text-green-400">
                                <tr>
                                    <th className="py-3 px-2">الوجبة</th>
                                    <th className="py-3 px-2 w-32">سعرات</th>
                                    <th className="py-3 px-2">الوصف والمكونات</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {day.meals.map((meal, mIdx) => (
                                    <tr key={mIdx}>
                                        <td className="py-4 px-2 font-bold text-gray-900 dark:text-white">{meal.type}</td>
                                        <td className="py-4 px-2 font-semibold text-green-600 dark:text-green-400">{meal.cal}</td>
                                        <td className="py-4 px-2">
                                            <strong className="block text-blue-600 dark:text-blue-400 mb-1">{meal.name}</strong>
                                            <span className="text-sm opacity-90">{meal.desc}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </details>
            ))}
        </section>

        {/* Feature 1: Shopping List */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 font-medium">
                هل أنت مستعد لبدء التسوق؟ دع الذكاء الاصطناعي يُجهز لك قائمة مشتريات مُركَّزة ومُنظمة!
            </p>
            <button 
                onClick={generateShoppingList}
                disabled={isGeneratingList}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform active:scale-95"
            >
                {isGeneratingList ? 'جاري التجهيز...' : '✨ أريد قائمة التسوق المُفصلة!'}
            </button>

            {listError && <p className="mt-4 text-red-500 font-bold">{listError}</p>}

            {shoppingList && (
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl shadow-inner text-right border border-green-100 dark:border-green-800">
                    <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-4 border-b border-green-200 dark:border-green-800 pb-2">
                        قائمة التسوق الأسبوعية
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {shoppingList.map((cat: any, idx: number) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-green-50 dark:border-green-900">
                                <strong className="text-lg text-blue-800 dark:text-blue-300 block mb-2">{cat.category}</strong>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                    {cat.items.map((item: string, i: number) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </footer>
    </div>
  );
};

export default Keto1100PlanView;
