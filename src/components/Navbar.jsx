import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "./ui/button";

const navItems = ["Home", "About", "Features", "Prediction", "Dataset", "Contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/95 backdrop-blur-md shadow-card" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className={`font-display text-lg font-bold ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
                        AgriSmart AI
                    </span>
                </button>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"}`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
                    {isOpen ? <X className={scrolled ? "text-foreground" : "text-primary-foreground"} /> : <Menu className={scrolled ? "text-foreground" : "text-primary-foreground"} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
                    {navItems.map((item) => (
                        <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left px-6 py-3 text-foreground hover:bg-muted transition-colors">
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
