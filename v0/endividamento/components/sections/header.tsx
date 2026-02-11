"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { href: "#entenda", label: "Entenda" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#beneficios", label: "Benefícios" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl hidden sm:block">Recomeço</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all">
            Começar
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium w-full">
              Começar agora
            </button>
            <div className="flex justify-center mt-4">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
