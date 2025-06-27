import { StateCreator } from "zustand";
import { generateRecipe } from "../services/AIService";


export type AISlice = {
    recipe: string
    isGenerating: boolean
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], []> = (set) => ({
    recipe: "", 
    isGenerating: false, 
    generateRecipe: async (prompt) => {
        set({recipe: "", isGenerating: true}) // Limpiar recipe (en caso de que el usuario vuelva a preguntar)
        const data = await generateRecipe(prompt)

        for await (const textFragment of data) {
            console.log(textFragment)

            set((state) => ({
                recipe: state.recipe + textFragment
            }))
        }

        set({
            isGenerating: false
        })
    }
})