"use client";

import { Zap, Heart } from "lucide-react";

const footerLinks = {
  recursos: [
    { label: "Guia de Negociação", href: "#" },
    { label: "Calculadora de Dívidas", href: "#" },
    { label: "Planilha Gratuita", href: "#" },
    { label: "Blog", href: "#" },
  ],
  apoio: [
    { label: "CVV - 188", href: "tel:188" },
    { label: "Procon", href: "#" },
    { label: "Serasa", href: "#" },
    { label: "SPC Brasil", href: "#" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Recomeço</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Informações educativas sobre finanças pessoais. 
              Este site não substitui orientação profissional 
              financeira ou psicológica.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-destructive" /> no Brasil
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Apoio</h4>
            <ul className="space-y-3">
              {footerLinks.apoio.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-row max-md:flex-col justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            2026 Recomeço. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Se precisar de ajuda emocional, ligue{" "}
            <a href="tel:188" className="text-primary hover:underline font-medium">
              188 (CVV)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
