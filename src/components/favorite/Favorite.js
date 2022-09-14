import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"; 
import RecipeList from "../recipes/RecipeList";
import classes from './Favorite.module.css'

const Favorite = () => {
     const favoritesCtx = useContext(FavoritesContext);

     let content;
     if(favoritesCtx.totalFavorites === 0){
        content = <h1 className={classes.primary}>No favorite here. Add some!</h1>
     } else {
        content = <RecipeList recipes={favoritesCtx.favorites} />
     }
      
   return (
  <section className={classes.favorite}>
    {content}
  </section>
   )
}

export default Favorite