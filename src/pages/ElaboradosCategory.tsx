import { CatalogCategoryPage } from "@/pages/CatalogCategoryPage";
import { elaboradosCategories, elaboradosProducts } from "@/data/catalog";

const ElaboradosCategory = () => {
  return (
    <CatalogCategoryPage
      sectionLabel="Elaborados"
      categories={elaboradosCategories}
      products={elaboradosProducts}
      desktopSortOptions={[
        "A - Z",
        "Precio: menor a mayor",
        "Precio: mayor a menor",
      ]}
    />
  );
};

export default ElaboradosCategory;
