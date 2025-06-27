import { createOpenRouter } from "@openrouter/ai-sdk-provider"

const openRouter = createOpenRouter({
    apiKey: import.meta.env.VITE_OPENROUTER_KEY
})

export default openRouter