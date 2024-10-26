import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { RecipesSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites: Recipe[], 
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe["idDrink"]) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        //console.log(recipe)
        if(get().favoriteExists(recipe.idDrink)) {
            set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            })
            createNotificationSlice(set, get, api).showNotification({text: "Removed from favorites", error: false})
        }  else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({text: "Added to favorites", error: false})  
        }
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    }, 
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }, 
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem("favorites")
        if(storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})

// Slice Pattern