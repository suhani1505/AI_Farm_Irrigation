import { motion } from "framer-motion";
import { BarChart3, Droplets, CloudSun, FlaskConical, Leaf } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  { icon: BarChart3, title: "Crop Yield Prediction", desc: "AI model predicts expected crop production based on soil and weather parameters." },
  { icon: Droplets, title: "Smart Irrigation Advisory", desc: "Suggests optimal irrigation schedules based on soil moisture and weather conditions." },
  { icon: CloudSun, title: "Weather Data Analysis", desc: "Uses temperature, humidity, and rainfall data for intelligent farming decisions." },
  { icon: FlaskConical, title: "Soil Parameter Analysis", desc: "Analyzes soil nutrients, pH levels, and moisture content for optimal crop growth." },
  { icon: Leaf, title: "Sustainable Farming Support", desc: "Helps farmers reduce water waste and increase productivity through data-driven insights." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Capabilities</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Key Features</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Our system combines multiple AI-driven modules to provide comprehensive farming advisory.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <Card className="h-full shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <f.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
