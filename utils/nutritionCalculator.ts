import { UserStats, NutritionPlan, Gender, MicroNutrient } from '../types';

const ACTIVITY_MULTIPLIERS = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extreme: 1.9
};

export function calculateNutritionPlan(profile: UserStats): NutritionPlan {
  // 1. Calculate BMR (Mifflin-St Jeor) - Used for Report Reference
  let bmr: number;
  if (profile.gender === Gender.Male) {
    bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) + 5;
  } else {
    bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age) - 161;
  }
  bmr = Math.round(bmr);

  // 2. Calculate TDEE - Used for Report Reference
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[profile.activityLevel]);

  // 3. Calculate Target Calories based on Specific User Rules
  let kcalPerKg = 0;
  let ruleDescription = "";

  if (profile.goal === 'weight-loss') {
    // Rule: For any person needs to lose weight, make 20 kcal for each kilo
    kcalPerKg = 20;
    ruleDescription = "معادلة خسارة الوزن (20 سعرة/كجم)";
  } else if (profile.goal === 'muscle-gain') {
    // Rule: For any person needs to gain muscle, make 27 kcal for each kilo
    kcalPerKg = 27;
    ruleDescription = "معادلة بناء العضلات (27 سعرة/كجم)";
  } else {
    // Maintenance or Performance
    if (profile.weight > 80) {
      // Rule: Make 20 kcal for each kilogram for obese people more than 80 kilo
      kcalPerKg = 20;
      ruleDescription = "معادلة الحفاظ على الوزن للوزن > 80 (20 سعرة/كجم)";
    } else {
      // Rule: Add 25 kcal for each kilo for people below than 80 kg
      kcalPerKg = 25;
      ruleDescription = "معادلة الحفاظ على الوزن للوزن < 80 (25 سعرة/كجم)";
    }
  }

  const targetCalories = Math.round(profile.weight * kcalPerKg);

  // 4. Calculate Macros
  const macros = calculateMacronutrients(targetCalories, profile);

  // 5. Calculate Micros (Detailed Table Logic)
  const micros = calculateMicronutrientsList(profile, targetCalories);

  // 6. Recommendations
  const recommendations: string[] = [];
  recommendations.push(`تم حساب احتياجك بناءً على ${ruleDescription}.`);
  
  if (profile.goal === 'weight-loss') {
    recommendations.push('تأكد من شرب الماء بكثرة لتعزيز الحرق.');
    recommendations.push('حاول توزيع البروتين على مدار اليوم للحفاظ على العضلات.');
  } else if (profile.goal === 'muscle-gain') {
    recommendations.push('وزع كميات البروتين والكربوهيدرات حول أوقات التمرين (قبل وبعد).');
  } else {
    recommendations.push('حافظ على نشاط بدني معتدل للحفاظ على النتائج.');
  }
  
  if (profile.gender === Gender.Female && profile.age < 50) {
    recommendations.push('اهتمي بمصادر الحديد وفيتامين C لتعزيز الامتصاص.');
  }

  return {
    calories: { bmr, tdee, target: targetCalories },
    macronutrients: macros,
    micronutrients: micros,
    recommendations,
    warnings: []
  };
}

function calculateMacronutrients(targetCalories: number, profile: UserStats) {
  const recommendations = {
    protein: { grams: 0, calories: 0, percentage: 0 },
    fat: { grams: 0, calories: 0, percentage: 0 },
    carbs: { grams: 0, calories: 0, percentage: 0 }
  };

  // Protein Strategy (g/kg bodyweight)
  let proteinFactor = 0.8;
  if (profile.goal === 'weight-loss') proteinFactor = 1.6; // High protein for sparing muscle
  else if (profile.goal === 'muscle-gain') proteinFactor = 1.8; // High protein for growth
  else if (profile.goal === 'performance') proteinFactor = 1.4;
  else proteinFactor = 1.2; // Standard maintenance/Health

  recommendations.protein.grams = Math.round(profile.weight * proteinFactor);
  recommendations.protein.calories = recommendations.protein.grams * 4;
  recommendations.protein.percentage = Math.round((recommendations.protein.calories / targetCalories) * 100);

  // Fat Strategy (% of calories)
  let fatPercentage = 30;
  if (profile.goal === 'weight-loss') fatPercentage = 30;
  else if (profile.goal === 'muscle-gain') fatPercentage = 25; // Slightly lower fat to allow more carbs for energy

  recommendations.fat.calories = Math.round(targetCalories * (fatPercentage / 100));
  recommendations.fat.grams = Math.round(recommendations.fat.calories / 9);
  recommendations.fat.percentage = fatPercentage;

  // Carbs (Remaining)
  recommendations.carbs.calories = targetCalories - recommendations.protein.calories - recommendations.fat.calories;
  // Ensure carbs don't go negative
  recommendations.carbs.calories = Math.max(0, recommendations.carbs.calories);
  
  recommendations.carbs.grams = Math.round(recommendations.carbs.calories / 4);
  recommendations.carbs.percentage = Math.round((recommendations.carbs.calories / targetCalories) * 100);

  return recommendations;
}

function calculateMicronutrientsList(profile: UserStats, calories: number): MicroNutrient[] {
  const micros: MicroNutrient[] = [];
  const { gender, age } = profile;

  // 1. Iron
  let ironVal = 8;
  let ironNote = "صحة الدم";
  if (gender === Gender.Female) {
    if (age >= 19 && age <= 50) {
      ironVal = 18;
      ironNote = "هام في سن الإنجاب";
    } else if (age >= 51) {
      ironVal = 8;
    }
  }
  micros.push({ name: 'الحديد (Iron)', value: ironVal, unit: 'mg', note: ironNote });

  // 2. Calcium
  let calcVal = 1000;
  if (age >= 71) {
    calcVal = 1200;
  } else if (gender === Gender.Female && age >= 51) {
    calcVal = 1200;
  }
  micros.push({ name: 'الكالسيوم', value: calcVal, unit: 'mg', note: 'صحة العظام' });

  // 3. Folate
  micros.push({ name: 'الفولات', value: 400, unit: 'μg', note: 'تجديد الخلايا' });

  // 4. Vitamin D
  let vitDVal = 600;
  if (age >= 71) vitDVal = 800;
  micros.push({ name: 'فيتامين D', value: vitDVal, unit: 'IU', note: 'المناعة والعظام' });

  // 5. Magnesium
  let magVal = 420;
  if (gender === Gender.Female) magVal = 320;
  micros.push({ name: 'المغنيسيوم', value: magVal, unit: 'mg', note: 'وظائف الأعصاب' });

  // 6. Vitamin B12
  micros.push({ name: 'فيتامين B12', value: 2.4, unit: 'μg', note: 'الطاقة والأعصاب' });

  // 7. Zinc
  let zincVal = 11;
  if (gender === Gender.Female) zincVal = 8;
  micros.push({ name: 'الزنك', value: zincVal, unit: 'mg', note: 'المناعة' });

  // 8. Fiber
  // Rule: 14g per 1000 kcal
  const calculatedFiber = Math.round((calories / 1000) * 14);
  const minFiber = gender === Gender.Male ? 38 : 25;
  const finalFiber = Math.max(calculatedFiber, minFiber); // Ensure at least min, or based on caloric intake if higher? Usually recommendations are "AI" (Adequate Intake). Let's show the calculated based on calories but note the min.
  
  micros.push({ 
    name: 'الألياف', 
    value: calculatedFiber, 
    unit: 'g', 
    note: `الحد الأدنى: ${minFiber}g` 
  });

  return micros;
}