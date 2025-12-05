
import React from 'react';

interface Keto1700PlanViewProps {
  onBack: () => void;
}

const Keto1700PlanView: React.FC<Keto1700PlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button 
        onClick={onBack}
        className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-700 dark:hover:text-green-400 rounded-xl font-bold transition-all shadow-sm flex items-center gap-2 group border border-gray-200 dark:border-gray-700"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        العودة للقائمة
      </button>

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden border-t-8 border-green-600 dark:border-green-500">
        <header className="p-8 text-center bg-gray-50 dark:bg-gray-900/50">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3">نظام الكيتو دايت</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 dark:text-green-400 inline-block border-b-2 border-green-200 dark:border-green-800 pb-2 mb-6">خطة 1700 سعرة حرارية لليوم الواحد</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                <span className="font-bold text-green-700 dark:text-green-400">الكيتو دايت</span> هو نظام غذائي منخفض جدًا في الكربوهيدرات وعالي في الدهون، يهدف إلى دفع الجسم للدخول في حالة تسمى <span className="text-blue-600 dark:text-blue-400 font-bold">"الحالة الكيتونية" (Ketosis)</span>.
            </p>
        </header>

        <div className="p-6 md:p-10 space-y-12">
            <section className="bg-green-50 dark:bg-green-900/10 rounded-2xl p-8 shadow-inner border border-green-100 dark:border-green-800/30">
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6 flex items-center gap-2">
                    <span className="text-3xl">🍽️</span> توزيع المغذيات الكبرى (الماكروز)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">التوزيع المقترح لنظام 1700 سعرة حرارية.</p>
                <div className="overflow-hidden rounded-xl border border-green-200 dark:border-green-800">
                    <table className="min-w-full divide-y divide-green-200 dark:divide-green-800">
                        <thead className="bg-green-100 dark:bg-green-900/40">
                            <tr>
                                <th className="px-6 py-4 text-right text-sm font-bold text-green-800 dark:text-green-200 uppercase">المغذي</th>
                                <th className="px-6 py-4 text-right text-sm font-bold text-green-800 dark:text-green-200 uppercase">النسبة</th>
                                <th className="px-6 py-4 text-right text-sm font-bold text-green-800 dark:text-green-200 uppercase">الجرام التقريبي</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-green-100 dark:divide-gray-700">
                            <tr><td className="px-6 py-4 font-bold text-green-900 dark:text-white">الدهون</td><td className="px-6 py-4 text-gray-600 dark:text-gray-300">60% - 75%</td><td className="px-6 py-4 font-bold text-gray-800 dark:text-gray-200">113 - 141 جرام</td></tr>
                            <tr><td className="px-6 py-4 font-bold text-green-900 dark:text-white">البروتين</td><td className="px-6 py-4 text-gray-600 dark:text-gray-300">20% - 30%</td><td className="px-6 py-4 font-bold text-gray-800 dark:text-gray-200">85 - 127 جرام</td></tr>
                            <tr className="bg-red-50/50 dark:bg-red-900/5"><td className="px-6 py-4 font-bold text-green-900 dark:text-white">الكربوهيدرات</td><td className="px-6 py-4 text-gray-600 dark:text-gray-300">5% - 10%</td><td className="px-6 py-4 font-black text-red-600 dark:text-red-400">21 - 42 جرام</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-r-4 border-blue-600 pl-3 flex items-center gap-2">🥗 أمثلة مقترحة لوجبات يوم كيتوني</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl shadow-sm border-b-4 border-blue-400 dark:border-blue-600">
                        <div className="flex items-center mb-3 text-blue-800 dark:text-blue-300"><span className="text-3xl ml-2">🍳</span><h4 className="font-bold text-lg">الإفطار</h4></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">أومليت 3 بيضات بالزبدة، مع 50 جم جبن شيدر، وكوب سبانخ.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl shadow-sm border-b-4 border-blue-400 dark:border-blue-600">
                        <div className="flex items-center mb-3 text-blue-800 dark:text-blue-300"><span className="text-3xl ml-2">🍗</span><h4 className="font-bold text-lg">الغداء</h4></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">150 جم صدر دجاج مشوي، مع سلطة خضراء كبيرة وتتبيلة زيت زيتون.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl shadow-sm border-b-4 border-blue-400 dark:border-blue-600">
                        <div className="flex items-center mb-3 text-blue-800 dark:text-blue-300"><span className="text-3xl ml-2">🐟</span><h4 className="font-bold text-lg">العشاء</h4></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">170 جم سلمون مشوي، مع كوب قرنبيط مهروس بالزبدة.</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl shadow-sm border-b-4 border-blue-400 dark:border-blue-600">
                        <div className="flex items-center mb-3 text-blue-800 dark:text-blue-300"><span className="text-3xl ml-2">🥜</span><h4 className="font-bold text-lg">سناك</h4></div>
                        <p className="text-sm text-gray-700 dark:text-gray-300">قبضة مكسرات وقطعة جبن صلب كامل الدسم.</p>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-green-100 dark:border-green-900/30 shadow-sm">
                    <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 border-b-2 border-green-200 dark:border-green-800 pb-2">✅ الأطعمة المسموحة</h3>
                    <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong className="text-green-800 dark:text-green-300">الدهون:</strong> زيوت، زبدة، أفوكادو.</li>
                        <li><strong className="text-green-800 dark:text-green-300">البروتينات:</strong> لحوم، دواجن، أسماك، بيض.</li>
                        <li><strong className="text-green-800 dark:text-green-300">الخضروات:</strong> سبانخ، بروكلي، قرنبيط.</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-red-100 dark:border-red-900/30 shadow-sm">
                    <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4 border-b-2 border-red-200 dark:border-red-800 pb-2">❌ الأطعمة الممنوعة</h3>
                    <ul className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                        <li><strong className="text-red-800 dark:text-red-300">النشويات:</strong> خبز، أرز، بطاطس.</li>
                        <li><strong className="text-red-800 dark:text-red-300">السكريات:</strong> حلويات، عصائر، فواكه (ما عدا التوت).</li>
                    </ul>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Keto1700PlanView;
