import { CatalogCategoryPage } from "@/pages/CatalogCategoryPage";
import { carniceriaCategories, carniceriaProducts } from "@/data/catalog";

const CarniceriaCategory = () => {
  return (
    <CatalogCategoryPage
      sectionLabel="Carniceria"
      categories={carniceriaCategories}
      products={carniceriaProducts}
      desktopSortOptions={[
        "Destacado",
        "Precio: menor a mayor",
        "Precio: mayor a menor",
        "Nombre",
      ]}
    />
  );
};

export default CarniceriaCategory;
