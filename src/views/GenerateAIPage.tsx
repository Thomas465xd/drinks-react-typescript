import { ArrowUpCircle } from "lucide-react";
import { useAppStore } from "../stores/useAppStore";

export default function GenerateAIPage() {

    const showNotification = useAppStore(state => state.showNotification)
    const generateRecipe = useAppStore(state => state.generateRecipe)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault() 
        
        const form = new FormData(e.currentTarget)
        const prompt = form.get("prompt") as string

        if(prompt.trim() === "") {
            showNotification({
                text: "Prompt is empty", 
                error: true
            })

            return 
        }

        await generateRecipe(prompt)
    }

	return (
		<>
			<h1 className="text-6xl font-extrabold">Generate Recipe with AI</h1>

			<div className="max-w-4xl mx-auto">
				<form
					onSubmit={handleSubmit}
					className="flex flex-col space-y-3 py-10"
				>
					<div className="relative">
						<input
							name="prompt"
							id="prompt"
							className="border bg-white p-4 rounded-lg w-full border-slate-800"
							placeholder="Generate a Recipe with Ingredients. Ej. A True Amaretto Sour"
						/>
						<button
							type="submit"
							aria-label="Enviar"
							className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2`}
						>
                            <ArrowUpCircle size={40} className="text-orange-600 hover:text-orange-500 hover:-translate-y-0.5 transition-all duration-200"/>
						</button>
					</div>
				</form>

				<div className="py-10 whitespace-pre-wrap"></div>
			</div>
		</>
	);
}
