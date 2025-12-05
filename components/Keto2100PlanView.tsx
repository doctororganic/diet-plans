
import React from 'react';

interface Keto2100PlanViewProps {
  onBack: () => void;
}

const Keto2100PlanView: React.FC<Keto2100PlanViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button onClick={onBack} className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl font-bold shadow-sm border border-gray-200 dark:border-gray-700">العودة للقائمة</button>
      
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <header className="bg-emerald-900 text-center p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">نظام الكيتو (2100 سعرة)</h1>
            <p className="text-xl text-emerald-300">خطة عالية الطاقة للنشيطين</p>
        </header>

        <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900/50">
            <section className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-400 mb-4">استراتيجية زيادة السعرات في الكيتو</h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
                    <li><strong className="text-emerald-600">زيادة الدهون:</strong> للوصول لـ 2100 سعرة، يجب أن تكون الدهون هي المصدر الرئيسي. أضف 1-2 ملعقة كبيرة إضافية من زيت الزيتون أو الزبدة لكل وجبة.</li>
                    <li><strong className="text-emerald-600">حجم البروتين:</strong> زد حصة البروتين (لحم/دجاج/سمك) إلى 200-250 جرام في الوجبة.</li>
                    <li><strong className="text-emerald-600">السناك:</strong> أضف وجبة خفيفة غنية بالدهون مثل "قنابل الدهون" (Fat Bombs) أو مكسرات المكاديميا.</li>
                </ul>
            </section>

            <section>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 border-b pb-2">نموذج يوم 2100 سعرة كيتو</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">الإفطار (600 سعرة)</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 font-bold">أومليت دسم 4 بيضات</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">4 بيضات مقلية في 2 ملعقة كبيرة زبدة، مع 50 جم جبن شيدر ونصف حبة أفوكادو.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">الغداء (750 سعرة)</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 font-bold">سلطة دجاج وأفوكادو غنية</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">200 جم فخذ دجاج (بجلد)، حبة أفوكادو كاملة، مايونيز كامل الدسم، خضروات ورقية.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
                        <h4 className="text-xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">العشاء (750 سعرة)</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-2 font-bold">ريب آي ستيك بالزبدة</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">250 جم ستيك ريب آي عالي الدهن، مطبوخ بـ 2 ملعقة زبدة، مع بروكلي وسلطة جانبية بزيت زيتون.</p>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Keto2100PlanView;
