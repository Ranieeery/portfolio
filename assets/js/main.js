import { createHomeSection } from "./build/home.js";
import { createAboutSection } from "./build/about.js";
import { createSkillsSection } from "./build/skills.js";
import { createQualificationSection } from "./build/qualification.js";
import { createPortfolioSection } from "./build/portfolio.js";
import { createContactSection } from "./build/contact.js";
import { createFooter } from "./build/footer.js";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.createElement("main");
  main.classList.add("main");

  document.body.appendChild(main);

  main.appendChild(createHomeSection());
  main.appendChild(createAboutSection());
  main.appendChild(createSkillsSection());
  main.appendChild(createQualificationSection());
  main.appendChild(createPortfolioSection());
  main.appendChild(createContactSection());

  createFooter();
});
