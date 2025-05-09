
import React from "react";
import { 
  NavigationMenu as NavMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

export const NavigationMenu = () => {
  // Function to scroll to sections
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-4 px-4 relative z-20">
      <NavMenu className="justify-end">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('top')}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#86a8be]/20 hover:text-white cursor-pointer"
            >
              Inicio
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#86a8be]/20 hover:text-white">
              Metodología
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                {[
                  { name: "Diagnóstico y Análisis", id: "diagnostico-analisis" },
                  { name: "Diseño de la Solución", id: "diseno-solucion" },
                  { name: "Planificación Estratégica", id: "planificacion-estrategica" },
                  { name: "Implementación", id: "implementacion" },
                  { name: "Seguimiento y Ajustes", id: "seguimiento-ajustes" }
                ].map((phase) => (
                  <li key={phase.id}>
                    <NavigationMenuLink asChild>
                      <a
                        onClick={() => scrollToSection(phase.id)}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#86a8be]/10 hover:text-[#86a8be] cursor-pointer"
                      >
                        <div className="text-sm font-medium leading-none">{phase.name}</div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-[#86a8be]/20 hover:text-white">
              Servicios
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {[
                  { title: "Plan Estratégico en Una Página (OPSP)", description: "Alinea objetivos, métricas y responsables en un solo documento", id: "planificacion-estrategica" },
                  { title: "Optimización de Procesos", description: "Mejora la eficiencia operativa de tu organización", id: "growth-stages" },
                  { title: "Diagnóstico Empresarial", description: "Análisis detallado de la situación actual de tu empresa", id: "diagnostico-analisis" },
                  { title: "Asesoría por Etapas", description: "Soluciones adaptadas a cada fase de crecimiento", id: "growth-stages" }
                ].map((service) => (
                  <li key={service.title}>
                    <NavigationMenuLink asChild>
                      <a
                        onClick={() => scrollToSection(service.id)}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#86a8be]/10 hover:text-[#86a8be] cursor-pointer"
                      >
                        <div className="text-sm font-medium leading-none">{service.title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-gray-300">
                          {service.description}
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              onClick={() => scrollToSection('contact')}
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-[#86a8be]/20 hover:text-white cursor-pointer"
            >
              Contacto
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavMenu>
    </div>
  );
};
