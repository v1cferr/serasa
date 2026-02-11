const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="text-2xl font-['Bebas_Neue'] tracking-wide mb-2">
              VIDA FINANCEIRA
            </div>
            <p className="text-sm text-primary-foreground/60">
              Retome o controle. Sem julgamentos.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 text-sm md:justify-center">
            <a href="#problema" className="hover:text-accent transition-colors">O Problema</a>
            <a href="#solucoes" className="hover:text-accent transition-colors">Soluções</a>
            <a href="#beneficios" className="hover:text-accent transition-colors">Benefícios</a>
          </nav>

          {/* Copyright */}
          <div className="md:text-right">
            <p className="text-sm text-primary-foreground/60">
              © 2025 VidaFinanceira
            </p>
            <p className="text-xs text-primary-foreground/40 mt-1">
              Feito com cuidado para você.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl text-primary-foreground/5 text-center tracking-widest">
            RECOMEÇO
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
