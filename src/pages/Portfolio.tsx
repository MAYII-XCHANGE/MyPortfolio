import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-background"
    >
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
    </motion.div>
  );
};

export default Portfolio;
