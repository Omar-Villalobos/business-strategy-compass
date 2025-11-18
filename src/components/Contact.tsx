
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Briefcase, CheckCircle2, ChartBar, Building2, Users, Phone, Mail } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  executiveName: z.string().min(3, "Nombre requerido"),
  executivePosition: z.string().min(2, "Cargo requerido"),
  email: z.string().email("Correo electrónico inválido"),
  companyName: z.string().min(3, "Nombre de la organización requerido"),
  industry: z.string().min(1, "Sector industrial requerido"),
  companySize: z.string().min(1, "Tamaño de la empresa requerido"),
  annualRevenue: z.string().min(1, "Ingresos anuales requeridos"),
  projectPriority: z.string().min(1, "Prioridad del proyecto requerida"),
  // Criterios de calificación
  urgentProblem: z.string().min(1, "Debe especificar si tiene un problema urgente"),
  implementationCapacity: z.string().min(1, "Debe especificar su capacidad de implementación"),
  economicCapacity: z.string().min(1, "Debe especificar su capacidad económica"),
  message: z.string().min(10, "Mensaje requerido con mínimo 10 caracteres"),
});

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      executiveName: "",
      executivePosition: "",
      email: "",
      companyName: "",
      industry: "",
      companySize: "",
      annualRevenue: "",
      projectPriority: "",
      urgentProblem: "",
      implementationCapacity: "",
      economicCapacity: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values
      });

      if (error) {
        console.error('Error enviando formulario:', error);
        toast({
          title: "Error",
          description: "Hubo un problema enviando su solicitud. Por favor intente nuevamente.",
          variant: "destructive",
        });
        return;
      }

      console.log('Formulario enviado exitosamente:', data);
      setIsSubmitted(true);
      form.reset();
      
      toast({
        title: "¡Solicitud Enviada!",
        description: "Su solicitud ha sido enviada exitosamente. Nos pondremos en contacto pronto.",
      });

    } catch (error) {
      console.error('Error inesperado:', error);
      toast({
        title: "Error",
        description: "Error inesperado. Por favor intente nuevamente o contáctenos directamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="py-16 px-4 bg-gradient-metallic text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-steel-dark/95 via-steel-blue/90 to-steel-dark/95 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10 z-0"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-8">
          <Briefcase className="h-10 w-10 text-accent mb-3" />
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-2">
            Evaluación Estratégica
          </h2>
          <p className="text-steel-silver/80 text-center max-w-2xl text-sm">
            Complete el formulario para recibir una evaluación personalizada
          </p>
          
          <div className="mt-6 bg-steel-silver/10 backdrop-blur-sm rounded-lg p-4 w-full max-w-md border border-steel-gold/20">
            <div className="flex items-center justify-center gap-4 text-white">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">657-297-3150</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">info@thea-consultores.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {isSubmitted ? (
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl flex flex-col items-center border border-steel-gold/30">
            <CheckCircle2 className="h-14 w-14 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Solicitud Recibida</h3>
            <p className="text-center text-[#86a8be] mb-6">
              Su información ha sido recibida con éxito. Nuestro equipo de consultores estratégicos evaluará su caso y se pondrá en contacto en un plazo de 24-48 horas hábiles.
            </p>
            <div className="text-center mb-4">
              <p className="text-white font-medium">Contáctenos directamente:</p>
              <p className="text-[#86a8be]">📱 657-297-3150 | ✉️ info@thea-consultores.com</p>
            </div>
            <Button 
              className="bg-[#86a8be] hover:bg-[#6a8ca2] text-[#000000] font-medium transition-colors"
              onClick={() => setIsSubmitted(false)}
            >
              Enviar nueva solicitud
            </Button>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="executiveName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nombre del Ejecutivo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Carlos Mendoza" className="bg-white/20 border-0 text-white placeholder:text-[#86a8be]/70" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="executivePosition"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Cargo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej. Director de Operaciones" className="bg-white/20 border-0 text-white placeholder:text-[#86a8be]/70" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Correo Corporativo</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="nombre@empresa.com" className="bg-white/20 border-0 text-white placeholder:text-[#86a8be]/70" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Organización</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre de su empresa" className="bg-white/20 border-0 text-white placeholder:text-[#86a8be]/70" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Sector Industrial</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/20 border-0 text-white">
                              <SelectValue placeholder="Seleccione su sector" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="manufacturing">Manufactura</SelectItem>
                            <SelectItem value="technology">Tecnología</SelectItem>
                            <SelectItem value="finance">Servicios Financieros</SelectItem>
                            <SelectItem value="healthcare">Salud</SelectItem>
                            <SelectItem value="retail">Comercio Minorista</SelectItem>
                            <SelectItem value="logistics">Logística</SelectItem>
                            <SelectItem value="construction">Construcción</SelectItem>
                            <SelectItem value="education">Educación</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Tamaño de la Organización</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/20 border-0 text-white">
                              <SelectValue placeholder="Número de empleados" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1-10">1-10 empleados</SelectItem>
                            <SelectItem value="11-50">11-50 empleados</SelectItem>
                            <SelectItem value="51-200">51-200 empleados</SelectItem>
                            <SelectItem value="201-500">201-500 empleados</SelectItem>
                            <SelectItem value="501-1000">501-1000 empleados</SelectItem>
                            <SelectItem value="1000+">Más de 1000 empleados</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="annualRevenue"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Ingresos Anuales Aproximados (MXN)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white/20 border-0 text-white">
                            <SelectValue placeholder="Seleccione rango de ingresos" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="less-5m">Menos de 5 millones</SelectItem>
                          <SelectItem value="5m-20m">5 - 20 millones</SelectItem>
                          <SelectItem value="20m-50m">20 - 50 millones</SelectItem>
                          <SelectItem value="50m-100m">50 - 100 millones</SelectItem>
                          <SelectItem value="100m-500m">100 - 500 millones</SelectItem>
                          <SelectItem value="500m+">Más de 500 millones</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectPriority"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="text-white">Área prioritaria para optimización</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="operational-efficiency" />
                            </FormControl>
                            <FormLabel className="font-normal text-white flex items-center">
                              <ChartBar className="h-4 w-4 mr-2" />
                              Eficiencia Operativa
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="strategic-planning" />
                            </FormControl>
                            <FormLabel className="font-normal text-white flex items-center">
                              <Building2 className="h-4 w-4 mr-2" />
                              Planificación Estratégica
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="team-performance" />
                            </FormControl>
                            <FormLabel className="font-normal text-white flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              Rendimiento de Equipos
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                {/* Criterios de Calificación */}
                <div className="bg-orange-500/20 p-6 rounded-lg border border-orange-500/30">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-2 text-orange-500" />
                    Criterios de Calificación
                  </h3>
                  <p className="text-[#86a8be] mb-6 text-sm">
                    Para brindarle el mejor servicio, necesitamos evaluar estos aspectos clave:
                  </p>
                  
                  <div className="space-y-6">
                    <FormField
                      control={form.control}
                      name="urgentProblem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            1. ¿Tiene un dolor fuerte y urgente? (una necesidad real que no puede seguir ignorando)
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 border-0 text-white">
                                <SelectValue placeholder="Seleccione una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="very-urgent">Sí, es muy urgente - afecta operaciones diarias</SelectItem>
                              <SelectItem value="urgent">Sí, es urgente - impacta resultados</SelectItem>
                              <SelectItem value="moderate">Es moderadamente importante</SelectItem>
                              <SelectItem value="not-urgent">No es urgente, es preventivo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="implementationCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            2. ¿Tiene capacidad de implementación? (equipo, recursos, disposición a cambiar)
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 border-0 text-white">
                                <SelectValue placeholder="Seleccione una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="full-capacity">Sí, tenemos equipo completo y disposición total</SelectItem>
                              <SelectItem value="good-capacity">Sí, tenemos recursos y estamos dispuestos</SelectItem>
                              <SelectItem value="partial-capacity">Parcialmente, necesitamos apoyo adicional</SelectItem>
                              <SelectItem value="limited-capacity">Limitada, requerimos mucho apoyo externo</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="economicCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">
                            3. ¿Tiene capacidad económica para pagar por una solución profesional?
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/20 border-0 text-white">
                                <SelectValue placeholder="Seleccione una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="high-budget">Sí, tenemos presupuesto asignado para consultoría</SelectItem>
                              <SelectItem value="moderate-budget">Sí, podemos invertir en soluciones profesionales</SelectItem>
                              <SelectItem value="limited-budget">Presupuesto limitado, buscamos opciones flexibles</SelectItem>
                              <SelectItem value="no-budget">No tenemos presupuesto definido aún</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Describa el reto empresarial que busca resolver</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Detalle brevemente la situación actual y sus objetivos estratégicos..."
                          className="h-32 bg-white/20 border-0 text-white placeholder:text-[#86a8be]/70"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#86a8be] hover:bg-[#6a8ca2] text-[#000000] font-medium transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Evaluación Estratégica"}
                </Button>
              </form>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};
