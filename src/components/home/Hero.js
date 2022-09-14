import vegetarian from "../images/vegetarian.png";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {

  const scrollHandler = () => {
    window.scrollTo({
      top: 900,
      behavior: "smooth"
    })
  }

  return (
    
      <section className={classes.sectionHero} id="section-hero">
        <div className={classes.hero}>
          <div className={classes.text}>
            <h1 className={classes.heading}>What is the vegetarian diet?</h1>
            <p className={classes.description}>
              A vegetarian diet is one of the three healthy eating patterns
              highlighted in the 2020-2025 Dietary Guidelines for Americans. At
              its core, a vegetarian diet omits meat, poultry and fish. However,
              there are several types of vegetarian diets that have additional
              allowances and/or restrictions.
            </p>
            <Link to="/all">
              <button className={classes.btn}>Start eating well</button>
            </Link>
            {/* <HashLink to="/#why"> */}
              <button className={classes.action} onClick={scrollHandler}>Learn More</button>
            {/* </HashLink> */}
          </div>
          <div className={classes.image}>
            <picture>
              <img
                src={vegetarian}
                className={classes.heroImage}
                alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              />
            </picture>
          </div>
        </div>
      </section>
  );
};

export default Hero;
