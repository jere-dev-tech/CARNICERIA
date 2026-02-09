import productAsado from "@/assets/product-asado.png";
import productVacio from "@/assets/product-vacio.png";
import productBife from "@/assets/product-bife.png";
import productLomo from "@/assets/product-lomo.png";
import productEntrana from "@/assets/product-entrana.png";
import productBondiola from "@/assets/product-bondiola.png";
import productChorizo from "@/assets/product-chorizo.png";
import productBocado from "@/assets/product-bocado.png";

export type Product = {
  id: string;
  nombre: string;
  precio: string;
  imagen: string;
  categoria: string;
  fechaAlta?: string;
  vendidos?: number;
};

export type CatalogCategory = {
  label: string;
  slug: string;
  href: string;
};

export const carniceriaCategories: CatalogCategory[] = [
  {
    label: "Carne Vacuna",
    slug: "vacuna",
    href: "/carniceria/vacuna",
  },
  {
    label: "Carne de Cerdo",
    slug: "cerdo",
    href: "/carniceria/cerdo",
  },
  {
    label: "Pollo",
    slug: "pollo",
    href: "/carniceria/pollo",
  },
  {
    label: "Menudencias",
    slug: "menudencias",
    href: "/carniceria/menudencias",
  },
];

export const elaboradosCategories: CatalogCategory[] = [
  {
    label: "Elaboracion propia",
    slug: "propia",
    href: "/elaborados/propia",
  },
  {
    label: "Embutidos",
    slug: "embutidos",
    href: "/elaborados/embutidos",
  },
  {
    label: "Congelados",
    slug: "congelados",
    href: "/elaborados/congelados",
  },
];

export const carniceriaProducts: Product[] = [
  {
    id: "1",
    nombre: "Asado",
    precio: "$12.900",
    imagen: productAsado,
    categoria: "Carne Vacuna",
  },
  {
    id: "2",
    nombre: "Vacio",
    precio: "$13.800",
    imagen: productVacio,
    categoria: "Carne Vacuna",
  },
  {
    id: "3",
    nombre: "Bife Ancho",
    precio: "$15.200",
    imagen: productBife,
    categoria: "Carne Vacuna",
  },
  {
    id: "4",
    nombre: "Lomo",
    precio: "$18.900",
    imagen: productLomo,
    categoria: "Carne Vacuna",
  },
  {
    id: "5",
    nombre: "Entrana",
    precio: "$16.200",
    imagen: productEntrana,
    categoria: "Carne Vacuna",
  },
  {
    id: "6",
    nombre: "Roast Beef",
    precio: "$12.200",
    imagen: productAsado,
    categoria: "Carne Vacuna",
  },
  {
    id: "7",
    nombre: "Nalga",
    precio: "$14.600",
    imagen: productVacio,
    categoria: "Carne Vacuna",
  },
  {
    id: "8",
    nombre: "Bola de Lomo",
    precio: "$14.900",
    imagen: productBife,
    categoria: "Carne Vacuna",
  },
  {
    id: "9",
    nombre: "Pechito de Cerdo",
    precio: "$9.200",
    imagen: productBondiola,
    categoria: "Carne de Cerdo",
  },
  {
    id: "10",
    nombre: "Bondiola",
    precio: "$10.800",
    imagen: productBondiola,
    categoria: "Carne de Cerdo",
  },
  {
    id: "11",
    nombre: "Costillas de Cerdo",
    precio: "$9.900",
    imagen: productChorizo,
    categoria: "Carne de Cerdo",
  },
  {
    id: "12",
    nombre: "Matambre de Cerdo",
    precio: "$11.200",
    imagen: productChorizo,
    categoria: "Carne de Cerdo",
  },
  {
    id: "13",
    nombre: "Carré de Cerdo",
    precio: "$12.100",
    imagen: productBondiola,
    categoria: "Carne de Cerdo",
  },
  {
    id: "14",
    nombre: "Pernil de Cerdo",
    precio: "$13.200",
    imagen: productBondiola,
    categoria: "Carne de Cerdo",
  },
  {
    id: "15",
    nombre: "Pata Muslo",
    precio: "$7.200",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "16",
    nombre: "Pechuga",
    precio: "$8.600",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "17",
    nombre: "Pollo Entero",
    precio: "$9.400",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "18",
    nombre: "Alitas",
    precio: "$6.900",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "19",
    nombre: "Supremas",
    precio: "$9.200",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "20",
    nombre: "Muslos",
    precio: "$7.400",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "21",
    nombre: "Higado",
    precio: "$5.300",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "22",
    nombre: "Rinon",
    precio: "$5.600",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "23",
    nombre: "Corazon",
    precio: "$5.400",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "24",
    nombre: "Mondongo",
    precio: "$6.200",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "25",
    nombre: "Lengua",
    precio: "$7.300",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "26",
    nombre: "Chinchulines",
    precio: "$6.800",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "27",
    nombre: "Mollejas",
    precio: "$8.900",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "28",
    nombre: "Sesos",
    precio: "$6.100",
    imagen: productBife,
    categoria: "Menudencias",
  },
  {
    id: "29",
    nombre: "Cuadrada",
    precio: "$13.900",
    imagen: productBondiola,
    categoria: "Carne Vacuna",
  },
  {
    id: "30",
    nombre: "Matambre Vacuno",
    precio: "$15.600",
    imagen: productAsado,
    categoria: "Carne Vacuna",
  },
  {
    id: "31",
    nombre: "Pechuga Deshuesada",
    precio: "$9.100",
    imagen: productBocado,
    categoria: "Pollo",
  },
  {
    id: "32",
    nombre: "Corazon de Pollo",
    precio: "$6.700",
    imagen: productBocado,
    categoria: "Menudencias",
  },
];

