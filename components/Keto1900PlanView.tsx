
import React from 'react';

interface Keto1900PlanViewProps {
  onBack: () => void;
}

const Keto1900PlanView: React.FC<Keto1900PlanViewProps> = ({ onBack }) => {
  const days = [
    {
      title: "اليوم الأول: بداية كيتونية قوية",
      meals: [
        { type: "الفطور", name: "بيض مخفوق بالجبن والأفوكادو", cal: "450", color: "yellow", desc: "3 بيضات مقلية بالزبدة مع 30 جم جبن شيدر ونصف حبة أفوكادو إضافية للدهون." },
        { type: "الغداء", name: "سلطة التونة بالمايونيز والجرجير", cal: "550", color: "green", desc: "علبة تونة مع 3 ملاعق مايونيز وزيت زيتون وجرجير." },
        { type: "العشاء", name: "صدر دجاج مشوي مع البروكلي بالزبدة", cal: "900", color: "indigo", desc: "220 جم دجاج مشوي، مع 3 أكواب بروكلي مغطى بملعقتين كبيرتين زبدة وملعقة زيت زيتون." }
      ]
    },
    {
      title: "اليوم الثاني: دهون صحية وألياف",
      meals: [
        { type: "الفطور", name: "زبادي يوناني كامل الدسم ومكسرات", cal: "550", color: "yellow", desc: "كوب ونصف زبادي يوناني مع حفنة جوز وبذور شيا." },
        { type: "الغداء", name: "لفائف الخس باللحم المفروم", cal: "650", color: "green", desc: "200 جم لحم مفروم عالي الدهن مطبوخ وملفوف بالخس مع كريمة حامضة." },
        { type: "العشاء", name: "سمك السلمون المشوي مع الهليون", cal: "700", color: "indigo", desc: "200 جم سلمون مشوي مع زبدة الليمون وهليون." }
      ]
    },
    {
      title: "اليوم الثالث: خضروات غير نشوية",
      meals: [
        { type: "الفطور", name: "قهوة بالزبدة مع بيض", cal: "450", color: "yellow", desc: "قهوة بوليت بروف (زبدة + MCT) مع بيضتين مسلوقتين." },
        { type: "الغداء", name: "سلطة الدجاج والجبن", cal: "650", color: "green", desc: "سلطة كبيرة مع دجاج، مكعبات جبن، وزيت زيتون وفير." },
        { type: "العشاء", name: "يخنة اللحم والقرنبيط", cal: "800", color: "indigo", desc: "يخنة لحم بقري دسمة مع قرنبيط وكريمة طبخ." }
      ]
    },
    {
      title: "اليوم الرابع: تنوع النكهات",
      meals: [
        { type: "الفطور", name: "جبنة قريش وتوت", cal: "450", color: "yellow", desc: "كوب جبنة قريش كاملة الدسم مع قليل من التوت وزيت زيتون." },
        { type: "الغداء", name: "برجر كيتو (بدون خبز)", cal: "700", color: "green", desc: "قطعتين برجر لحم مع جبن، مايونيز، ومخلل ملفوف بالخس." },
        { type: "العشاء", name: "روبيان بالزبدة", cal: "750", color: "indigo", desc: "روبيان مطهي بكمية وافرة من الزبدة والثوم مع سبانخ." }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 animate-fade-in font-sans">
      <button onClick={onBack} className="mb-8 px-6 py-3 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-xl font-bold shadow-sm border border-gray-200 dark:border-gray-700">العودة للقائمة</button>
      
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
        <header className="bg-indigo-900 text-center p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">نظام الكيتو (1900 سعرة)</h1>
            <p className="text-xl text-indigo-300">خطة غنية بالدهون ومشبعة</p>
        </header>

        <div className="p-8 space-y-8 bg-gray-50 dark:bg-gray-900/50">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-6 rounded-xl border border-indigo-200 dark:border-indigo-800 text-indigo-900 dark:text-indigo-200">
                <h3 className="font-bold text-lg mb-2">استراتيجية الكيتو لهذا المستوى:</h3>
                <p>للوصول لـ 1900 سعرة، تم زيادة كميات الدهون الصحية (زيت، زبدة، أفوكادو) في كل وجبة. تأكد من إبقاء الكربوهيدرات منخفضة جداً.</p>
            </div>

            {days.map((day, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-b pb-2">{day.title}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {day.meals.map((meal, mIdx) => (
                            <div key={mIdx} className={`p-4 rounded-lg bg-${meal.color}-50 dark:bg-${meal.color}-900/20 border-l-4 border-${meal.color}-500`}>
                                <div className="flex justify-between font-bold mb-2 text-gray-900 dark:text-white">
                                    <span>{meal.type}</span>
                                    <span>{meal.cal} سعرة</span>
                                </div>
                                <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{meal.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{meal.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Keto1900PlanView;
