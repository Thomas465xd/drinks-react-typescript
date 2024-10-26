import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

    const {drinks} = useAppStore((state) => state.drinks)

    const hasDrinks = useMemo(() => drinks.length > 0, [drinks])

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="font-extrabold text-6xl border-orange-500 border-b-4 p-4">Recipes</h1>


                {hasDrinks ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10 ">
                        {drinks.map((drink) => (
                            <DrinkCard 
                                key={drink.idDrink} 
                                drink={drink} 
                            />
                        ))}
                    </div>
                ) : (
                    <p className="my-10 text-center text-2xl">No recipes</p>
                )}
            </div>
        </>
    )
}
