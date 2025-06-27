import { streamText } from "ai"
import openRouter from "../lib/ai"

export async function generateRecipe(prompt: string) {
    const result = streamText({
        model: openRouter("meta-llama/llama-3.3-70b-instruct:free"), 
        prompt
    })

    return result.textStream
}