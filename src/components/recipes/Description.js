import classes from "./Description.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faKitMedical,
  faClock,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../Layout/Card";

const Description = () => {
  const [details, setDetails] = useState({});
  let params = useParams();
 

  const fetchData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    fetchData();
  }, [params.name]);

  return (
    <Card>
      <section className={classes.info}>
        <h2 className={classes.secondary}>{details.title}</h2>
        <div className={classes.container}>
          <div className={classes.imgBox}>
            <img
              src={details.image}
              className={classes.image}
              alt={details.title}
            ></img>
          </div>
          <div>
          <div className={classes.details}>
          <ul className={classes.detailsList}>
            <li className={classes.list}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                className={classes.icons}
              ></FontAwesomeIcon>
              {details.aggregateLikes}
            </li>
            <li className={classes.list}>
              <FontAwesomeIcon
                icon={faKitMedical}
                className={classes.icons}
              ></FontAwesomeIcon>
              {details.healthScore}
            </li>
            <li className={classes.list}>
              <FontAwesomeIcon
                icon={faClock}
                className={classes.icons}
              ></FontAwesomeIcon>
              {details.readyInMinutes}
            </li>
            <li className={classes.list}>
              <FontAwesomeIcon
                icon={faPerson}
                className={classes.icons}
              ></FontAwesomeIcon>
              {details.servings}
            </li>
          </ul>
        </div>
            <ul className={classes.ingredientList}>
              {details.extendedIngredients?.map((ingredient) => (
                <li className={classes.ingredients} key={ingredient.id}>
                  {ingredient.original}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.text}>
        <p
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: details.instructions }}
        ></p>
        <Link to="/all">
          <button className={classes.btn}>Go back</button>
        </Link>
        </div>
      </section>
    </Card>
  );
};

export default Description;
