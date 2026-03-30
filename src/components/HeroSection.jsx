import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImg from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Smart farming aerial view" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary-foreground/70 font-body text-sm uppercase tracking-[0.25em] mb-4">
            College Mini Project 2025–26
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 max-w-5xl mx-auto">
            AI Powered Smart Irrigation & Farming Advisory
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
            Harnessing Artificial Intelligence to empower farmers with intelligent crop yield predictions, 
            smart irrigation scheduling, and data-driven water management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={scrollToFeatures} className="text-base px-8 py-6">
              Get Started
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-base px-8 py-6">
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-primary-foreground/50 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
