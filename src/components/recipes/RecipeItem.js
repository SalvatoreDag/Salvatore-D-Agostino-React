import classes from "./RecipeItem.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const RecipeItem = (props) => {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

    function toggleFavoritesStatusHandler () {
      if(itemIsFavorite){
        favoritesCtx.removeFavorite(props.id)
      } else{
        favoritesCtx.addFavorite({
          id: props.id,
          image: props.image,
          title: props.title,
          calories: props.calories,
          cousine: props.cousine
        })
      }
    }

  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <p className={classes.title}>{props.title}</p>
      </div>

      <div className={classes.actions}>
        <Link to={"/description/" + props.id}>
          <button>Show more</button>
        </Link>
        <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? 'Remove form favorites' : 'Add to Favorites'}</button>
      </div>
    </li>
      );
};

export default RecipeItem;
