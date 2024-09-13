import { createElement } from "../utils.js";

export function createContactSection() {
  const section = createElement("section", ["contact", "section"], {
    id: "contact",
  });

  const title = createElement("h2", ["section__title"]);
  title.textContent = "Contato";

  const subtitle = createElement("span", ["section__subtitle"]);
  subtitle.textContent = "Entre em contato para conversarmos";

  const contactBg = createElement("div", ["contact__bg"]);

  const projectContainer = createElement("div", [
    "project__container",
    "container",
    "grid",
  ]);

  const projectData = createElement("div", ["project__data"]);

  const contactContainer = createElement("div", [
    "contact__container",
    "container",
    "grid",
  ]);

  const contactInfos = [
    {
      icon: ["uil", "uil-phone", "contact__icon"],
      title: "Telefone (Celular)",
      subtitle: "+55 (31) 9 9197-4503",
    },
    {
      icon: ["uil", "uil-envelope", "contact__icon"],
      title: "E-mail pessoal",
      subtitle: "raniery2003@hotmail.com",
    },
    {
      icon: ["uil", "uil-map-marker", "contact__icon"],
      title: "Localização",
      subtitle: "Contagem, MG",
    },
  ];

  contactInfos.forEach((info) => {
    const contactInfo = createElement("div", ["contact__information"]);
    const icon = createElement("i", info.icon);
    const infoTitle = createElement("h3", ["contact__title"]);
    infoTitle.textContent = info.title;

    const infoSubtitle = createElement("span", ["contact__subtitle"]);
    infoSubtitle.textContent = info.subtitle;

    const infoContainer = createElement("div");
    infoContainer.appendChild(infoTitle);
    infoContainer.appendChild(infoSubtitle);

    contactInfo.appendChild(icon);
    contactInfo.appendChild(infoContainer);

    contactContainer.appendChild(contactInfo);
  });

  const contactButton = createElement(
    "a",
    ["button", "button--flex", "button--white", "project__button"],
    {
      href: "mailto:raniery2003@hotmail.com",
      target: "_blank",
    }
  );
  contactButton.innerHTML = `Entrar em contato <i class="uil uil-message project__icon button__icon"></i>`;

  projectData.appendChild(contactContainer);
  projectData.appendChild(contactButton);

  const projectImage = createElement("img", ["project__img"], {
    src: "assets/images/contact.svg",
    alt: "",
  });

  projectContainer.appendChild(projectData);
  projectContainer.appendChild(projectImage);

  contactBg.appendChild(projectContainer);

  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(contactBg);

  return section;
}
