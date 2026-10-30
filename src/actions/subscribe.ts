"use server";

import { apiBase } from "../lib/api-base";

export async function subscribeEmail(email: string) {
  try {
    if (!email || !email.includes("@")) {
      return { success: false, error: "Ingresa un correo electrónico válido" };
    }

    // El backend guarda el correo (suscribirse dos veces no es error).
    const response = await fetch(`${apiBase()}/web/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim() }),
    });
    if (response.status === 400) {
      return { success: false, error: "Ingresa un correo electrónico válido" };
    }
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    return { success: true, message: "¡Suscripción exitosa! Te mantendremos informado." };
  } catch (error) {
    console.error("Error al suscribirse:", error);
    return { success: false, error: "Ocurrió un error. Inténtalo más tarde." };
  }
}
