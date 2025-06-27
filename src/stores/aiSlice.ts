import { StateCreator } from "zustand";
import { generateRecipe } from "../services/AIService";


export type AISlice = {
    recipe: string
    generateRecipe: (prompt: string) => Promise<void>
}

export const createAISlice : StateCreator<AISlice, [], []>= () => ({
    recipe: "", 
    generateRecipe: async (prompt) => {
        const data = await generateRecipe(prompt)

        for await (const textFragment of data) {
            console.log(textFragment)
        }
    }
})