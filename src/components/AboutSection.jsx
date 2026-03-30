import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, Droplets, Brain, Sprout } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const problems = [
    { icon: Droplets, text: "Water scarcity in agriculture" },
    { icon: AlertTriangle, text: "Inefficient irrigation practices" },
    { icon: Lightbulb, text: "Lack of intelligent decision systems for farmers" },
];

const solutions = [
    { icon: Brain, text: "Machine Learning for Crop Yield Prediction" },
    { icon: Droplets, text: "Smart Irrigation Advisory System" },
    { icon: Sprout, text: "Improved water efficiency & sustainable farming" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => (
    <section id="about" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">About the Project</p>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Problem & Solution</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Agriculture faces critical challenges in water management. Our AI-powered system addresses these with intelligent, data-driven solutions.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Problem */}
                <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-destructive" />
                        </span>
                        The Problem
                    </h3>
                    <div className="space-y-4">
                        {problems.map((p, i) => (
                            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
                                    <CardContent className="flex items-center gap-4 p-5">
                                        <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                                            <p.icon className="w-5 h-5 text-destructive" />
                                        </div>
                                        <p className="text-foreground font-medium">{p.text}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Solution */}
                <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <Lightbulb className="w-4 h-4 text-primary" />
                        </span>
                        Our Solution
                    </h3>
                    <div className="space-y-4">
                        {solutions.map((s, i) => (
                            <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 border-primary/20">
                                    <CardContent className="flex items-center gap-4 p-5">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <s.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-foreground font-medium">{s.text}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
