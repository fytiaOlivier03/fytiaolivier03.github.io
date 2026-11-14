const RECIPIENT = "fytiaolivier@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode non autorisée." });
  }

  const contentType = (req.headers?.["content-type"] || "").split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return res.status(415).json({ error: "Format de données non pris en charge." });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({ error: "Données de formulaire invalides." });
  }

  if (typeof body.website === "string" && body.website.trim()) {
    console.warn("Contact form honeypot was submitted.");
    return res.status(400).json({ error: "La demande n’a pas pu être traitée." });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name ||
    name.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: "Vérifiez les champs du formulaire." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error("Contact email is unavailable: Resend environment variables are missing.");
    return res.status(503).json({ error: "Le service d’envoi est momentanément indisponible." });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: "Nouveau message depuis le portfolio",
        text: `Nom : ${name}\nE-mail : ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error(`Resend rejected the contact message with status ${response.status}.`);
      return res.status(502).json({ error: "L’envoi a échoué. Réessayez plus tard." });
    }

    return res.status(200).json({ message: "Votre message a bien été envoyé." });
  } catch (error) {
    console.error("Could not reach Resend to send the contact message.", error);
    return res.status(502).json({ error: "Impossible de joindre le service d’envoi. Réessayez plus tard." });
  }
};
