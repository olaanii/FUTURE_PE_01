const toneContent = {
  friendly: {
    headline: "Take a Real Break and Feel Refreshed Again.",
    sub: "Shalom Day Spa in Adama helps busy women and professionals relax, recharge, and feel better with treatments tailored to what they need most.",
    intro:
      "When life gets busy, stress builds up fast in your body and mind. Book your session this week and return to your routine feeling lighter, calmer, and more balanced."
  },
  professional: {
    headline: "Restore Energy and Comfort with Personalized Spa Care.",
    sub: "Shalom Day Spa in Adama supports women and professionals with tailored wellness treatments designed to reduce stress and improve daily well-being.",
    intro:
      "Each session is adjusted for comfort and effectiveness based on your current condition. Schedule your preferred appointment time and recover with confidence."
  },
  premium: {
    headline: "Experience Calm Restoration in Adama.",
    sub: "Shalom Day Spa offers personalized wellness treatments for women and professionals seeking refined care, deep relaxation, and lasting renewal.",
    intro:
      "Each treatment is thoughtfully tailored in a calm, premium setting, helping you return to your day feeling composed, restored, and renewed."
  },
  confident: {
    headline: "Feel Better Fast with Personalized Spa Care.",
    sub: "Shalom Day Spa in Adama helps busy clients reduce stress and restore energy through clear, tailored wellness treatments.",
    intro:
      "You get focused care, experienced therapists, and clear action steps. Book now and step back into your week feeling physically lighter and mentally clearer."
  }
};

const output = document.getElementById("toneOutput");
const toneButtons = document.querySelectorAll(".tone-btn");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

function renderTone(toneKey) {
  if (!output || !toneContent[toneKey]) {
    return;
  }

  const content = toneContent[toneKey];
  output.innerHTML = `
    <h3>${content.headline}</h3>
    <p><strong>Sub-headline:</strong> ${content.sub}</p>
    <p>${content.intro}</p>
  `;
}

toneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toneButtons.forEach((candidate) => {
      candidate.classList.remove("active");
      candidate.setAttribute("aria-selected", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderTone(button.dataset.tone);
  });
});

if (bookingForm && formMessage) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formMessage.textContent = "Thank you, your booking request has been received. We will contact you shortly to confirm your appointment time.";
    bookingForm.reset();
  });
}

renderTone("friendly");
