import { createElement } from "../utils.js";

export function createPortfolioSection() {
  const section = createElement("section", ["services", "section"], {
    id: "portfolio",
  });

  const title = createElement("h2", ["section__title"]);
  title.textContent = "Portfólio";
  const subtitle = createElement("span", ["section__subtitle"]);
  subtitle.textContent = "Projetos realizados e tecnologias utilizadas";

  const container = createElement("div", [
    "services__container",
    "container",
    "grid",
  ]);

  const createServiceItem = (
    iconClasses,
    titleText,
    projectLink,
    modalContent
  ) => {
    const serviceContent = createElement("div", ["services__content"]);

    const serviceHeader = createElement("div");
    const serviceIcon = createElement("i", iconClasses);
    const serviceTitle = createElement("h3", ["services__title"]);
    serviceTitle.innerHTML = titleText;

    serviceHeader.appendChild(serviceIcon);
    serviceHeader.appendChild(serviceTitle);

    const button = createElement("span", [
      "button",
      "button--flex",
      "button--small",
      "button--link",
      "services__button",
    ]);
    button.innerHTML = `Ver mais <i class="uil uil-arrow-right button__icon"></i>`;

    const modal = createElement("div", ["services__modal"]);
    const modalContentDiv = createElement("div", ["services__modal-content"]);

    const modalTitle = createElement("h4", ["services__modal-title"]);
    modalTitle.innerHTML = modalContent.title;

    const modalClose = createElement("i", [
      "uil",
      "uil-times",
      "services__modal-close",
    ]);

    const modalServices = createElement("ul", [
      "services__modal-services",
      "grid",
    ]);
    modalContent.details.forEach((detail) => {
      const listItem = createElement("li", ["services__modal-service"]);
      listItem.innerHTML = `<i class="uil uil-check-circle services__modal-icon"></i><p>${detail}</p>`;
      modalServices.appendChild(listItem);
    });

    const projectButton = createElement("span", [
      "button",
      "button--flex",
      "button--small",
      "button--link",
    ]);
    projectButton.innerHTML = `<a href="${projectLink}" target="_blank">Projeto</a> <i class="uil uil-arrow-right button__icon"></i>`;

    modalContentDiv.appendChild(modalTitle);
    modalContentDiv.appendChild(modalClose);
    modalContentDiv.appendChild(modalServices);
    modalContentDiv.appendChild(projectButton);
    modal.appendChild(modalContentDiv);

    serviceContent.appendChild(serviceHeader);
    serviceContent.appendChild(button);
    serviceContent.appendChild(modal);

    return serviceContent;
  };

  const serviceItems = [
    createServiceItem(
      ["uil", "uil-arrow", "services__icon"],
      "Challenge<br />Decodificador",
      "https://ranieeery.github.io/Dencoder/",
      {
        title: "Desenvolvimento<br />Frontend",
        details: [
          "Manipulação do DOM através de JavaScript",
          "Pseudo-elementos em CSS",
          "Emmet Abbreviation em HTML",
        ],
      }
    ),
    createServiceItem(
      ["uil", "uil-letter-japanese-a", "services__icon"],
      "Visor<br />Pokédex",
      "https://ranieeery.github.io/pokedex/",
      {
        title: "Pokédex (Pokémon)",
        details: [
          "Consumo de APIs com JavaScript",
          "Manipulação do DOM pelo usuário",
          "Uso de pseudo-classes em CSS",
          "Atributos de renderização do script na página HTML",
        ],
      }
    ),
    createServiceItem(
      ["uil", "uil-money-bill", "services__icon"],
      "Banco<br />Digital",
      "https://github.com/Ranieeery/Desafio-banco-POO",
      {
        title: "Banco em Java",
        details: [
          "Programação Orientada a Objetos (POO)",
          "Uso de Interface",
          "Utilização de bibliotecas para complementar",
          "Métodos abstratos",
        ],
      }
    ),
  ];

  serviceItems.forEach((item) => container.appendChild(item));

  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(container);

  setTimeout(() => {
    const serviceButtons = document.querySelectorAll(".services__button");
    const serviceModals = document.querySelectorAll(".services__modal");
    const closeButtons = document.querySelectorAll(".services__modal-close");

    serviceButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        serviceModals[index].classList.add("active-modal");
      });
    });

    closeButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        serviceModals[index].classList.remove("active-modal");
      });
    });
  }, 100);

  return section;
}
