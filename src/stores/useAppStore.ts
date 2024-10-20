import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { RecipesSliceType, createRecipesSlice } from "./recipeSlice";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
})))