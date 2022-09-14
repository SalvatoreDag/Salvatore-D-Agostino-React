import RecipeForm from "./RecipeForm"
 import { motion } from 'framer-motion/dist/framer-motion'



const AllRecipes = () => {

   return(
       <motion.div
       animate={{ opacity: 1 }}
       initial={{ opacity: 0 }}
       exit={{ opacity: 0}}
       transition={{ duration: 1}}
       >
    <RecipeForm />
     </motion.div>
   )
}

export default AllRecipes