export const elaboradosProducts: Product[] = [
  {
    id: "1",
    nombre: "Milanesas Preparadas",
    precio: "$12.400",
    imagen: productLomo,
    categoria: "Elaboracion propia",
  },
  {
    id: "4",
    nombre: "Hamburguesas Caseras",
    precio: "$11.900",
    imagen: productBife,
    categoria: "Elaboracion propia",
  },
  {
    id: "5",
    nombre: "Albondigas Caseras",
    precio: "$11.200",
    imagen: productBocado,
    categoria: "Elaboracion propia",
  },
  {
    id: "6",
    nombre: "Arrollado de Carne",
    precio: "$13.500",
    imagen: productLomo,
    categoria: "Elaboracion propia",
  },
  {
    id: "7",
    nombre: "Relleno Especial",
    precio: "$12.800",
    imagen: productEntrana,
    categoria: "Elaboracion propia",
  },
  {
    id: "8",
    nombre: "Milanesas de Pollo",
    precio: "$12.200",
    imagen: productEntrana,
    categoria: "Elaboracion propia",
  },
  {
    id: "9",
    nombre: "Chorizo Criollo",
    precio: "$9.400",
    imagen: productChorizo,
    categoria: "Embutidos",
  },
  {
    id: "10",
    nombre: "Chorizo Parrillero",
    precio: "$9.800",
    imagen: productChorizo,
    categoria: "Embutidos",
  },
  {
    id: "11",
    nombre: "Morcilla",
    precio: "$8.600",
    imagen: productBondiola,
    categoria: "Embutidos",
  },
  {
    id: "12",
    nombre: "Salchicha Parrillera",
    precio: "$8.200",
    imagen: productVacio,
    categoria: "Embutidos",
  },
  {
    id: "13",
    nombre: "Longaniza",
    precio: "$9.100",
    imagen: productChorizo,
    categoria: "Embutidos",
  },
  {
    id: "14",
    nombre: "Salchichon",
    precio: "$8.900",
    imagen: productBondiola,
    categoria: "Embutidos",
  },
  {
    id: "15",
    nombre: "Nuggets",
    precio: "$7.600",
    imagen: productBocado,
    categoria: "Congelados",
  },
  {
    id: "16",
    nombre: "Medallones de Pollo",
    precio: "$8.200",
    imagen: productBocado,
    categoria: "Congelados",
  },
  {
    id: "17",
    nombre: "Papas Fritas",
    precio: "$7.800",
    imagen: productAsado,
    categoria: "Congelados",
  },
  {
    id: "18",
    nombre: "Baston de Pollo",
    precio: "$8.400",
    imagen: productBocado,
    categoria: "Congelados",
  },
  {
    id: "19",
    nombre: "Medallones de Carne",
    precio: "$9.200",
    imagen: productBife,
    categoria: "Congelados",
  },
  {
    id: "20",
    nombre: "Vegetales Salteados",
    precio: "$7.200",
    imagen: productAsado,
    categoria: "Congelados",
  },
  {
    id: "21",
    nombre: "Hamburguesas Freezadas",
    precio: "$9.600",
    imagen: productBife,
    categoria: "Congelados",
  },
  {
    id: "22",
    nombre: "Medallones Mixtos",
    precio: "$9.300",
    imagen: productBocado,
    categoria: "Congelados",
  },
  {
    id: "23",
    nombre: "Tortillas de Papa",
    precio: "$7.100",
    imagen: productAsado,
    categoria: "Congelados",
  },
  {
    id: "24",
    nombre: "Bocaditos de Pollo",
    precio: "$8.300",
    imagen: productBocado,
    categoria: "Congelados",
  },
];

export const findCategoryBySlug = (
  categories: CatalogCategory[],
  slug: string,
) => categories.find((category) => category.slug === slug);
