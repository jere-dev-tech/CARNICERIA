import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SheetClose } from "@/components/ui/sheet";
import type { CatalogCategory } from "@/data/catalog";

type CatalogMobileFiltersProps = {
  categories: CatalogCategory[];
  minPrice: string;
  maxPrice: string;
  onApply: (minPrice: string, maxPrice: string) => void;
};

export const CatalogMobileFilters = ({
  categories,
  minPrice,
  maxPrice,
  onApply,
}: CatalogMobileFiltersProps) => {
  const [draftMin, setDraftMin] = useState(minPrice);
  const [draftMax, setDraftMax] = useState(maxPrice);

  useEffect(() => {
    setDraftMin(minPrice);
    setDraftMax(maxPrice);
  }, [minPrice, maxPrice]);

  return (
    <div className="space-y-7">
      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Categorias
        </h2>
        <ul className="space-y-3 text-base text-muted-foreground">
          {categories.map((category) => (
            <li key={category.slug} className="text-foreground">
              <SheetClose asChild>
                <Link
                  to={category.href}
                  className="block rounded-md px-2 py-2 hover:bg-muted/40"
                >
                  {category.label}
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
        <div className="pt-1">
          <SheetClose asChild>
            <Link
              to="/productos"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-3 py-2 text-xs font-semibold uppercase tracking-widest text-foreground"
            >
              Volver a productos
            </Link>
          </SheetClose>
        </div>
      </div>

      <div className="h-px w-full bg-border" />

      <div className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Precio
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            placeholder="Desde"
            value={draftMin}
            onChange={(event) => setDraftMin(event.target.value)}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <input
            type="number"
            placeholder="Hasta"
            value={draftMax}
            onChange={(event) => setDraftMax(event.target.value)}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <SheetClose asChild>
          <button
            type="button"
            onClick={() => onApply(draftMin, draftMax)}
            className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold uppercase tracking-widest text-foreground"
          >
            Aplicar
          </button>
        </SheetClose>
      </div>
    </div>
  );
};
