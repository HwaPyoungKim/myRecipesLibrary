import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Search, X } from "lucide-react";
import { useMemo } from "react";
import {
  recipes,
  categories,
  difficulties,
  type Category,
  type Difficulty,
} from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  category: fallback(z.enum(["Desayuno", "Almuerzo", "Cena", "Postres", "Panadería"]).optional(), undefined),
  difficulty: fallback(z.enum(["Fácil", "Media", "Difícil"]).optional(), undefined),
  time: fallback(z.enum(["all", "quick", "medium", "long"]), "all").default("all"),
});

export const Route = createFileRoute("/recetas")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Recetas — Mesa de Olivia" },
      {
        name: "description",
        content:
          "Explora todas las recetas: busca por nombre, filtra por categoría, dificultad o tiempo de preparación.",
      },
      { property: "og:title", content: "Recetas — Mesa de Olivia" },
      {
        property: "og:description",
        content: "Explora todas las recetas caseras de Mesa de Olivia.",
      },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  const { q, category, difficulty, time } = Route.useSearch();
  const navigate = useNavigate({ from: "/recetas" });

  const update = (patch: Record<string, unknown>) =>
    navigate({ search: (prev: Record<string, unknown>) => ({ ...prev, ...patch }) });

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (q && !r.title.toLowerCase().includes(q.toLowerCase())) return false;
      if (category && r.category !== category) return false;
      if (difficulty && r.difficulty !== difficulty) return false;
      const total = r.prepTime + r.cookTime;
      if (time === "quick" && total > 30) return false;
      if (time === "medium" && (total <= 30 || total > 60)) return false;
      if (time === "long" && total <= 60) return false;
      return true;
    });
  }, [q, category, difficulty, time]);

  const hasFilters = q || category || difficulty || time !== "all";

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          Todas las recetas
        </p>
        <h1 className="mt-2 font-display text-5xl text-foreground md:text-6xl">
          El recetario completo
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {recipes.length} recetas para inspirar tu próxima comida. Busca, filtra y guarda
          tus favoritas.
        </p>
      </header>

      {/* Search + filters */}
      <div className="mt-10 rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)] md:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => update({ q: e.target.value })}
            placeholder="Buscar por nombre…"
            className="h-12 w-full rounded-xl border border-input bg-background pl-11 pr-4 text-sm outline-none transition-colors focus:border-primary"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <FilterGroup label="Categoría">
            <Chip active={!category} onClick={() => update({ category: undefined })}>
              Todas
            </Chip>
            {categories.map((c) => (
              <Chip
                key={c}
                active={category === c}
                onClick={() => update({ category: category === c ? undefined : c })}
              >
                {c}
              </Chip>
            ))}
          </FilterGroup>
        </div>

        <div className="mt-3 flex flex-wrap gap-4">
          <FilterGroup label="Dificultad">
            <Chip active={!difficulty} onClick={() => update({ difficulty: undefined })}>
              Cualquiera
            </Chip>
            {difficulties.map((d) => (
              <Chip
                key={d}
                active={difficulty === d}
                onClick={() => update({ difficulty: difficulty === d ? undefined : d })}
              >
                {d}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Tiempo">
            <Chip active={time === "all"} onClick={() => update({ time: "all" })}>
              Cualquiera
            </Chip>
            <Chip active={time === "quick"} onClick={() => update({ time: "quick" })}>
              ≤ 30 min
            </Chip>
            <Chip active={time === "medium"} onClick={() => update({ time: "medium" })}>
              30–60 min
            </Chip>
            <Chip active={time === "long"} onClick={() => update({ time: "long" })}>
              &gt; 60 min
            </Chip>
          </FilterGroup>

          {hasFilters && (
            <button
              onClick={() =>
                navigate({ search: { q: "", category: undefined, difficulty: undefined, time: "all" } })
              }
              className="ml-auto inline-flex items-center gap-1 self-end text-xs font-medium text-muted-foreground hover:text-primary"
            >
              <X className="h-3.5 w-3.5" /> Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mt-8">
        <p className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "receta" : "recetas"}
        </p>
        {filtered.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border bg-secondary/40 p-12 text-center">
            <p className="font-display text-2xl text-foreground">Sin resultados</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Prueba a quitar algún filtro o buscar otro término.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}:
      </span>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors " +
        (active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:border-primary/50 hover:text-primary")
      }
    >
      {children}
    </button>
  );
}

// Re-export types so the schema literals stay in sync if categories change
export type { Category, Difficulty };
