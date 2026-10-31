import "server-only";

export async function saveWaitlistEmail(email: string): Promise<void> {
  // TODO: conectar el proveedor de correo o base de datos (por ejemplo Resend,
  // Mailchimp o una tabla en Vercel Postgres). Hasta entonces no se guarda nada;
  // la función debe lanzar un error si el guardado falla.
  void email;
}
