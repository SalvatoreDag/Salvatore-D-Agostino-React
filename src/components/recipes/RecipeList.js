import Card from '../Layout/Card'
import classes from './RecipeList.module.css'
import RecipeItem from './RecipeItem';




const RecipeList = (props) => {
  return (
    <Card>
    <ul className={classes.list} id='listItem'>
      {props.recipes?.map((recipe) => (
        <RecipeItem
           key={recipe.id}
           id={recipe.id}
           image={recipe.image}
           title={recipe.title}
        />
      ))}
    </ul>
    </Card>
  );
};

export default RecipeList