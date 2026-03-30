import { motion } from "framer-motion";
import { Database, FileSpreadsheet, Layers, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const stats = [
  { icon: Database, label: "Total Records", value: "10,000" },
  { icon: Layers, label: "Total Features", value: "46" },
  { icon: FileSpreadsheet, label: "Data Sources", value: "Multiple" },
  { icon: BarChart3, label: "Model Accuracy", value: "94.2%" },
];

const categories = ["Soil parameters (pH, nutrients, moisture)", "Weather conditions (temperature, humidity, rainfall)", "Crop characteristics (type, growth stage, variety)", "Irrigation history & water usage patterns"];

const DatasetSection = () => (
  <section id="dataset" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Training Data</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Dataset Overview</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Agricultural Yield Prediction Dataset used for training and evaluating our ML models.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="shadow-card text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-2xl font-display font-bold text-foreground">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="shadow-card">
            <CardContent className="p-8">
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Data Categories</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {categories.map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/60">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary shrink-0" />
                    <p className="text-foreground text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  </section>
);

export default DatasetSection;
