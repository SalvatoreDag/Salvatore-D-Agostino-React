import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import { useContext, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(`${classes.responsive}`);
  };

  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>GO VEGGIE</h2>
      <nav ref={navRef}>
        <ul className={classes.navList}>
          <li>
        <NavLink onClick={showNavbar} to="/" className={classes.mainNav}>
          Home
        </NavLink>
        </li>
        <li>
        <NavLink onClick={showNavbar} to="/all" className={classes.mainNav}>
          All Recipes
        </NavLink>
        </li>
        <li>

        
        <NavLink onClick={showNavbar} to="/favorites" className={classes.mainNav}>
          Favorite
        </NavLink>
        <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
        </li>
        <button
          onClick={showNavbar}
          className={`${classes.btnMobile} ${classes.closeBtn}`}
        >
          <FontAwesomeIcon
            icon={faX}
            className={classes.iconMobile}
          ></FontAwesomeIcon>
        </button>
        </ul>
      </nav>

      <button onClick={showNavbar} className={classes.btnMobile}>
        <FontAwesomeIcon
          icon={faBars}
          className={classes.iconMobile}
        ></FontAwesomeIcon>
      </button>
    </header>
  );
};

export default MainNavigation;
