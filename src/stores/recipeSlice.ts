// Importamos StateCreator de Zustand para crear la estructura del store
import { StateCreator } from "zustand"
// Importamos funciones de servicio para obtener categorías, recetas y detalles de recetas específicas
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
// Importamos tipos necesarios para tipar el store y sus funciones
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types"

// Definimos el tipo RecipesSliceType que incluye el estado y las funciones del store
export type RecipesSliceType = {
    categories: Categories          // Lista de categorías de cócteles
    drinks: Drinks                  // Lista de cócteles según la búsqueda
    selectedRecipe: Recipe          // Receta seleccionada para mostrar detalles
    modal: boolean                  // Estado para abrir/cerrar modal de detalles
    fetchCategories: () => Promise<void>   // Función para obtener categorías
    searchRecipes: (SearchFilter: SearchFilter) => Promise<void>   // Función para buscar recetas
    selectRecipe: (id: Drink["idDrink"]) => Promise<void>          // Función para seleccionar una receta por ID
    closeModal: () => void          // Función para cerrar el modal de detalles
}

// Creamos el slice del store de recetas usando el patrón Slice Pattern
export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    // Estado inicial de categorías (vacío)
    categories: {
        drinks: []
    }, 
    // Estado inicial de bebidas/recetas (vacío)
    drinks: {
        drinks: []
    },
    // Estado inicial de la receta seleccionada (como Recipe vacío)
    selectedRecipe: {} as Recipe, 
    // Estado inicial del modal (cerrado)
    modal: false,

    // Función para obtener categorías desde la API y actualizar el estado
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }, 

    // Función para buscar recetas usando filtros de búsqueda y actualizar el estado
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        // console.log(drinks)   // Descomentar para ver los resultados de búsqueda en consola
        set({
            drinks
        })
    }, 

    // Función para seleccionar una receta específica por ID y abrir el modal
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        // console.log(selectRecipe)  // Descomentar para ver la receta seleccionada en consola
        set({
            selectedRecipe, 
            modal: true
        })
    },

    // Función para cerrar el modal y reiniciar la receta seleccionada
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})
