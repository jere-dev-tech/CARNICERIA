import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CatalogMobileToolbar } from "@/components/CatalogMobileToolbar";
import { CatalogMobileFilters } from "@/components/CatalogMobileFilters";
import { CatalogSidebar } from "@/components/CatalogSidebar";
import { BenefitCards } from "@/components/BenefitCards";
import { Switch } from "@/components/ui/switch";
import type { CatalogCategory, Product } from "@/data/catalog";

type BreadcrumbItem = {
  label: string;
  to?: string;
};

type CatalogPageProps = {
  breadcrumbItems: BreadcrumbItem[];
  title: string;
  products: Product[];
  categories: CatalogCategory[];
  desktopSortOptions: string[];
  showBenefitsCards?: boolean;
};

export const CatalogPage = ({
  breadcrumbItems,
  title,
  products,
  categories,
  desktopSortOptions,
  showBenefitsCards = true,
}: CatalogPageProps) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isDark, setIsDark] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState(
    desktopSortOptions[0] ?? "Destacado",
  );
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("catalogDarkMode");
    if (stored !== null) {
      setIsDark(stored === "true");
    }
  }, []);

  useEffect(() => {
    const storedMin = localStorage.getItem("catalogPriceMin") ?? "";
    const storedMax = localStorage.getItem("catalogPriceMax") ?? "";
    setMinPrice(storedMin);
    setMaxPrice(storedMax);
  }, []);

  useEffect(() => {
    localStorage.setItem("catalogDarkMode", String(isDark));
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem("catalogPriceMin", minPrice);
    localStorage.setItem("catalogPriceMax", maxPrice);
    setVisibleCount(4);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    setVisibleCount(4);
  }, [products]);

  useEffect(() => {
    setVisibleCount(4);
  }, [sortOption]);

  const parsePrice = (value: string) =>
    Number.parseInt(value.replace(/[^0-9]/g, ""), 10);

  const minValue = minPrice ? Number.parseInt(minPrice, 10) : null;
  const maxValue = maxPrice ? Number.parseInt(maxPrice, 10) : null;

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const priceValue = parsePrice(product.precio);

        if (minValue !== null && priceValue < minValue) return false;
        if (maxValue !== null && priceValue > maxValue) return false;
        return true;
      }),
    [products, minValue, maxValue],
  );

  const sortedProducts = useMemo(() => {
    const sortKey = sortOption.toLowerCase();
    if (sortKey === "destacado") return filteredProducts;

    const list = filteredProducts.slice();

    const getDateValue = (product: Product) => {
      if (product.fechaAlta) {
        const parsed = Date.parse(product.fechaAlta);
        if (!Number.isNaN(parsed)) return parsed;
      }

      const fallback = Number.parseInt(product.id, 10);
      return Number.isNaN(fallback) ? 0 : fallback;
    };

    const getSoldValue = (product: Product) => product.vendidos ?? 0;

    switch (sortKey) {
      case "precio: menor a mayor":
        list.sort((a, b) => parsePrice(a.precio) - parsePrice(b.precio));
        break;
      case "precio: mayor a menor":
        list.sort((a, b) => parsePrice(b.precio) - parsePrice(a.precio));
        break;
      case "a - z":
      case "a-z":
      case "nombre":
        list.sort((a, b) => a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" }));
        break;
      case "z - a":
      case "z-a":
        list.sort((a, b) => b.nombre.localeCompare(a.nombre, "es", { sensitivity: "base" }));
        break;
      case "mas nuevo al mas viejo":
      case "más nuevo al más viejo":
        list.sort((a, b) => getDateValue(b) - getDateValue(a));
        break;
      case "mas viejo al mas nuevo":
      case "más viejo al más nuevo":
        list.sort((a, b) => getDateValue(a) - getDateValue(b));
        break;
      case "mas vendidos":
      case "más vendidos":
        list.sort((a, b) => getSoldValue(b) - getSoldValue(a));
        break;
      default:
        return filteredProducts;
    }

    return list;
  }, [filteredProducts, sortOption]);

  const visibleProducts = sortedProducts.slice(0, visibleCount);
  const canShowMore = visibleCount < sortedProducts.length;

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className={isDark ? "catalog-dark bg-background text-foreground" : "bg-muted text-foreground"}>
        <main
          key={location.pathname}
          className="catalog-page-enter mx-auto w-full max-w-[1200px] px-6 py-10 xl:max-w-[1280px]"
        >
          <div className="space-y-8">
            {showBenefitsCards && (
              <BenefitCards className="mb-4 hidden lg:grid" />
            )}

            <header className="space-y-4 text-center">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {breadcrumbItems.map((item, index) => {
                  const isLast = index === breadcrumbItems.length - 1;
                  const separator = index > 0 ? " / " : "";
                  if (item.to && !isLast) {
                    return (
                      <span key={`${item.label}-${index}`}>
                        {separator}
                        <Link to={item.to} className="hover:text-foreground">
                          {item.label}
                        </Link>
                      </span>
                    );
                  }

                  return (
                    <span key={`${item.label}-${index}`}>
                      {separator}
                      {item.label}
                    </span>
                  );
                })}
              </p>
              <h1 className="text-2xl font-bold tracking-wide md:text-3xl">
                {title}
              </h1>
              <label className="switch" aria-label="Modo oscuro">
                <input
                  type="checkbox"
                  checked={isDark}
                  onChange={(event) => setIsDark(event.target.checked)}
                />
                <span className="slider" />
              </label>
            </header>

            <CatalogMobileToolbar
              sortOptions={desktopSortOptions}
              sortValue={sortOption}
              onSortChange={setSortOption}
              filterContent={
                <CatalogMobileFilters
                  categories={categories}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onApply={(nextMin, nextMax) => {
                    setMinPrice(nextMin);
                    setMaxPrice(nextMax);
                  }}
                />
              }
            />

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">
              <aside className="hidden lg:block">
                <CatalogSidebar
                  categories={categories}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  onMinPriceChange={setMinPrice}
                  onMaxPriceChange={setMaxPrice}
                />
              </aside>

              <section className="space-y-5">
                <div className="hidden items-center justify-end gap-3 text-sm md:flex">
                  <span className="text-muted-foreground">Ordenar por</span>
                  <select
                    value={sortOption}
                    onChange={(event) => setSortOption(event.target.value)}
                    className="w-full rounded border border-border bg-card px-3 pr-8 py-1 text-sm text-foreground md:w-auto"
                  >
                    {desktopSortOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                  {visibleProducts.map((product) => (
                    <article
                      key={product.id}
                      className="group overflow-hidden rounded-xl border border-border/70 bg-card shadow-[0_10px_22px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.16)]"
                    >
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.imagen}
                          alt={product.nombre}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-1 px-3 py-4 text-center">
                        <p className="hidden text-xs uppercase tracking-[0.2em] text-muted-foreground md:block">
                          {product.categoria}
                        </p>
                        <h3 className="text-sm font-semibold uppercase tracking-wide">
                          {product.nombre}
                        </h3>
                        <p className="text-sm font-semibold text-primary">
                          {product.precio}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {canShowMore && (
                  <div className="flex justify-center pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleCount((prev) =>
                          Math.min(prev + 4, filteredProducts.length),
                        )
                      }
                      className="rounded border border-foreground px-6 py-2 text-xs font-semibold uppercase tracking-widest"
                    >
                      Mostrar mas productos
                    </button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </main>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};
