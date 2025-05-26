// src/routes/api/contacto/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import { env } from "$env/dynamic/private"; // carga en tiempo de ejecución
import nodemailer from "nodemailer";

export const POST: RequestHandler = async ({ request }) => {
  // 1. Datos del formulario
  const { email, message } = await request.json();
  if (!email || !message) {
    return new Response("Faltan datos", { status: 400 });
  }

  // 2. Variables de entorno en tiempo de ejecución
  const EMAIL_USER = env.EMAIL_USER;
  const EMAIL_PASS = env.EMAIL_PASS;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("Credenciales de correo no configuradas");
    return new Response("Email no configurado en el servidor", { status: 500 });
  }

  // 3. Transporter de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.verify(); // opcional
    await transporter.sendMail({
      from: email,
      to: EMAIL_USER,
      subject: "Nuevo mensaje desde tu sitio web",
      text: message,
      html: `<p><strong>Remitente:</strong> ${email}</p><p>${message}</p>`,
    });
    return new Response("Correo enviado", { status: 200 });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    return new Response("Error al enviar el correo", { status: 500 });
  }
};
