export const prerender = false;

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const company = data.get("company");
    const hearAbout = data.get("hear-about");
    const message = data.get("message");
    const terms = data.get("terms");

    // Validar campos requeridos
    if (!name || !email || !message || !terms) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos requeridos"
        }),
        { status: 400 }
      );
    }

    // Mostrar datos en consola para depuración
    console.log("📧 Datos del formulario recibidos:");
    console.log("Nombre:", name);
    console.log("Email:", email);
    console.log("Teléfono:", phone || 'No proporcionado');
    console.log("Empresa:", company || 'No proporcionada');
    console.log("Cómo se enteró:", hearAbout || 'No especificado');
    console.log("Mensaje:", message);
    console.log("Aceptó términos:", terms ? 'Sí' : 'No');

    // Mostrar configuración de Resend para depuración
    console.log("🔧 Configuración de Resend:");
    console.log("RESEND_API_KEY presente:", !!import.meta.env.RESEND_API_KEY);
    console.log("RESEND_FROM:", import.meta.env.RESEND_FROM || "onboarding@resend.dev (default)");
    console.log("RESEND_TO:", import.meta.env.RESEND_TO || "tu-correo@empresa.com (default)");

    // Para testing, usar el correo verificado de Resend (contacto@ampereonsc.com)
    const toEmail = import.meta.env.RESEND_TO;
    console.log("📨 Enviando a:", toEmail);
    console.log("──────────────────────────────────────────");

    try {
      // Enviar correo con Resend
      const emailResult = await resend.emails.send({
        from: import.meta.env.RESEND_FROM || "onboarding@resend.dev",
        to: toEmail,
        subject: `Nuevo mensaje de contacto de ${name}`,
        text: `
          Nombre: ${name}
          Email: ${email}
          Teléfono: ${phone || 'No proporcionado'}
          Empresa: ${company || 'No proporcionada'}
          Cómo se enteró: ${hearAbout || 'No especificado'}
          Mensaje: ${message}
          Aceptó términos: ${terms ? 'Sí' : 'No'}
        `,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Nuevo mensaje de contacto</h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
              <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
              <p><strong>Cómo se enteró:</strong> ${hearAbout || 'No especificado'}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="background: white; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
                ${message}
              </p>
              <p><strong>Aceptó términos:</strong> ${terms ? 'Sí' : 'No'}</p>
            </div>
          </div>
        `,
      });

      // Mostrar resultado del envío en consola
      console.log("📤 Resultado del envío de correo:", emailResult);
      console.log("✅ Correo enviado exitosamente");

    } catch (emailError) {
      console.error("❌ Error al enviar correo:", emailError);
      // Continuar aunque falle el envío para testing
      console.log("⚠️  Modo prueba: Mostrando datos pero no enviando correo");
    }

    console.log("──────────────────────────────────────────");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Mensaje enviado correctamente"
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Error interno del servidor"
      }),
      { status: 500 }
    );
  }
};
