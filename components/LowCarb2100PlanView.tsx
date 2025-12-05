
import React from 'react';

interface LowCarb2100PlanViewProps {
  onBack: () => void;
}

const LowCarb2100PlanView: React.FC<LowCarb2100PlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <header className="bg-emerald-600 dark:bg-emerald-800 p-8 text-white text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-2">🌟 خطة نظام الكارب المنخفض المعدلة</h1>
            <p className="text-lg font-medium opacity-90">الهدف: 2100 سعرة حرارية يوميًا</p>
        </header>

        <main className="p-6 md:p-10 space-y-12">
            
            {/* Strategy Section */}
            <section className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                <ul className="space-y-6 text-gray-700 dark:text-gray-200">
                    <li className="flex items-start">
                        <span className="text-emerald-500 font-bold text-2xl ml-4">1.</span>
                        <div>
                            <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">زيادة الدهون الصحية (⬆️)</p>
                            <p className="text-base leading-relaxed">مضاعفة كمية الزيت/الزبدة المستخدمة في الطبخ. إضافة كميات أكبر من <strong className="text-emerald-700 dark:text-emerald-400">الأفوكادو</strong>، <strong className="text-emerald-700 dark:text-emerald-400">المكسرات</strong>، و<strong className="text-emerald-700 dark:text-emerald-400">المايونيز</strong> كامل الدسم.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 font-bold text-2xl ml-4">2.</span>
                        <div>
                            <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">زيادة البروتين (⬆️)</p>
                            <p className="text-base leading-relaxed">رفع كمية اللحوم، الدجاج، أو الأسماك في وجبتي الغداء والعشاء إلى حوالي <strong className="text-emerald-700 dark:text-emerald-400">220 - 250 جرام</strong>.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-emerald-500 font-bold text-2xl ml-4">3.</span>
                        <div>
                            <p className="font-bold text-xl text-gray-900 dark:text-white mb-1">وجبة خفيفة إضافية (➕)</p>
                            <p className="text-base leading-relaxed">إضافة وجبة يومية غنية بالدهون والبروتين (مثل المكسرات، أو جبنة كاملة الدسم مع زبدة المكسرات).</p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* Nutrition Overview Table */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-emerald-400 pb-3 mb-6">📊 نظرة عامة على القيم الغذائية اليومية</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-emerald-100 dark:bg-emerald-900/40">
                            <tr>
                                <th className="px-4 py-4 text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">الوجبة</th>
                                <th className="px-4 py-4 text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">سعرات (تقريبية)</th>
                                <th className="px-4 py-4 text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">بروتين (جم)</th>
                                <th className="px-4 py-4 text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">كارب صافي (جم)</th>
                                <th className="px-4 py-4 text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wider">دهون (جم)</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700 text-sm">
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">الإفطار</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">450</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">30</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">8</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">35</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">الغداء</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">750</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">55</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">15</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">50</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">العشاء</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">700</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">75</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">10</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-600 dark:text-gray-400">40</td>
                            </tr>
                            <tr className="bg-gray-50 dark:bg-gray-700/50 font-bold">
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">الإجمالي الكلي المستهدف</td>
                                <td className="px-4 py-4 whitespace-nowrap text-emerald-600 dark:text-emerald-400">2100</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">165+</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">38</td>
                                <td className="px-4 py-4 whitespace-nowrap text-gray-900 dark:text-white">143+</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Day 1 Details */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-emerald-400 pb-3 mb-6">🍽️ تفاصيل وجبات اليوم الأول (نموذج التعديل)</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Breakfast */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400">الإفطار: أومليت بالخضار والجبن</p>
                            <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-lg">450 سعرة</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                            <li><span className="font-bold text-gray-900 dark:text-white">المكونات:</span> <strong>4 بيضات</strong>، <strong>2 ملعقة طعام</strong> زيت زيتون/زبدة، <strong>50 جرام</strong> جبنة شيدر/موزاريلا، 1/2 كوب فلفل رومي وبصل.</li>
                            <li><span className="font-bold text-red-500 dark:text-red-400">التعديل:</span> زيادة كمية البيض والزيت والجبن.</li>
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">الفائدة:</span> زيادة كبيرة في البروتين والدهون الصحية.</li>
                        </ul>
                    </div>

                    {/* Lunch */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400">الغداء: سلطة التونة الغنية</p>
                            <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-lg">750 سعرة</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                            <li><span className="font-bold text-gray-900 dark:text-white">المكونات:</span> علبة تونة كبيرة، <strong>4 ملاعق طعام مايونيز</strong>، <strong>حبة أفوكادو كاملة</strong>، كرفس، 2 كوب خس.</li>
                            <li><span className="font-bold text-red-500 dark:text-red-400">التعديل:</span> زيادة كمية الأفوكادو والمايونيز للدهون والسعرات.</li>
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">الفائدة:</span> مصدر ممتاز لأوميغا 3، وجرعة عالية من الدهون الصحية.</li>
                        </ul>
                    </div>
                    
                    {/* Dinner */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition md:col-span-2">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400">العشاء: دجاج مشوي مع البروكلي بالزبدة</p>
                            <span className="text-xs font-bold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-lg">700 سعرة</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-sm leading-relaxed">
                            <li><span className="font-bold text-gray-900 dark:text-white">المكونات:</span> <strong>220-250 جرام</strong> صدر دجاج، 2 كوب بروكلي، <strong>2 ملعقة طعام زبدة</strong>، توابل.</li>
                            <li><span className="font-bold text-red-500 dark:text-red-400">التعديل:</span> زيادة كمية الدجاج ومضاعفة كمية الزبدة المستخدمة في طهي البروكلي.</li>
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">الفائدة:</span> بروتين عالي جدًا لبناء العضلات، فيتامينات ذائبة في الدهون.</li>
                        </ul>
                    </div>

                    {/* Snack */}
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border-2 border-dashed border-emerald-300 dark:border-emerald-700 md:col-span-2">
                        <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">وجبة خفيفة إضافية (سناك) (200 سعرة)</p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                            <li><span className="font-bold">المكونات:</span> <strong>30 جرام مكسرات</strong> (جوز أو لوز أو مكاديميا).</li>
                            <li><span className="font-bold">توقيت:</span> تؤكل بين الغداء والعشاء أو بعد العشاء.</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            {/* Guidelines */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-emerald-400 pb-3 mb-6">🗓️ إرشادات تطبيق الزيادة (الأيام 2-7)</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-2xl border border-gray-200 dark:border-gray-600">
                        <p className="font-bold text-gray-900 dark:text-white mb-4 text-lg">تعليمات عامة:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed">
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">الإفطار (450 سعرة):</span> إضافة بيضة إضافية أو ملعقة كبيرة زيت/زبدة للطبخ. إذا كان الإفطار زبادي، زد الكمية إلى <strong>1.5 كوب</strong> مع <strong>15 جرام مكسرات إضافية</strong>.</li>
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">الغداء (750 سعرة):</span> زيادة البروتين إلى حوالي <strong>200 جرام</strong>. إضافة مصدر دهني واضح مثل <strong>نصف حبة أفوكادو إضافية</strong> أو ملعقة طعام زيت زيتون إضافية للسلطة.</li>
                            <li><span className="font-bold text-emerald-600 dark:text-emerald-400">العشاء (700 سعرة):</span> زيادة البروتين إلى حوالي <strong>220-250 جرام</strong>. <strong>مضاعفة كمية الزبدة/الزيت</strong> المستخدمة لطهي الطبق الجانبي أو الخضار.</li>
                        </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md">
                        <p className="font-bold text-gray-900 dark:text-white mb-4">أمثلة عملية للتعديلات:</p>
                        <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                            <li><strong>اليوم 2 (غداء السلمون):</strong> زيادة قطعة السلمون إلى <strong>250 جرام</strong>، استخدام <strong>2 ملعقة طعام</strong> زيت زيتون في شوي الهليون.</li>
                            <li><strong>اليوم 4 (عشاء الستيك):</strong> زيادة قطعة الستيك إلى <strong>220 جرام</strong>، إضافة <strong>حبة أفوكادو كاملة</strong> في السلطة.</li>
                            <li><strong>وجبة خفيفة مقترحة:</strong> <strong>1/2 كوب جبن قريش كامل الدسم مع 15 جرام لوز</strong>.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white border-b-2 border-emerald-400 pb-3 mb-6">✅ فوائد النظام الغذائي المعدّل</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                        <p className="text-4xl mb-4">💪</p>
                        <p className="font-bold text-gray-900 dark:text-white mb-2">الحفاظ على الكتلة العضلية</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">الكميات العالية من البروتين تدعم بناء العضلات والحفاظ عليها.</p>
                    </div>
                    <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                        <p className="text-4xl mb-4">🔋</p>
                        <p className="font-bold text-gray-900 dark:text-white mb-2">دعم الطاقة والنشاط</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">مستوى السعرات كافٍ للأشخاص الأكثر نشاطاً أو ذوي الكتلة العضلية الأكبر.</p>
                    </div>
                    <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                        <p className="text-4xl mb-4">😌</p>
                        <p className="font-bold text-gray-900 dark:text-white mb-2">زيادة الشعور بالشبع</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">ارتفاع كمية الدهون والبروتين يمنح إشباعاً طويل الأمد.</p>
                    </div>
                </div>
            </section>
        </main>
      </div>
    </div>
  );
};

export default LowCarb2100PlanView;
