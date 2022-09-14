import { createContext, useState, Fragment, useEffect } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteRecipe) => {},
    removeFavorite: (recipeId) => {},
    itemIsFavorite: (recipeId) => {}
})

export const FavoritesContextProvider = (props) => {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteRecipe){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteRecipe)
        })
    }

    function removeFavoriteHandler(recipeId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(recipe => recipe.id !== recipeId)
        })
    }

    function itemIsFavoriteHandler(recipeId) {
       return userFavorites.some(recipe => recipe.id === recipeId)
    }

    useEffect(() => {
        const localData = localStorage.getItem("Favorite Recipes");
        if (localData) {
          setUserFavorites(JSON.parse(localData));
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("Favorite Recipes", JSON.stringify(userFavorites));
      }, [userFavorites]);

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
           <Fragment>{props.children}</Fragment>
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext