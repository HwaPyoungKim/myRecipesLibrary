import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { recipes, categories } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mesa de Olivia — Recetas caseras con alma" },
      {
        name: "description",
        content:
          "Recetas caseras, honestas y llenas de sabor. Descubre platos para cada momento del día.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = recipes.filter((r) => r.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-6 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Cocina con alma
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              Recetas caseras <em className="text-primary">con sabor</em> a hogar
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Bienvenido a mi cocina. Aquí comparto los platos que cocino para mi familia:
              recetas honestas, ingredientes simples y mucho cariño en cada paso.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/recetas"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-card)]"
              >
                Explorar recetas <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/sobre-mi"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Conóceme
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
            <img
              src={heroImg}
              alt="Mesa con pasta italiana, tomates y hierbas frescas"
              width={1600}
              height={1200}
              className="relative aspect-[4/3] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
            />
          </div>
        </div>
      </section>

      {/* Featured recipes */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Lo más querido
            </p>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
              Recetas destacadas
            </h2>
          </div>
          <Link
            to="/recetas"
            className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:inline-flex"
          >
            Ver todas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Por categorías
            </p>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
              Encuentra tu próximo plato
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Desde desayunos rápidos hasta cenas reconfortantes, hay algo para cada momento.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {categories.map((cat) => {
              const sample = recipes.find((r) => r.category === cat);
              return (
                <Link
                  key={cat}
                  to="/recetas"
                  search={{ category: cat }}
                  className="group relative overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
                >
                  <div className="aspect-square overflow-hidden">
                    {sample && (
                      <img
                        src={sample.image}
                        alt={cat}
                        loading="lazy"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-display text-lg text-background">
                    {cat}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-5 md:items-center md:gap-16">
          <div className="md:col-span-2">
            <img
              src={aboutImg}
              alt="Olivia en su cocina"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
            />
          </div>
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">
              Sobre mí
            </p>
            <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
              Hola, soy Olivia
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Cocinera autodidacta, amante del pan recién hecho y de las sobremesas largas.
              Desde mi cocina en el norte de España, comparto las recetas que aprendí de mi
              abuela, las que descubrí viajando y las que invento un domingo cualquiera.
            </p>
            <Link
              to="/sobre-mi"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Mi historia <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
