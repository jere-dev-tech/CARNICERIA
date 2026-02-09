import { useParams } from "react-router-dom";
import { CatalogPage } from "@/components/CatalogPage";
import type { CatalogCategory, Product } from "@/data/catalog";
import { findCategoryBySlug } from "@/data/catalog";
import NotFound from "@/pages/NotFound";

type CatalogCategoryPageProps = {
  sectionLabel: string;
  categories: CatalogCategory[];
  products: Product[];
  desktopSortOptions: string[];
};

const formatTitle = (value: string) => value.toUpperCase();

const buildBreadcrumbItems = (
  sectionLabel: string,
  categoryLabel: string,
  sectionPath: string,
  sectionBreadcrumbLabel: string,
) => [
  { label: "Inicio", to: "/" },
  { label: sectionBreadcrumbLabel, to: sectionPath },
  { label: categoryLabel },
];

export const CatalogCategoryPage = ({
  sectionLabel,
  categories,
  products,
  desktopSortOptions,
}: CatalogCategoryPageProps) => {
  const params = useParams();
  const slug = params.category ?? "";
  const category = findCategoryBySlug(categories, slug);

  if (!category) {
    return <NotFound />;
  }

  const filteredProducts = products.filter(
    (product) => product.categoria === category.label,
  );

  return (
    <CatalogPage
      breadcrumbItems={buildBreadcrumbItems(
        sectionLabel,
        category.label,
        `/${sectionLabel.toLowerCase()}`,
        sectionLabel === "Carniceria"
          ? "Ver todo Carniceria"
          : "Ver todo Elaborados",
      )}
      title={formatTitle(category.label)}
      products={filteredProducts}
      categories={categories}
      showBenefitsCards
      desktopSortOptions={desktopSortOptions}
    />
  );
};
