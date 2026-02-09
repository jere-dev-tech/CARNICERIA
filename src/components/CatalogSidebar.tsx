import { Link } from "react-router-dom";
import type { CatalogCategory } from "@/data/catalog";

type CatalogSidebarProps = {
  categories: CatalogCategory[];
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
};

export const CatalogSidebar = ({
  categories,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: CatalogSidebarProps) => {
  return (
    <div className="space-y-6">
      <div className="rounded-md border border-border bg-card/80 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider">Categorias</h2>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          {categories.map((category, index) => (
            <li
              key={category.slug}
              className={index === 0 ? "text-foreground" : undefined}
            >
              <Link to={category.href} className="hover:text-foreground">
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-3">
          <Link
            to="/productos"
            className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-[11px] font-semibold uppercase tracking-widest text-foreground"
          >
            Volver a productos
          </Link>
        </div>
      </div>

      <div className="rounded-md border border-border bg-card/80 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider">Precio</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(event) => onMinPriceChange(event.target.value)}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>
    </div>
  );
};
