import { DietCategoryGroup, ActivityLevel } from './types';

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  [ActivityLevel.Sedentary]: 1.2,
  [ActivityLevel.LightlyActive]: 1.375,
  [ActivityLevel.ModeratelyActive]: 1.55,
  [ActivityLevel.VeryActive]: 1.725,
  [ActivityLevel.ExtraActive]: 1.9,
};

// Updated calorie range as requested
export const CALORIE_RANGE = [1100, 1300, 1500, 1700, 1900, 2100];

const generatePlans = (category: string, iconKey: string, prefix: string): DietCategoryGroup => {
  return {
    name: category,
    icon: iconKey,
    plans: CALORIE_RANGE.map((cal) => ({
      id: `${prefix}-${cal}`,
      category,
      calories: cal,
      icon: iconKey,
      title: `${category} - ${cal} سعر حراري`,
    })),
  };
};

export const DIET_GROUPS: DietCategoryGroup[] = [
  generatePlans('نظام الكيتو دايت', 'keto', 'keto'),
  generatePlans('نظام الكارب المنخفض', 'low-carb', 'low-carb'),
  generatePlans('نظام البحر الأبيض المتوسط', 'mediterranean', 'mediterranean'),
  generatePlans('النظام المتوازن', 'balanced', 'balanced'),
  generatePlans('نظام المضاد للالتهابات والصيام المتقطع', 'intermittent', 'intermittent'),
];