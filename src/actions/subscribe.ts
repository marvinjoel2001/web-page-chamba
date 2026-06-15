"use server";

export async function subscribeEmail(email: string) {
  try {
    if (!email || !email.includes("@")) {
      return { success: false, error: "Ingresa un correo electrónico válido" };
    }

    // Aquí iría la integración con Resend, SendGrid o Nodemailer SMTP.
    // Por ejemplo:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'soporte@chamba.app',
    //   subject: 'Nueva Suscripción',
    //   html: `<p>Nuevo suscriptor: ${email}</p>`
    // });

    // Simulamos un retraso de red
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { success: true, message: "¡Suscripción exitosa! Te mantendremos informado." };
  } catch (error) {
    console.error("Error al suscribirse:", error);
    return { success: false, error: "Ocurrió un error. Inténtalo más tarde." };
  }
}
