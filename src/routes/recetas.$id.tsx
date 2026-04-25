import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Users, ChefHat, Flame, Lightbulb } from "lucide-react";
import { getRecipeById, getRelatedRecipes } from "@/data/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export const Route = createFileRoute("/recetas/$id")({
  loader: ({ params }) => {
    const recipe = getRecipeById(params.id);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    const r = loaderData?.recipe;
    if (!r) return { meta: [{ title: "Receta — Mesa de Olivia" }] };
    return {
      meta: [
        { title: `${r.title} — Mesa de Olivia` },
        { name: "description", content: r.description },
        { property: "og:title", content: r.title },
        { property: "og:description", content: r.description },
        { property: "og:image", content: r.image },
        { name: "twitter:image", content: r.image },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="font-display text-4xl">Receta no encontrada</h1>
      <Link to="/recetas" className="mt-6 inline-block text-primary hover:underline">
        Ver todas las recetas
      </Link>
    </div>
  ),
  component: RecipeDetail,
});

function RecipeDetail() {
  const { recipe } = Route.useLoaderData();
  const related = getRelatedRecipes(recipe.id, recipe.category);

  return (
    <article>
      {/* Hero */}
      <div className="container mx-auto px-4 pt-8 md:px-6">
        <Link
          to="/recetas"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a recetas
        </Link>
      </div>

      <header className="container mx-auto grid gap-8 px-4 py-8 md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-12">
        <div>
          <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            {recipe.category}
          </span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-6xl">
            {recipe.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {recipe.description}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={<Clock className="h-4 w-4" />} label="Preparación" value={`${recipe.prepTime} min`} />
            <Stat icon={<Flame className="h-4 w-4" />} label="Cocción" value={`${recipe.cookTime} min`} />
            <Stat icon={<Users className="h-4 w-4" />} label="Raciones" value={String(recipe.servings)} />
            <Stat icon={<ChefHat className="h-4 w-4" />} label="Dificultad" value={recipe.difficulty} />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
          <img
            src={recipe.image}
            alt={recipe.title}
            width={1200}
            height={1200}
            className="relative aspect-square w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </header>

      {/* Body */}
      <div className="container mx-auto grid gap-12 px-4 py-12 md:grid-cols-3 md:px-6 md:py-16">
        <aside className="md:col-span-1">
          <div className="rounded-2xl bg-secondary/50 p-6 md:sticky md:top-24">
            <h2 className="font-display text-2xl text-foreground">Ingredientes</h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Para {recipe.servings} {recipe.servings === 1 ? "ración" : "raciones"}
            </p>
            <ul className="mt-5 space-y-3">
              {recipe.ingredients.map((ing: string, i: number) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {ing}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="md:col-span-2">
          <h2 className="font-display text-3xl text-foreground">Preparación</h2>
          <ol className="mt-6 space-y-6">
            {recipe.steps.map((step: string, i: number) => (
              <li key={i} className="flex gap-5">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                  {i + 1}
                </span>
                <p className="pt-1.5 leading-relaxed text-foreground">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-accent/30 p-6">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <h3 className="font-display text-xl">Mi consejo</h3>
            </div>
            <p className="mt-3 leading-relaxed text-foreground">{recipe.tips}</p>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/40">
          <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              También te puede gustar
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <RecipeCard key={r.id} recipe={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className="mt-1 font-display text-lg text-foreground">{value}</p>
    </div>
  );
}
