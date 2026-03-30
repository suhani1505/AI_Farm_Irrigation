import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Droplets, Gauge } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const PredictionSection = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePredict = (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);
        setTimeout(() => {
            setResult({
                yield: `${(Math.random() * 3 + 2).toFixed(1)} tons/hectare`,
                irrigation: ["Drip Irrigation recommended", "Sprinkler Irrigation optimal", "Flood Irrigation suitable", "Deficit Irrigation advised"][Math.floor(Math.random() * 4)],
                waterUsage: `${(Math.random() * 400 + 200).toFixed(0)} mm/season — ${Math.random() > 0.5 ? "Efficient" : "Moderate"} usage`,
            });
            setLoading(false);
        }, 1500);
    };

    return (
        <section id="prediction" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Interactive Demo</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Crop Yield Prediction</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">Enter agricultural parameters to get AI-powered predictions for your farm.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">
                    {/* Form */}
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
                        <Card className="shadow-card">
                            <CardHeader>
                                <CardTitle className="font-display text-xl">Input Parameters</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handlePredict} className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Soil Type</Label>
                                        <Select defaultValue="loamy">
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                {["Sandy", "Loamy", "Clay", "Silt", "Peaty"].map(s => <SelectItem key={s} value={s.toLowerCase()}>{s}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Crop Type</Label>
                                        <Select defaultValue="rice">
                                            <SelectTrigger><SelectValue /></SelectTrigger>
                                            <SelectContent>
                                                {["Rice", "Wheat", "Corn", "Soybean", "Cotton"].map(c => <SelectItem key={c} value={c.toLowerCase()}>{c}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Temperature (°C)</Label>
                                        <Input type="number" placeholder="28" defaultValue="28" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Humidity (%)</Label>
                                        <Input type="number" placeholder="65" defaultValue="65" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Rainfall (mm)</Label>
                                        <Input type="number" placeholder="180" defaultValue="180" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Soil Moisture (%)</Label>
                                        <Input type="number" placeholder="42" defaultValue="42" />
                                    </div>
                                    <div className="sm:col-span-2 space-y-2">
                                        <Label>Fertilizer Usage (kg/ha)</Label>
                                        <Input type="number" placeholder="120" defaultValue="120" />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity" size="lg" disabled={loading}>
                                            {loading ? "Analyzing..." : "Predict"}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Results */}
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 flex flex-col gap-4">
                        <AnimatePresence mode="wait">
                            {result ? (
                                <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                                    {[
                                        { icon: BarChart3, label: "Predicted Crop Yield", value: result.yield, color: "bg-primary/10 text-primary" },
                                        { icon: Droplets, label: "Irrigation Recommendation", value: result.irrigation, color: "bg-accent/20 text-accent-foreground" },
                                        { icon: Gauge, label: "Water Usage Suggestion", value: result.waterUsage, color: "bg-secondary text-secondary-foreground" },
                                    ].map((r, i) => (
                                        <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
                                            <Card className="shadow-card border-primary/20">
                                                <CardContent className="p-5 flex items-start gap-4">
                                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${r.color}`}>
                                                        <r.icon className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{r.label}</p>
                                                        <p className="text-foreground font-semibold">{r.value}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div key="empty" className="flex items-center justify-center h-full">
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                                            <BarChart3 className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                        <p className="text-muted-foreground">Fill in the parameters and click <strong>Predict</strong> to see results.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PredictionSection;
