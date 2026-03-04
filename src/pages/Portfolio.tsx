import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";

const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
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
        </Suspense>
        <Experience />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </main>
    </motion.div>
  );
};

export default Portfolio;
