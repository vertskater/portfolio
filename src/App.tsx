import { motion } from "framer-motion";
import Header from "./components/Header.tsx";
import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Seperator from "./components/Seperator.tsx";

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Header />
      <Seperator size={50} />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <About />
        </motion.div>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
