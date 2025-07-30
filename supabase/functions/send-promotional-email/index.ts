import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "THÉA CONSULTORES <noreply@thea-consultores.com>",
      to: ["info@thea-consultores.com"],
      subject: "📈 Impulsa tu empresa con estrategia y financiamiento — Descubre todo lo que podemos hacer por ti",
      text: `Buenas tardes:

En THÉA CONSULTORES, nos especializamos en impulsar el crecimiento estratégico y operativo de las empresas a través de consultoría profesional basada en estándares como el EC0249. Nuestro enfoque se centra en diagnosticar, diseñar soluciones y acompañar la implementación con indicadores y seguimiento efectivo.

Hoy, gracias a nuestra alianza con Activo+ y una red de aliados financieros, podemos ofrecerte una solución integral: estrategia + financiamiento especializado.

🧩
¿Qué te ofrecemos en Théa Consultores?
Consultoría Estratégica:
visión, posicionamiento y expansión.
Consultoría Operativa:
mejora de procesos, KPIs, productividad.
Consultoría Financiera:
eficiencia, control y planeación.
Consultoría de Recursos Humanos:
estructura organizacional, clima laboral y desempeño.
Consultoría Legal Empresarial:
cumplimiento y prevención de riesgos legales.

Todo respaldado por un proceso metodológico basado en el EC0249, que incluye diagnóstico, solución, implementación y mejora continua con herramientas como DAFO-CAME, KPI, Funnel de Ventas, Plan de Crecimiento y más.

💰
¿Qué soluciones financieras ponemos a tu alcance?

A través de nuestra alianza con Activo+, ofrecemos servicios financieros personalizados para PYMEs:

Servicios disponibles:
Crédito PyME
Crédito Hipotecario
Crédito de Auto
Seguros Patrimoniales
🟠 Préstamos desde $2,000,000.00 MXN hasta $300,000,000.00 MXN

Estas soluciones te permitirán optimizar tu flujo de efectivo, adquirir activos estratégicos o proteger tu patrimonio empresarial.

🤝
Nuestros aliados financieros incluyen:
Bancos: Banorte, Scotiabank, Banamex, Santander, HSBC, Hey Banco, Afirme, Inbursa
Financieras y Fintechs: Konfío, Xepelin, Finagil, Kapitalizer, Creze, Covalto, Anticipa, Bien para Bien, Ion, Axionex, Engen, Tip Auto, Hay Cash, Max Capital, Solufi, Finsus
Instituciones complementarias: GNP, SMNYL, Casa de Bolsa Masari, Alliance

✅
¿Cuál es tu prioridad actual?

Necesidad | Solución Recomendable
Financiamiento para crecer | Crédito PyME
Adquisición de inmueble | Crédito Hipotecario
Renovación o adquisición vehicular | Crédito de Auto
Protección de activos clave | Seguros Patrimoniales

¿Te gustaría saber cuál solución se adapta mejor a tu empresa?

Responde este correo con tu necesidad principal y te enviaremos una propuesta a la medida. Nuestra asesoría es completamente gratuita.

Saludos cordiales,
Omar Jesús Villalobos Martínez
THÉA CONSULTORES
📧 info@thea-consultores.com
📲 WhatsApp: 656-297-3150
"Estrategia que transforma. Proceso que impulsa."`,
    });

    console.log("Correo promocional enviado exitosamente:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Correo enviado exitosamente" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error enviando correo promocional:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);