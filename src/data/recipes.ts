import risotto from "@/assets/recipe-risotto.jpg";
import tortilla from "@/assets/recipe-tortilla.jpg";
import lava from "@/assets/recipe-lava.jpg";
import toast from "@/assets/recipe-toast.jpg";
import bread from "@/assets/recipe-bread.jpg";
import bowl from "@/assets/recipe-bowl.jpg";
import pancakes from "@/assets/recipe-pancakes.jpg";
import chicken from "@/assets/recipe-chicken.jpg";

export type Difficulty = "Fácil" | "Media" | "Difícil";
export type Category = "Desayuno" | "Almuerzo" | "Cena" | "Postres" | "Panadería";

export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: Category;
  prepTime: number; // minutes
  cookTime: number;
  servings: number;
  difficulty: Difficulty;
  description: string;
  ingredients: string[];
  steps: string[];
  tips: string;
  featured: boolean;
}

export const categories: Category[] = [
  "Desayuno",
  "Almuerzo",
  "Cena",
  "Postres",
  "Panadería",
];

export const difficulties: Difficulty[] = ["Fácil", "Media", "Difícil"];

export const recipes: Recipe[] = [
  {
    id: "risotto-champinones",
    title: "Risotto cremoso de champiñones",
    image: risotto,
    category: "Cena",
    prepTime: 10,
    cookTime: 25,
    servings: 4,
    difficulty: "Media",
    description:
      "Un risotto reconfortante, cremoso y profundamente sabroso, con champiñones salteados, vino blanco y un toque generoso de parmesano.",
    ingredients: [
      "320 g de arroz arborio",
      "400 g de champiñones variados",
      "1 cebolla mediana picada fina",
      "2 dientes de ajo",
      "150 ml de vino blanco seco",
      "1 L de caldo de verduras caliente",
      "80 g de parmesano rallado",
      "40 g de mantequilla",
      "Aceite de oliva, sal y pimienta",
      "Tomillo fresco para decorar",
    ],
    steps: [
      "Saltea los champiñones en una sartén caliente con un poco de aceite hasta que estén dorados. Reserva.",
      "En la misma cazuela, sofríe la cebolla y el ajo a fuego medio hasta que estén translúcidos.",
      "Añade el arroz y nácara durante 2 minutos removiendo constantemente.",
      "Vierte el vino blanco y deja que se evapore por completo.",
      "Incorpora el caldo cucharón a cucharón, removiendo, esperando que se absorba antes de añadir más.",
      "A los 18 minutos, agrega los champiñones reservados y rectifica de sal.",
      "Retira del fuego, añade la mantequilla y el parmesano. Mezcla enérgicamente y deja reposar 2 minutos.",
    ],
    tips: "El secreto de un buen risotto está en la mantecatura final: fuera del fuego, removiendo con energía la mantequilla fría y el queso para conseguir esa textura cremosa inconfundible.",
    featured: true,
  },
  {
    id: "tortilla-patatas",
    title: "Tortilla de patatas tradicional",
    image: tortilla,
    category: "Almuerzo",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Media",
    description:
      "La receta clásica española: jugosa por dentro, dorada por fuera. Pocos ingredientes, pero llenos de sabor y nostalgia.",
    ingredients: [
      "6 huevos camperos",
      "4 patatas medianas",
      "1 cebolla grande (opcional)",
      "300 ml de aceite de oliva virgen",
      "Sal al gusto",
    ],
    steps: [
      "Pela y corta las patatas en láminas finas. Sala generosamente.",
      "Calienta el aceite a fuego medio y confita las patatas (y la cebolla si la usas) durante 15 minutos.",
      "Escurre bien y mezcla con los huevos batidos. Deja reposar 5 minutos.",
      "Calienta una sartén antiadherente con una cucharada de aceite.",
      "Vierte la mezcla y cuaja a fuego medio-bajo durante 3-4 minutos.",
      "Dale la vuelta con ayuda de un plato y cuaja el otro lado 2 minutos más.",
    ],
    tips: "Para una tortilla jugosa al estilo Betanzos, retírala cuando aún esté ligeramente líquida en el centro. El calor residual terminará la cocción perfectamente.",
    featured: true,
  },
  {
    id: "coulant-chocolate",
    title: "Coulant de chocolate fundente",
    image: lava,
    category: "Postres",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: "Media",
    description:
      "Un bizcochito individual con corazón de chocolate líquido. La sorpresa al cortarlo es lo mejor de cada cena.",
    ingredients: [
      "150 g de chocolate negro 70%",
      "100 g de mantequilla",
      "3 huevos",
      "80 g de azúcar",
      "40 g de harina",
      "Una pizca de sal",
      "Frambuesas y azúcar glas para servir",
    ],
    steps: [
      "Precalienta el horno a 200°C y engrasa cuatro moldes individuales.",
      "Funde el chocolate con la mantequilla al baño maría y deja templar.",
      "Bate los huevos con el azúcar hasta que blanqueen.",
      "Incorpora el chocolate fundido y luego la harina tamizada con la sal.",
      "Reparte la mezcla en los moldes y hornea exactamente 10-12 minutos.",
      "Desmolda con cuidado y sirve de inmediato con frambuesas frescas.",
    ],
    tips: "El tiempo de horno es crítico. Si te pasas un minuto, perderás el corazón líquido. Hazlo siempre la primera vez con un coulant de prueba.",
    featured: true,
  },
  {
    id: "tostada-aguacate",
    title: "Tostada de aguacate y huevo poché",
    image: toast,
    category: "Desayuno",
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    difficulty: "Fácil",
    description:
      "Un desayuno saludable, rápido y elegante. Pan crujiente, aguacate cremoso y un huevo poché perfecto.",
    ingredients: [
      "1 rebanada de pan de masa madre",
      "1/2 aguacate maduro",
      "1 huevo fresco",
      "1 cucharada de vinagre blanco",
      "Microhojas verdes",
      "Copos de chile, sal Maldon, aceite de oliva",
    ],
    steps: [
      "Tuesta el pan hasta que esté dorado y crujiente.",
      "Aplasta el aguacate con un tenedor, añade sal y un chorrito de aceite.",
      "Calienta agua con vinagre. Crea un remolino y añade el huevo. Cocina 3 minutos.",
      "Extiende el aguacate sobre la tostada, coloca el huevo encima.",
      "Termina con microhojas, copos de chile y sal Maldon.",
    ],
    tips: "Para el huevo poché perfecto, usa huevos muy frescos y cuela el huevo en un colador fino antes de echarlo al agua para eliminar la clara más líquida.",
    featured: false,
  },
  {
    id: "pan-masa-madre",
    title: "Pan rústico de masa madre",
    image: bread,
    category: "Panadería",
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    difficulty: "Difícil",
    description:
      "Un pan artesano de corteza dorada y miga aireada. Requiere paciencia, pero el aroma al hornearlo lo recompensa todo.",
    ingredients: [
      "500 g de harina de fuerza",
      "350 ml de agua tibia",
      "100 g de masa madre activa",
      "10 g de sal",
      "Harina extra para enharinar",
    ],
    steps: [
      "Mezcla la harina con el agua y deja autolisis 30 minutos.",
      "Añade la masa madre y la sal. Amasa hasta integrar.",
      "Realiza pliegues cada 30 minutos durante 3 horas.",
      "Forma una bola y deja levar en banneton en la nevera toda la noche.",
      "Precalienta el horno con una cocotte a 250°C durante 30 minutos.",
      "Voltea el pan, marca con un corte y hornea tapado 25 minutos.",
      "Destapa y hornea 20 minutos más hasta dorar la corteza.",
    ],
    tips: "Una masa madre bien activa es fundamental. Debe doblar su volumen entre 4-6 horas tras el refresco. Si tarda más, refresca dos veces seguidas antes de usarla.",
    featured: true,
  },
  {
    id: "bowl-mediterraneo",
    title: "Bowl mediterráneo con quinoa",
    image: bowl,
    category: "Almuerzo",
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    difficulty: "Fácil",
    description:
      "Un bowl colorido, lleno de sabor y nutrición. Perfecto para llevar al trabajo o disfrutar en casa.",
    ingredients: [
      "150 g de quinoa",
      "1 calabacín en cubos",
      "1 pimiento rojo",
      "100 g de garbanzos cocidos",
      "80 g de queso feta",
      "Aceitunas negras",
      "2 cucharadas de hummus",
      "Aceite de oliva, limón, sal y orégano",
    ],
    steps: [
      "Cuece la quinoa según las indicaciones del paquete.",
      "Asa las verduras en el horno a 200°C durante 20 minutos con aceite y sal.",
      "Monta el bowl con la quinoa como base.",
      "Distribuye las verduras, garbanzos, feta desmenuzado y aceitunas.",
      "Añade una cucharada generosa de hummus en el centro.",
      "Aliña con aceite, zumo de limón y orégano.",
    ],
    tips: "Prepara los ingredientes por separado el domingo y monta los bowls cada día. Aguantan perfectamente toda la semana en la nevera.",
    featured: false,
  },
  {
    id: "tortitas-americanas",
    title: "Tortitas americanas esponjosas",
    image: pancakes,
    category: "Desayuno",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: "Fácil",
    description:
      "Tortitas altas y esponjosas como las de las cafeterías. Con sirope de arce y frutos rojos, son el desayuno perfecto del fin de semana.",
    ingredients: [
      "200 g de harina",
      "2 cucharaditas de levadura química",
      "2 cucharadas de azúcar",
      "Una pizca de sal",
      "250 ml de leche",
      "1 huevo",
      "30 g de mantequilla fundida",
      "Sirope de arce y frutos rojos",
    ],
    steps: [
      "Mezcla los ingredientes secos en un bol.",
      "Bate aparte la leche, el huevo y la mantequilla.",
      "Combina ambas mezclas sin batir en exceso (que queden grumitos).",
      "Calienta una sartén antiadherente a fuego medio-bajo.",
      "Vierte cucharones de masa y cocina hasta ver burbujas en la superficie.",
      "Da la vuelta y cocina 1 minuto más.",
      "Apila y sirve con mantequilla, sirope y frutos rojos.",
    ],
    tips: "No batas la masa demasiado: los grumos son tus amigos. Un exceso de batido desarrolla el gluten y las tortitas quedan duras.",
    featured: false,
  },
  {
    id: "pollo-limon-romero",
    title: "Pollo asado al limón y romero",
    image: chicken,
    category: "Cena",
    prepTime: 15,
    cookTime: 60,
    servings: 4,
    difficulty: "Fácil",
    description:
      "Un clásico imbatible. Pollo dorado y jugoso con verduras caramelizadas en una sola fuente. Comida de domingo de la mejor.",
    ingredients: [
      "1 pollo entero (1.5 kg)",
      "2 limones",
      "4 ramas de romero fresco",
      "6 dientes de ajo",
      "500 g de patatas baby",
      "2 zanahorias en bastones",
      "100 ml de vino blanco",
      "Aceite de oliva, sal, pimienta",
    ],
    steps: [
      "Precalienta el horno a 200°C.",
      "Salpimenta el pollo por dentro y por fuera. Rellénalo con un limón cortado y dos ramas de romero.",
      "Distribuye las patatas, zanahorias y ajos en una fuente.",
      "Coloca el pollo encima, riega con aceite y zumo del otro limón.",
      "Añade el vino blanco y el resto del romero.",
      "Hornea 1 hora regando con sus jugos cada 20 minutos.",
      "Deja reposar 10 minutos antes de trinchar.",
    ],
    tips: "Para una piel extra crujiente, seca muy bien el pollo con papel absorbente antes de salpimentar y déjalo destapado en la nevera durante una hora.",
    featured: false,
  },
];

export const getRecipeById = (id: string) => recipes.find((r) => r.id === id);

export const getRelatedRecipes = (id: string, category: Category, limit = 3) =>
  recipes.filter((r) => r.id !== id && r.category === category).slice(0, limit);
