import { CatalogPage } from "@/components/CatalogPage";
import {
  carniceriaCategories,
  carniceriaProducts,
  elaboradosCategories,
  elaboradosProducts,
} from "@/data/catalog";

const Productos = () => {
  return (
    <CatalogPage
      breadcrumbItems={[
        { label: "Inicio", to: "/" },
        { label: "Productos" },
      ]}
      title="PRODUCTOS"
      products={[...carniceriaProducts, ...elaboradosProducts]}
      categories={[...carniceriaCategories, ...elaboradosCategories]}
      desktopSortOptions={[
        "Destacado",
        "Precio: menor a mayor",
        "Precio: mayor a menor",
        "A - Z",
        "Z - A",
        "Mas nuevo al mas viejo",
        "Mas viejo al mas nuevo",
        "Mas vendidos",
      ]}
      showBenefitsCards
    />
  );
};

export default Productos;
