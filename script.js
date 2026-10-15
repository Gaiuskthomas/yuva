// GOOGLE FORMS SETUP:
// 1. In Google Forms, click Send, then copy the responder link (usually ends in /viewform).
// 2. Paste the registration form URL between the quotes after registration:.
// 3. Paste the suggestions form URL between the quotes after suggestions:.
// 4. Save this file and upload the complete outputs folder to your website host.
const FORM_LINKS = {
  registration: "https://docs.google.com/forms/d/e/1FAIpQLSdL7UsXW8APgwDEUnOe1_ydG_uJMkc4WBIdyMTZULlCRD_qnA/viewform?usp=sharing&ouid=107563621352351800816", // Example: "https://docs.google.com/forms/d/e/FORM_ID/viewform"
  suggestions: "https://docs.google.com/forms/d/e/1FAIpQLSdL7UsXW8APgwDEUnOe1_ydG_uJMkc4WBIdyMTZULlCRD_qnA/viewform?usp=sharing&ouid=107563621352351800816" // Example: "https://docs.google.com/forms/d/e/FORM_ID/viewform"
};

for (const [key, selector] of [["registration", "[data-register]"], ["suggestions", "[data-suggestions]"]]) {
  const url = FORM_LINKS[key].trim();
  document.querySelectorAll(selector).forEach((link) => {
    if (url) {
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.removeAttribute("aria-disabled");
    } else {
      link.href = "#";
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && event.target.closest("a").getAttribute("aria-disabled") !== "true") {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});
