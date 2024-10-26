import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

    const favorites = useAppStore((state) => state.favorites)
    const hasFavorites = useMemo(() => favorites.length > 0, [favorites])

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-6xl font-extrabold border-orange-500 border-b-4 p-2">Favorites</h1>

                {hasFavorites ? (
                    <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-10">
                        {favorites.map((favorite) => (
                            <DrinkCard
                                key={favorite.idDrink}
                                drink={favorite}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="my-10 text-center text-2xl">No favorites yet...</p>
                )}
            </div>
        </>
    )
}
