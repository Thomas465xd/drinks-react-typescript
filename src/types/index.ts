import { z } from "zod"
import { CategoriesAPIResponseSchema } from "../schemas/recipes-schema"

export type Categories  = z.infer<typeof CategoriesAPIResponseSchema>