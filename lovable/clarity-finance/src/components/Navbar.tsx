import { useState } from "react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Análise", href: "#analise" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Educação", href: "#educacao" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="w-full bg-card border-b border-border sticky top-0 z-50"
      style={{ height: 100 }}
    >
      <div
        className="mx-auto flex items-center justify-between h-full"
        style={{ maxWidth: 1366, padding: "0 3%" }}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground leading-tight">Serasa</span>
            <span className="text-xs text-muted-foreground leading-tight">Experian</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="btn-serasa px-5 py-2 text-sm font-medium border border-primary text-primary bg-transparent hover:bg-accent">
            Login
          </button>
          <button className="btn-serasa px-5 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90">
            Registrar
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border p-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-2">
            <button className="btn-serasa px-4 py-2 text-sm border border-primary text-primary bg-transparent">
              Login
            </button>
            <button className="btn-serasa px-4 py-2 text-sm bg-primary text-primary-foreground">
              Registrar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
