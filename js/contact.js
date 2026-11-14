const contactForm = document.querySelector("#contact-form");
const contactStatus = document.querySelector("#contact-status");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector('button[type="submit"]');
    if (!(submitButton instanceof HTMLButtonElement)) {
      console.error("Contact form submit button is missing.");
      contactStatus.textContent = "Le formulaire ne peut pas être envoyé pour le moment.";
      return;
    }

    submitButton.disabled = true;
    contactStatus.textContent = "Envoi en cours…";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
      });
      const result = await response.json();

      if (!response.ok) {
        contactStatus.textContent = result.error || "L’envoi a échoué. Réessayez plus tard.";
        return;
      }

      contactForm.reset();
      contactStatus.textContent = result.message;
    } catch (error) {
      console.error("Contact form request failed.", error);
      contactStatus.textContent = "Impossible d’envoyer le message. Réessayez plus tard.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
