import api from "../lib/axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema,  } from "../schemas/recipes-schema"
import { Drink, SearchFilter } from "../types"

export async function getCategories() {
    const URL = "/list.php?c=list"
    const { data } = await api.get(URL)

    const result = CategoriesAPIResponseSchema.safeParse(data)

    //console.log(result)

    if(result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const URL = `/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await api.get(URL, {
        params: filters
    })

    //console.log(data)

    const result = DrinksAPIResponseSchema.safeParse(data) 

    //console.log(result)

    if(result.success) {
        return result.data
    }
}

export async function getRecipeById(id: Drink["idDrink"]) {
    const URL = `/lookup.php?i=${id}`
    const { data } = await api.get(URL)

    //console.log(data) 

    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

    //console.log(result)

    if(result.success) {
        return result.data
    }
}