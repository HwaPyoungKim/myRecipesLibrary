import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, UtensilsCrossed } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UtensilsCrossed className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold">Mesa de Olivia</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Recetas caseras, honestas y llenas de sabor. Cocinamos despacio, comemos
            acompañados.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Navegar
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Inicio</Link></li>
            <li><Link to="/recetas" className="hover:text-primary">Recetas</Link></li>
            <li><Link to="/sobre-mi" className="hover:text-primary">Sobre mí</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Sígueme
          </h4>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} Mesa de Olivia · Hecho con cariño y mucha mantequilla
        </div>
      </div>
    </footer>
  );
}
