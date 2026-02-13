import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="bg-secondary px-4 py-12 text-secondary-foreground md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary-foreground/20">
            <Logo className="h-5 w-5 text-secondary-foreground" />
          </div>
          <span className="text-sm font-bold text-secondary-foreground">
            VITAL
          </span>
        </div>
        <p className="text-center text-xs text-secondary-foreground/70">
          {
            "VITAL é uma iniciativa educacional. Não somos a Serasa Experian. Consulte sempre os canais oficiais."
          }
        </p>
        <p className="text-xs text-secondary-foreground/50">
          {"© 2026 Todos os direitos reservados."}
        </p>
      </div>
    </footer>
  );
}
