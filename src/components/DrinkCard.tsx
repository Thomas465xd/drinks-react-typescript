import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
    drink: Drink
}

export default function DrinkCard({ drink }: DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div>
            <div className="border shadow-lg mx-auto md:w-full">
                <img src={drink.strDrinkThumb} 
                    alt={`Image of ${drink.strDrink}`}
                    className="hover:scale-105 duration-300 hover:rotate-2 overflow-hidden "
                />
            </div>

            <div className="border p-5">
                <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
                <button 
                    type="button" 
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-2 font-extrabold text-white"
                    onClick={() => selectRecipe(drink.idDrink)}
                >See Recipe</button>
            </div>
        </div>
    )
}