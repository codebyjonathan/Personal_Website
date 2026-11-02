const languageButtons = document.querySelectorAll("[data-language]");
const translatableElements = document.querySelectorAll("[data-en][data-es]");

function setLanguage(language) {
  document.documentElement.lang = language;

  for (const element of translatableElements) {
    element.textContent = element.dataset[language];
  }

  for (const button of languageButtons) {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }
}

for (const button of languageButtons) {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
}

document.querySelector("#year").textContent = new Date().getFullYear();