import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSending(true);
        setTimeout(() => {
            setSending(false);
            toast({ title: "Message Sent!", description: "Thank you for reaching out. We'll get back to you soon." });
            form.reset();
        }, 1000);
    };

    return (
        <section id="contact" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">Get in Touch</p>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Contact Us</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">Have questions about the project? We'd love to hear from you.</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-lg mx-auto">
                    <Card className="shadow-card">
                        <CardContent className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2"><User className="w-4 h-4" /> Name</Label>
                                    <Input placeholder="Your name" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email</Label>
                                    <Input type="email" placeholder="your@email.com" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="flex items-center gap-2"><MessageSquare className="w-4 h-4" /> Message</Label>
                                    <Textarea placeholder="Your message..." rows={5} required />
                                </div>
                                <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90" size="lg" disabled={sending}>
                                    <Send className="w-4 h-4 mr-2" />
                                    {sending ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
