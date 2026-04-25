import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, BookOpen, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Mesa de Olivia" },
      {
        name: "description",
        content:
          "La historia detrás de Mesa de Olivia: pasión por la cocina honesta, recetas familiares y momentos compartidos en la mesa.",
      },
      { property: "og:title", content: "Sobre mí — Mesa de Olivia" },
      {
        property: "og:description",
        content: "La historia detrás de Mesa de Olivia.",
      },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:gap-16 md:px-6 md:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            Hola, encantada
          </p>
          <h1 className="mt-2 font-display text-5xl text-foreground md:text-6xl">
            Soy Olivia, y la cocina es mi lenguaje favorito
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Crecí entre los olores del horno de mi abuela y los domingos de paella en
            familia. La cocina no era una tarea: era el lugar donde pasaban las cosas
            importantes.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Con los años he ido recogiendo recetas, técnicas y trucos de cada viaje, cada
            mercado, cada vecino. Mesa de Olivia es mi cuaderno abierto: aquí guardo todo
            eso para que tú también puedas cocinarlo en casa.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
          <img
            src={aboutImg}
            alt="Olivia en su cocina"
            width={1024}
            height={1024}
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <h2 className="text-center font-display text-4xl text-foreground md:text-5xl">
            Lo que vas a encontrar aquí
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Pillar
              icon={<Heart className="h-6 w-6" />}
              title="Recetas con historia"
              text="Platos heredados de mi familia, adaptados para cocinas modernas pero con todo el sabor de siempre."
            />
            <Pillar
              icon={<Leaf className="h-6 w-6" />}
              title="Ingredientes honestos"
              text="Cocina mediterránea, de temporada y de mercado. Pocos ingredientes, bien tratados."
            />
            <Pillar
              icon={<BookOpen className="h-6 w-6" />}
              title="Paso a paso claros"
              text="Explicaciones detalladas, consejos prácticos y la confianza para que te salga bien a la primera."
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 text-center md:px-6 md:py-24">
        <h2 className="mx-auto max-w-2xl font-display text-4xl text-foreground md:text-5xl">
          Cocinemos juntos
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Empieza por una receta sencilla y, antes de darte cuenta, estarás horneando tu
          propio pan los domingos.
        </p>
        <Link
          to="/recetas"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-card)]"
        >
          Ver todas las recetas <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}

function Pillar({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-card p-8 shadow-[var(--shadow-soft)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-2xl text-foreground">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
