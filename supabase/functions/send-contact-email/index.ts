
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  executiveName: string;
  executivePosition: string;
  email: string;
  companyName: string;
  industry: string;
  companySize: string;
  annualRevenue: string;
  projectPriority: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Crear cliente Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Guardar en base de datos
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        executive_name: formData.executiveName,
        executive_position: formData.executivePosition,
        email: formData.email,
        company_name: formData.companyName,
        industry: formData.industry,
        company_size: formData.companySize,
        annual_revenue: formData.annualRevenue,
        project_priority: formData.projectPriority,
        message: formData.message,
      });

    if (dbError) {
      console.error("Error saving to database:", dbError);
      throw new Error("Error guardando en base de datos");
    }

    // Mapear las prioridades a texto legible
    const priorityMap: { [key: string]: string } = {
      "operational-efficiency": "Eficiencia Operativa",
      "strategic-planning": "Planificación Estratégica",
      "team-performance": "Rendimiento de Equipos"
    };

    // Enviar correo a Théa Consultores
    const emailResponse = await resend.emails.send({
      from: "Formulario Web <noreply@thea-consultores.com>",
      to: ["info@thea-consultores.com"],
      subject: `Nueva Solicitud de Evaluación - ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #364860; border-bottom: 2px solid #86a8be; padding-bottom: 10px;">
            Nueva Solicitud de Evaluación Estratégica
          </h2>
          
          <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #364860; margin-top: 0;">Información del Ejecutivo</h3>
            <p><strong>Nombre:</strong> ${formData.executiveName}</p>
            <p><strong>Cargo:</strong> ${formData.executivePosition}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
          </div>

          <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #364860; margin-top: 0;">Información de la Empresa</h3>
            <p><strong>Organización:</strong> ${formData.companyName}</p>
            <p><strong>Sector:</strong> ${formData.industry}</p>
            <p><strong>Tamaño:</strong> ${formData.companySize}</p>
            <p><strong>Ingresos Anuales:</strong> ${formData.annualRevenue}</p>
          </div>

          <div style="background-color: #f5f7fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #364860; margin-top: 0;">Proyecto</h3>
            <p><strong>Área Prioritaria:</strong> ${priorityMap[formData.projectPriority] || formData.projectPriority}</p>
            <p><strong>Descripción del Reto:</strong></p>
            <p style="background-color: white; padding: 15px; border-left: 4px solid #86a8be;">${formData.message}</p>
          </div>

          <div style="background-color: #364860; color: white; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">Formulario recibido desde: <strong>thea-consultores.com</strong></p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">Fecha: ${new Date().toLocaleString('es-MX')}</p>
          </div>
        </div>
      `,
    });

    console.log("Correo enviado exitosamente:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Formulario enviado exitosamente" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error en send-contact-email:", error);
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
