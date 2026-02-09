import { CatalogPage } from "@/components/CatalogPage";
import { elaboradosCategories, elaboradosProducts } from "@/data/catalog";

const Elaborados = () => {
  return (
    <CatalogPage
      breadcrumbItems={[
        { label: "Inicio", to: "/" },
        { label: "Productos", to: "/productos" },
        { label: "Ver todo en Elaborados" },
      ]}
      title="VER TODO EN ELABORADOS"
      products={elaboradosProducts}
      categories={elaboradosCategories}
      showBenefitsCards
      desktopSortOptions={[
        "A - Z",
        "Precio: menor a mayor",
        "Precio: mayor a menor",
      ]}
    />
  );
};

export default Elaborados;
