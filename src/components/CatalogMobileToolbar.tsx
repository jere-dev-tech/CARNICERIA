import type { ReactNode } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const defaultSortOptions = [
  "Destacado",
  "Precio: menor a mayor",
  "Precio: mayor a menor",
  "A - Z",
  "Z - A",
  "Mas nuevo al mas viejo",
  "Mas viejo al mas nuevo",
  "Mas vendidos",
];

type CatalogMobileToolbarProps = {
  sortOptions?: string[];
  filterContent: ReactNode;
  sortLabel?: string;
  sortValue: string;
  onSortChange: (value: string) => void;
};

export const CatalogMobileToolbar = ({
  sortOptions = defaultSortOptions,
  filterContent,
  sortLabel = "Ordenar por",
  sortValue,
  onSortChange,
}: CatalogMobileToolbarProps) => {
  return (
    <div className="md:hidden">
      <div className="flex items-end gap-3">
        <div className="flex-1">
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {sortLabel}
          </label>
          <select
            value={sortValue}
            onChange={(event) => onSortChange(event.target.value)}
            className="mt-2 h-10 w-full rounded-md border border-border bg-card px-3 pr-8 text-sm text-foreground"
          >
            {sortOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              className="h-10 rounded-md border border-border bg-card px-4 text-sm font-semibold uppercase tracking-widest text-foreground"
            >
              Filtrar por
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="catalog-dark w-[90%] bg-background p-6 text-foreground sm:max-w-sm overflow-y-auto"
            onOpenAutoFocus={(event) => event.preventDefault()}
          >
            <SheetHeader className="text-left">
              <SheetTitle>Filtrar por</SheetTitle>
            </SheetHeader>
            <div className="mt-6">{filterContent}</div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
