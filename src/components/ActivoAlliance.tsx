
import { Phone, Mail, Building2, HandHeart, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "./ui/use-toast";

export const ActivoAlliance = () => {
  const { toast } = useToast();
  const activoServices = [
    "Crédito PyME ($2M - $300M MXN)",
    "Crédito Hipotecario", 
    "Crédito de Auto",
    "Seguros"
  ];

  const theaServices = [
    "Consultoría Estratégica",
    "Optimización de Procesos",
    "Planificación Empresarial",
    "Diagnóstico Organizacional"
  ];

  const handleSolicitarInformacion = async () => {
    try {
      // Enviar correo promocional
      const { data, error } = await supabase.functions.invoke('send-promotional-email');
      
      if (error) {
        console.error('Error enviando correo:', error);
        toast({
          title: "Error",
          description: "Hubo un problema enviando la información. Por favor intente nuevamente.",
          variant: "destructive",
        });
        return;
      }

      // Insertar registro en la base de datos
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          executive_name: 'Solicitud de Información',
          executive_position: 'N/A',
          email: 'info@thea-consultores.com',
          company_name: 'Solicitud desde web',
          industry: 'N/A',
          company_size: 'N/A',
          annual_revenue: 'N/A',
          project_priority: 'Información general',
          message: 'Usuario solicitó información desde el botón de Alianza Estratégica'
        });

      if (dbError) {
        console.error('Error guardando en base de datos:', dbError);
      }

      toast({
        title: "¡Información Enviada!",
        description: "La información ha sido enviada a su correo. También puede contactarnos por WhatsApp.",
      });

      // Abrir WhatsApp
      window.open('https://wa.me/526572973150?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20la%20alianza%20estratégica%20de%20THÉA%20CONSULTORES%20y%20Activo+', '_blank');

    } catch (error) {
      console.error('Error inesperado:', error);
      toast({
        title: "Error",
        description: "Error inesperado. Por favor contáctenos directamente por WhatsApp.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-[#364860] to-[#2d3e52]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <HandHeart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Alianza Estratégica
          </h2>
          <p className="text-[#86a8be] max-w-3xl mx-auto text-lg">
            Théa Consultores se une con Activo+ para ofrecerte soluciones integrales que potencien tu crecimiento empresarial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Théa Consultores Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[#364860]/20 border-[#86a8be]/30 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-8 w-8 text-[#86a8be]" />
                  <CardTitle className="text-white text-xl">Théa Consultores</CardTitle>
                </div>
                <p className="text-[#86a8be] text-sm font-medium">Estrategia que Transforma. Proceso que Impulsa.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {theaServices.map((service, index) => (
                    <li key={index} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-[#86a8be] rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Activo+ Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 border-orange-500/30 backdrop-blur-sm h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-2xl font-bold text-white">
                    Activo<span className="text-orange-500">+</span>
                  </div>
                </div>
                <p className="text-orange-200 text-sm">Soluciones Financieras</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {activoServices.map((service, index) => (
                    <li key={index} className="flex items-center text-white">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-orange-500/20 rounded-lg border border-orange-500/30">
                  <p className="text-orange-200 font-bold text-center text-lg">
                    💰 CRÉDITOS PyME
                  </p>
                  <p className="text-white font-bold text-center text-xl">
                    $2M - $300M MXN
                  </p>
                  <p className="text-orange-200 text-center text-sm mt-1">
                    Asesoría SIN COSTO
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Contáctanos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-6 w-6 text-orange-500" />
              <div>
                <p className="text-white font-medium">WhatsApp</p>
                <p className="text-[#86a8be]">657-297-3150</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-6 w-6 text-[#86a8be]" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-[#86a8be]">info@thea-consultores.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Linkedin className="h-6 w-6 text-blue-400" />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/company/thea-consultores/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Théa Consultores
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3"
              onClick={handleSolicitarInformacion}
            >
              Solicitar Información
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
