import { Link } from "@tanstack/react-router";
import { Clock, Users, ChefHat } from "lucide-react";
import type { Recipe } from "@/data/recipes";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      to="/recetas/$id"
      params={{ id: recipe.id }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={recipe.image}
          alt={recipe.title}
          loading="lazy"
          width={1200}
          height={900}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
          {recipe.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-tight text-foreground transition-colors group-hover:text-primary">
          {recipe.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {recipe.description}
        </p>
        <div className="mt-5 flex items-center gap-4 border-t border-border/60 pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {recipe.prepTime + recipe.cookTime} min
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            {recipe.servings}
          </span>
          <span className="flex items-center gap-1.5">
            <ChefHat className="h-3.5 w-3.5" />
            {recipe.difficulty}
          </span>
        </div>
      </div>
    </Link>
  );
}
