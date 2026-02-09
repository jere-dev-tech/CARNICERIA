import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Carniceria from "@/pages/Carniceria";
import Elaborados from "@/pages/Elaborados";
import CarniceriaCategory from "@/pages/CarniceriaCategory";
import ElaboradosCategory from "@/pages/ElaboradosCategory";
import Productos from "@/pages/Productos";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={0}>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/carniceria" element={<Carniceria />} />
          <Route path="/carniceria/:category" element={<CarniceriaCategory />} />
          <Route path="/elaborados" element={<Elaborados />} />
          <Route path="/elaborados/:category" element={<ElaboradosCategory />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
