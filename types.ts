export enum Gender {
  Male = 'male',
  Female = 'female',
}

export enum ActivityLevel {
  Sedentary = 'sedentary', // Little or no exercise
  LightlyActive = 'light', // Light exercise/sports 1-3 days/week
  ModeratelyActive = 'moderate', // Moderate exercise/sports 3-5 days/week
  VeryActive = 'very', // Hard exercise/sports 6-7 days/week
  ExtraActive = 'extreme', // Very hard exercise/physical job
}

export type Goal = 'weight-loss' | 'muscle-gain' | 'maintenance' | 'performance';

export interface UserStats {
  gender: Gender;
  age: number;
  height: number; // cm
  weight: number; // kg
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface DietPlan {
  id: string;
  category: string;
  calories: number;
  title: string;
  icon: string;
  description?: string;
  link?: string;
}

export interface DietCategoryGroup {
  name: string;
  icon: string;
  plans: DietPlan[];
}

export interface MicroNutrient {
  name: string;
  value: string | number;
  unit: string;
  note?: string;
}

// Advanced Calculator Types
export interface NutritionPlan {
  calories: {
    bmr: number;
    tdee: number;
    target: number;
  };
  macronutrients: {
    protein: { grams: number; calories: number; percentage: number };
    fat: { grams: number; calories: number; percentage: number };
    carbs: { grams: number; calories: number; percentage: number };
  };
  micronutrients: MicroNutrient[];
  recommendations: string[];
  warnings: string[];
}