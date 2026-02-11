import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "O Problema", href: "#problema" },
        { name: "Soluções", href: "#solucoes" },
        { name: "Benefícios", href: "#beneficios" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out animate-fade-down ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container flex items-center justify-between">
                <div
                    className={`text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
                        }`}
                >
                    Vida Financeira
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`transition-colors duration-300 ${isScrolled
                                ? "text-foreground/80 hover:text-accent"
                                : "text-primary-foreground/80 hover:text-accent"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
                        }`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-background border-b border-border/50 p-6 md:hidden flex flex-col gap-4 animate-fade-up">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
