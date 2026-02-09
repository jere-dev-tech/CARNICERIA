import { CatalogPage } from "@/components/CatalogPage";
import { carniceriaCategories, carniceriaProducts } from "@/data/catalog";

const Carniceria = () => {
  return (
    <CatalogPage
      breadcrumbItems={[
        { label: "Inicio", to: "/" },
        { label: "Productos", to: "/productos" },
        { label: "Ver todo en Carniceria" },
      ]}
      title="VER TODO EN CARNICERIA"
      products={carniceriaProducts}
      categories={carniceriaCategories}
      showBenefitsCards
      desktopSortOptions={[
        "Destacado",
        "Precio: menor a mayor",
        "Precio: mayor a menor",
        "Nombre",
      ]}
    />
  );
};

export default Carniceria;
