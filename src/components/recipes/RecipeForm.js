import classes from "./RecipeForm.module.css";
import { useState, useRef, useEffect } from "react";
import RecipeList from "./RecipeList";

const RecipeForm = () => {
  const [input, setInput] = useState([]);
  const [isError, setIsError] = useState(false);
  const inputTitleRef = useRef();


  const getRecipes = async (name) => {
    console.log(process.env)
    try {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?&query=${name}&apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian&number=6`
      );

      const data = await api.json();
      if (data.results.length && data.results) {
        setInput(data.results);
        localStorage.setItem("search", JSON.stringify(data.results));
        console.log(data);
        setIsError(false);
      } else {
        throw new Error(`Data could not be fetched`);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    const check = localStorage.getItem("search");
    setInput(JSON.parse(check));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    let enteredTitle = inputTitleRef.current.value;
    getRecipes(enteredTitle);
    window.scrollTo({
      top:600,
      behavior: 'smooth'
    })
  };

  return (
    <>
      <section className={classes.search}>
        <div className={classes.container}>
          <h2 className={classes.title}>Looking for something to eat?</h2>
          <blockquote>
            Only when we have become non-violent towards all life will we have
            learned to live well ourselves <br />
            <cite>-Cesar Chavez</cite>
          </blockquote>

          <form className={classes.form} onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter a food..."
              required
              id="title"
              ref={inputTitleRef}
            />

            <button type="submit" className={classes.btn}>
              Search
            </button>
          </form>
        </div>
      </section>
      {isError ? (
        <h1 className={classes.error}>Error! Insert something valid</h1>
      ) : (
        <RecipeList recipes={input} />
      )}
    </>
  );
};

export default RecipeForm;
