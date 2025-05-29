import type { RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import nodemailer from "nodemailer";

export const POST: RequestHandler = async ({ request }) => {
  const { email, message } = await request.json();

  if (!email || !message) {
    return new Response(JSON.stringify({ ok: false, error: "Faltan datos" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { EMAIL_USER, EMAIL_PASS } = env;
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Credenciales de correo no configuradas");
    return new Response(
      JSON.stringify({ ok: false, error: "Servidor sin email" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    logger: true, // ← activa trazas en consola
    debug: true, // ← más detalle si falla
  });

  try {
    await transporter.sendMail({
      from: `School Roster <${EMAIL_USER}>`, // tiene que ser TU cuenta
      replyTo: email,
      to: EMAIL_USER,
      subject: "Nuevo mensaje desde tu sitio web",
      html: `<p><b>Remitente:</b> ${email}</p><p>${message}</p>`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error Nodemailer:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Falló el envío" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
