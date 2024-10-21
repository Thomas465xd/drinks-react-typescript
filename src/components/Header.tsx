import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { useAppStore } from "../stores/useAppStore"

export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingredient: '', 
        category: ''
    })

    const { pathname } = useLocation()
    const isHome = useMemo(() => pathname === "/", [pathname])

    const fetchCategories = useAppStore((state) => state.fetchCategories )
    const categories = useAppStore((state) => state.categories )
    const searchRecipes = useAppStore((state) => state.searchRecipes )
    //console.log(categories)

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        //validate
        if(Object.values(searchFilters).includes("")) {
            alert("Please fill in all fields")
            return
        }

        // Query the recipes
        searchRecipes(searchFilters)
    }

    return (
        <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img className="w-32" src="/logo.svg" alt="logotype" />
                    </div>

                    <nav className="flex gap-4">
                        <NavLink 
                            to="/" 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : "text-white uppercase font-bold"
                            }
                        >Home</NavLink>

                        <NavLink 
                            to="/favorites" 
                            className={({isActive}) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : "text-white uppercase font-bold"
                            }
                        >Favorites</NavLink>
                    </nav>
                </div>

                {isHome && (
                    <form onSubmit={handleSubmit} className="md:w-1/2 2xl:w-1/3 bg-orange-500 my-16 p-10 rounded-md">
                        <div className="space-y-4">
                            <label htmlFor="ingredient" className="block text-white uppercase font-extrabold">
                                Search by Name or Ingridients
                            </label>

                            <input 
                                type="text" 
                                id="ingredient" 
                                name="ingredient"
                                className="p-3 w-full rounded-md focus:outline-none"
                                placeholder="Name or Ingridient. For example: Vodka, Coffee, ..."
                                onChange={handleChange}
                                value={searchFilters.ingredient}
                            />
                        </div>

                        <div className="space-y-4">
                            <label htmlFor="category" className="block text-white uppercase font-extrabold mt-8">
                                Categorie
                            </label>

                            <select 
                                id="category" 
                                name="category"
                                className="p-3 w-full rounded-md focus:outline-none"
                                onChange={handleChange}
                                value={searchFilters.category}
                            >
                                <option value="">-- Select Categorie --</option>

                                {categories.drinks.map((category) => (
                                    <option value={category.strCategory} key={category.strCategory}>
                                        {category.strCategory}
                                    </option>
                                ))}
                            </select>

                            <input 
                                type="submit" 
                                value="Search Recipes"
                                className="font-extrabold uppercase mt-3 w-full bg-orange-900 text-white p-3 rounded-md hover:bg-orange-800 transition-colors"
                            />
                        </div>
                    </form>
                )}
            </div>
        </header>
    )
}
