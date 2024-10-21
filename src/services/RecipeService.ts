import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema,  } from "../schemas/recipes-schema"
import { Drink, SearchFilter } from "../types"

export async function getCategories() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios.get(URL)

    const result = CategoriesAPIResponseSchema.safeParse(data)

    //console.log(result)

    if(result.success) {
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter) {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
    const { data } = await axios.get(URL, {
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
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const { data } = await axios.get(URL)

    //console.log(data) 

    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])

    //console.log(result)

    if(result.success) {
        return result.data
    }
}