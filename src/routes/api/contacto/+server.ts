// src/routes/api/contacto/+server.ts
import type { RequestHandler } from "@sveltejs/kit";
import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "$env/static/private"; // 👈  SvelteKit las lee por ti

export const POST: RequestHandler = async ({ request }) => {
  const { email, message } = await request.json();

  if (!email || !message) {
    return new Response("Faltan datos", { status: 400 });
  }

  // 👉  Verifica que sí existan
  console.log("ENV USER:", EMAIL_USER);
  console.log("ENV PASS length:", EMAIL_PASS?.length);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    // Opcional: comprueba la conexión antes de enviar
    await transporter.verify();

    await transporter.sendMail({
      from: email,
      to: EMAIL_USER,
      subject: "Nuevo mensaje desde tu sitio web",
      text: message,
      html: `<p><strong>Correo del remitente:</strong> ${email}</p><p>${message}</p>`,
    });

    return new Response("Correo enviado", { status: 200 });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    return new Response("Error al enviar el correo", { status: 500 });
  }
};
