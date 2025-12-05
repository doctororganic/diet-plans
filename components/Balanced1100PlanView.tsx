import React from 'react';
import { IconCalendar, IconFire, IconBreakfast, IconLunch, IconDinner } from './Icons';

interface Balanced1100PlanViewProps {
  onBack: () => void;
}

const Balanced1100PlanView: React.FC<Balanced1100PlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-7xl mx-auto p-4 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      {/* Header and Critical Warning */}
      <header className="text-center mb-10 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border-b-4 border-emerald-500 relative overflow-hidden">
        <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-black text-emerald-800 dark:text-emerald-400 mb-4">🗓️ خطة نظام 1100 سعر حراري المتوازن</h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">خطة أسبوعية مفصلة بثلاث وجبات يومياً</p>

            {/* Warning Box */}
            <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border-r-4 border-red-500 rounded-xl text-right font-semibold shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                    <span className="text-xl font-bold">تنبيه هام:</span>
                </div>
                <p className="text-sm md:text-base leading-relaxed opacity-90">
                    هذا النظام الغذائي منخفض السعرات (1100 سعرة حرارية) <strong>مقيد للغاية</strong> ويجب اتباعه فقط بعد <strong>استشارة طبيب أو أخصائي تغذية</strong>. هذا المستوى مخصص عادةً <strong>للسيدات</strong> ذوات النشاط البدني القليل جداً، ولا يُنصح باتباعه لفترات طويلة أو دون إشراف لضمان الحصول على جميع العناصر الغذائية الضرورية وتجنب أي مخاطر صحية.
                </p>
            </div>
        </div>
      </header>

      {/* General Tips Section */}
      <section className="mb-10 p-8 bg-emerald-50 dark:bg-emerald-900/20 border-r-4 border-emerald-400 rounded-3xl shadow-md">
        <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-6 flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            نصائح أساسية لنجاح الحمية
        </h2>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
            <li className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <span className="text-emerald-500 font-extrabold text-xl ml-3">💧</span>
                <div>
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">الترطيب:</strong>
                    اشرب ما لا يقل عن 2-3 لتر من الماء يومياً.
                </div>
            </li>
            <li className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <span className="text-emerald-500 font-extrabold text-xl ml-3">🥑</span>
                <div>
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">الدهون الصحية:</strong>
                    احرص على استخدام ملعقة صغيرة واحدة (حوالي 5ml) من زيت الزيتون يومياً.
                </div>
            </li>
            <li className="flex items-start bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
                <span className="text-emerald-500 font-extrabold text-xl ml-3">🌿</span>
                <div>
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">التوابل والأعشاب:</strong>
                    استخدم التوابل والأعشاب الطازجة بحرية لإضافة النكهة دون سعرات حرارية.
                </div>
            </li>
        </ul>
      </section>

      {/* Weekly Plan Summary Table */}
      <section className="mb-12 bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-6 text-center">جدول الخطة الأسبوعية السريع</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-emerald-100 dark:bg-emerald-900/40">
                    <tr>
                        <th className="px-6 py-4 text-right text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider rounded-tr-xl">اليوم</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider">الإفطار (300 سعرة)</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider">الغداء (450 سعرة)</th>
                        <th className="px-6 py-4 text-right text-xs font-bold text-emerald-800 dark:text-emerald-200 uppercase tracking-wider rounded-tl-xl">العشاء (350 سعرة)</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                    {[
                        { day: 'الأحد', b: 'الشوفان والتوت', l: 'سلطة الدجاج المشوي المتوسطية', d: 'زبادي يوناني مع الجوز' },
                        { day: 'الإثنين', b: 'بيض بالخضار والخبز الكامل', l: 'سمك مشوي مع الخضار', d: 'شوربة العدس الصحية' },
                        { day: 'الثلاثاء', b: 'زبادي يوناني بالعسل والموز', l: 'سندويتش التونة بالخبز الأسمر', d: 'دجاج مقطع (مكعبات) بالخضار' },
                        { day: 'الأربعاء', b: 'توست بالجبنة القريش والطماطم', l: 'سلطة الكينوا مع الخضروات', d: 'عجة الخضروات الكبيرة' },
                        { day: 'الخميس', b: 'سموثي السبانخ والبروتين', l: 'صدر ديك رومي مع البطاطا الحلوة', d: 'طبق حمص صغير مع الخضروات' },
                        { day: 'الجمعة', b: 'بيض مقلي بالزيتون والجبن', l: 'الأرز الأسمر مع الخضار والبروتين', d: 'سلطة الجمبري (القريدس)' },
                        { day: 'السبت', b: 'الشوفان بالتفاح والقرفة', l: 'طبق التوفو المشوي مع السبانخ', d: 'صدر دجاج مشوي مع السلطة' },
                    ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-700/50'}>
                            <td className="px-6 py-4 whitespace-nowrap font-bold text-emerald-600 dark:text-emerald-400">{row.day}</td>
                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.b}</td>
                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.l}</td>
                            <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{row.d}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Detailed Daily Breakdown */}
      <section>
        <h2 className="text-3xl font-black text-emerald-800 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
            <span className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-emerald-600">
                <IconCalendar className="w-8 h-8" />
            </span>
            تفصيل الوجبات اليومية والمكونات
        </h2>

        {/* Days Logic */}
        {[
            {
                dayName: 'الأحد',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'شوفان وتوت', ing: '40g شوفان، 150ml حليب/ماء، 50g توت أزرق، قرفة.', prep: 'يغلى الشوفان مع السائل ويضاف التوت والقرفة.', benefits: 'ألياف ممتازة، يساعد في الشبع.', alt: '2 بيضة مسلوقة + شريحة توست أسمر.' },
                    { title: 'الغداء (450 سعرة)', name: 'سلطة الدجاج المتوسطية', ing: '120g صدر دجاج مشوي، سلطة كبيرة (خس، خيار، طماطم)، 1 ملعقة صغيرة زيت زيتون.', prep: 'يشوى الدجاج ويقطع. تتبل السلطة بالزيت والخل.', benefits: 'بروتين عالٍ، دهون صحية، فيتامينات.', alt: '150g سمك فيليه مشوي.' },
                    { title: 'العشاء (350 سعرة)', name: 'زبادي يوناني وجوز', ing: '150g زبادي يوناني قليل الدسم، 15g جوز مكسر (5 حبات)، مُحلي طبيعي (اختياري).', prep: 'يوضع الجوز على الزبادي.', benefits: 'بروبيوتيك، بروتين عالٍ (كازين)، أوميغا 3.', alt: '100g جبنة قريش + خضروات.' },
                ]
            },
            {
                dayName: 'الإثنين',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'بيض بالخضار والخبز', ing: '2 بيضة مخفوقة (فلفل، سبانخ)، شريحة توست أسمر.', prep: 'تخلط البيض مع الخضار المقطعة ويقلى بقليل من الزيت.', benefits: 'بروتين كامل، ألياف.', alt: '1 كوب حليب قليل الدسم + 1 ثمرة فاكهة.' },
                    { title: 'الغداء (450 سعرة)', name: 'سمك مشوي وخضار', ing: '150g سمك فيليه مشوي، 1 كوب خضروات مسلوقة (بروكلي أو فاصوليا).', prep: 'يشوى السمك بالليمون والأعشاب. تطهى الخضروات على البخار.', benefits: 'أوميغا 3، فيتامين د، مضادات أكسدة.', alt: '120g لحم بقري مفروم قليل الدهن.' },
                    { title: 'العشاء (350 سعرة)', name: 'شوربة العدس الصحية', ing: '1.5 كوب شوربة عدس صحية، كمية قليلة من الخضروات الجذرية.', prep: 'يطهى العدس مع الخضروات (جزر، بصل، كرفس).', benefits: 'حديد، حمض الفوليك، بروتين نباتي، مشبعة جداً.', alt: '200g زبادي + خيار.' },
                ]
            },
            {
                dayName: 'الثلاثاء',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'زبادي وعسل وموز', ing: '150g زبادي يوناني، نصف ثمرة موز صغيرة، 5g عسل.', prep: 'يقطع الموز ويوضع مع الزبادي والعسل.', benefits: 'طاقة سريعة، بروتين، بوتاسيوم.', alt: '40g كورن فليكس كامل الحبوب + حليب.' },
                    { title: 'الغداء (450 سعرة)', name: 'سندويتش التونة بالخبز الأسمر', ing: '100g تونة مصفاة بالماء، 1 ملعقة صغيرة مايونيز خفيف، شريحة خبز أسمر، سلطة.', prep: 'تخلط التونة مع المايونيز الخفيف وتوضع في السندويتش.', benefits: 'بروتين سريع، دهون صحية، ألياف.', alt: '100g دجاج مطبوخ + شريحة خبز.' },
                    { title: 'العشاء (350 سعرة)', name: 'دجاج مقطع بالخضار', ing: '100g دجاج مكعبات، 1 كوب خضروات مقطعة (كوسا، فلفل، بصل).', prep: 'يطهى الدجاج والخضروات في مقلاة غير لاصقة مع التوابل.', benefits: 'وجبة كاملة غنية بالبروتين والفيتامينات.', alt: 'طبق كبير من الباذنجان المتبل بالفرن.' },
                ]
            },
            {
                dayName: 'الأربعاء',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'توست بالجبنة القريش', ing: 'شريحة توست أسمر، 100g جبنة قريش قليلة الدسم، 1 طماطم، رشة زعتر.', prep: 'توضع الجبنة والطماطم على التوست.', benefits: 'كالسيوم، بروتين (كازين)، مضادات أكسدة.', alt: '2 بيضة أومليت صغيرة.' },
                    { title: 'الغداء (450 سعرة)', name: 'سلطة الكينوا والعدس', ing: '1/2 كوب كينوا مطبوخة، 100g عدس مطبوخ، 1 كوب خضروات.', prep: 'تخلط المكونات وتتبل بالليمون.', benefits: 'بروتين نباتي كامل، ألياف عالية، مغنيسيوم.', alt: '100g أرز أسمر مطبوخ + خضروات.' },
                    { title: 'العشاء (350 سعرة)', name: 'عجة الخضروات الكبيرة', ing: '3 بيضات مخفوقة، كوب خضار غير نشوية (سبانخ، فلفل، فطر).', prep: 'تطهى الأومليت في مقلاة غير لاصقة.', benefits: 'بروتين عالٍ جداً، فيتامينات.', alt: '100g جبنة بيضاء قليلة الدسم + 2 خيار.' },
                ]
            },
            {
                dayName: 'الخميس',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'سموثي السبانخ والبروتين', ing: '1 كوب سبانخ، 100g حليب لوز غير محلى، 1 سكوب بروتين بودرة.', prep: 'تخلط المكونات في الخلاط.', benefits: 'حديد، بروتين نقي، فيتامين ك.', alt: 'زبادي بالفواكه.' },
                    { title: 'الغداء (450 سعرة)', name: 'ديك رومي وبطاطا حلوة', ing: '120g شرائح صدر الديك الرومي، 150g بطاطا حلوة مشوية، طبق سلطة.', prep: 'تشوى شرائح الديك الرومي والبطاطا الحلوة في الفرن.', benefits: 'كربوهيدرات معقدة غنية بفيتامين أ.', alt: '100g سمك + 100g بطاطا بيضاء مشوية.' },
                    { title: 'العشاء (350 سعرة)', name: 'حمص وخضروات للغمس', ing: '100g حمص مطبوخ (بدون زيت)، 1 كوب خضار (جزر، خيار).', prep: 'يقدم الحمص مع الخضروات للغمس بدلاً من الخبز.', benefits: 'بروتين نباتي، منغنيز، يساعد في الهضم.', alt: 'علبة تونة صغيرة مع نصف ثمرة أفوكادو.' },
                ]
            },
            {
                dayName: 'الجمعة',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'بيض وزيتون وجبن', ing: '2 بيضة مقلية (2ml زيت زيتون)، 3 حبات زيتون أسود، شريحة جبن أبيض.', prep: 'يقلى البيض ويقدم مع الزيتون والجبن.', benefits: 'بروتين، دهون أحادية غير مشبعة، كالسيوم.', alt: '1 كوب فواكه مقطعة + 50g جبن قريش.' },
                    { title: 'الغداء (450 سعرة)', name: 'أرز أسمر ولحم وخضار', ing: '100g أرز أسمر مطبوخ، 100g لحم بقري صافي مشوي، 1 كوب خضار سوتيه.', prep: 'تطهى المكونات معاً أو بشكل منفصل.', benefits: 'فيتامينات ب، حديد، زنك، طاقة طويلة الأمد.', alt: '100g مكرونة أسمر + دجاج.' },
                    { title: 'العشاء (350 سعرة)', name: 'سلطة الجمبري', ing: '120g جمبري (قريدس) مسلوق أو مشوي، طبق سلطة كبير (خس، فلفل).', prep: 'يسلق أو يشوى الجمبري ويضاف للسلطة.', benefits: 'بروتين قليل الدهون جداً، سيلينيوم، يود.', alt: 'صدر دجاج صغير مشوي + سلطة.' },
                ]
            },
            {
                dayName: 'السبت',
                meals: [
                    { title: 'الإفطار (300 سعرة)', name: 'شوفان وتفاح وقرفة', ing: '40g شوفان مطبوخ مع الماء، نصف تفاحة صغيرة مبشورة، رشة قرفة.', prep: 'يطهى الشوفان مع إضافة التفاح والقرفة.', benefits: 'ألياف قابلة للذوبان، طاقة مستدامة.', alt: 'زبادي مع بذور الشيا.' },
                    { title: 'الغداء (450 سعرة)', name: 'توفو مشوي مع السبانخ', ing: '150g توفو مكعبات مشوي، كوب سبانخ مطبوخ، 1 ملعقة صغيرة صلصة صويا خفيفة.', prep: 'يشوى التوفو ويضاف إليه السبانخ المطهوة وصلصة الصويا.', benefits: 'بروتين نباتي، كالسيوم، فيتامين ك.', alt: '100g فاصوليا حمراء مطبوخة + سلطة.' },
                    { title: 'العشاء (350 سعرة)', name: 'صدر دجاج مشوي وسلطة', ing: '120g صدر دجاج مشوي، طبق سلطة كبير (خضار ورقية، خيار، ليمون).', prep: 'يشوى الدجاج ويقطع ويضاف إلى السلطة.', benefits: 'بروتين نقي، وجبة خفيفة قبل النوم، فيتامينات.', alt: 'سمك فيليه مشوي + خضروات.' },
                ]
            },
        ].map((day, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl mb-8 border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300">
                <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-400 border-b-2 border-emerald-100 dark:border-emerald-900 pb-3 mb-6 flex items-center gap-3">
                    <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 w-10 h-10 flex items-center justify-center rounded-xl text-lg">
                        {index + 1}
                    </span>
                    اليوم {index === 0 ? 'الأول' : index === 1 ? 'الثاني' : index === 2 ? 'الثالث' : index === 3 ? 'الرابع' : index === 4 ? 'الخامس' : index === 5 ? 'السادس' : 'السابع'}: {day.dayName}
                    <span className="mr-auto text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 py-1 px-3 rounded-full font-bold">1100 سعرة</span>
                </h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {day.meals.map((meal, mIdx) => (
                        <div key={mIdx} className="bg-emerald-50 dark:bg-emerald-900/10 p-5 rounded-2xl hover:shadow-md transition duration-300 flex flex-col h-full border border-transparent hover:border-emerald-200 dark:hover:border-emerald-800">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg text-emerald-600 dark:text-emerald-400 shadow-sm">
                                    {mIdx === 0 ? <IconBreakfast className="w-6 h-6" /> : mIdx === 1 ? <IconLunch className="w-6 h-6" /> : <IconDinner className="w-6 h-6" />}
                                </div>
                                <h4 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">{meal.title}</h4>
                            </div>
                            
                            <p className="text-base font-extrabold text-gray-800 dark:text-white mb-4 bg-white/50 dark:bg-gray-800/50 p-2 rounded-lg">{meal.name}</p>
                            
                            <div className="text-sm space-y-3 flex-grow text-gray-700 dark:text-gray-300">
                                <div>
                                    <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">المكونات:</strong>
                                    {meal.ing}
                                </div>
                                <div>
                                    <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">التحضير:</strong>
                                    {meal.prep}
                                </div>
                                <div className="pt-2 border-t border-emerald-100 dark:border-emerald-800/30">
                                    <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">الفوائد/البدائل:</strong>
                                    {meal.benefits} <span className="block mt-1 text-xs text-gray-500 dark:text-gray-400 italic">البديل: {meal.alt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </section>

    </div>
  );
};

export default Balanced1100PlanView;
