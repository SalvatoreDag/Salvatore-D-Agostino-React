import { Routes, Route, useLocation } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import Home from "./components/home/Home";
import AllRecipes from "./components/recipes/AllRecipes";
import Description from "./components/recipes/Description";
import Favorite from "./components/favorite/Favorite";
import { AnimatePresence } from "framer-motion/dist/framer-motion"

function App() {
  const location = useLocation()
  return (
    <AnimatePresence>
    <MainNavigation />
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home />} />
    <Route path="/all" element={<AllRecipes />} />
    <Route path="/description/:name" element={<Description />} />
    <Route path="/favorites" element={<Favorite />} />
    </Routes>
    </AnimatePresence>
  );
}

export default App;
