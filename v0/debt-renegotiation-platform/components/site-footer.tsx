import { Shield } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary px-4 py-12 text-secondary-foreground md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-foreground/20">
            <Shield className="h-4 w-4 text-secondary-foreground" />
          </div>
          <span className="text-sm font-bold text-secondary-foreground">
            Serasa Humanizado
          </span>
        </div>
        <p className="text-center text-xs text-secondary-foreground/70">
          {
            "Serasa Humanizado é uma iniciativa educacional. Não somos a Serasa Experian. Consulte sempre os canais oficiais."
          }
        </p>
        <p className="text-xs text-secondary-foreground/50">
          {"© 2026 Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  );
}
