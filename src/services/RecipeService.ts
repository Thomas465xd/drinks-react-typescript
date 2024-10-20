import axios from "axios"
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schema"

export async function getCategories() {
    const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios.get(URL)

    const result = CategoriesAPIResponseSchema.safeParse(data)

    //console.log(result)

    if(result.success) {
        return result.data
    }
}