import Hero from "./Hero";
import SectionWhy from "./SectionWhy";
import { motion } from 'framer-motion/dist/framer-motion'


const Home = () => {
  return (
    <motion.div
       animate={{ opacity: 1 }}
       initial={{ opacity: 0 }}
       exit={{ opacity: 0}}
       transition={{ duration: 1}}
       >
  <Hero />
  <SectionWhy />
  </motion.div>
  )
};

export default Home;
