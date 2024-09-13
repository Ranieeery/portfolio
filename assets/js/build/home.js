import { createElement } from "../utils.js";

export function createHomeSection() {
  const section = createElement("section", ["home", "section"], { id: "home" });

  const container = createElement("div", [
    "home__container",
    "container",
    "grid",
  ]);
  const content = createElement("div", ["home__content", "grid"]);

  const social = createElement("div", ["home__social"]);
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/ranierygoulart/",
      icon: ["uil", "uil-linkedin"],
    },
    { href: "https://github.com/Ranieeery", icon: ["uil", "uil-github"] },
    {
      href: "https://www.instagram.com/ranierygoulart/",
      icon: ["uil", "uil-instagram"],
    },
  ];

  socialLinks.forEach((link) => {
    const anchor = createElement("a", ["home__social-icon"], {
      href: link.href,
      target: "_blank",
    });
    const icon = createElement("i", link.icon);
    anchor.appendChild(icon);
    social.appendChild(anchor);
  });

  const imgDiv = createElement("div", ["home__img"]);

  imgDiv.classList.add("home__img");
  imgDiv.innerHTML = `
    <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <mask id="mask0" mask-type="alpha">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
      </mask>
      <g mask="url(#mask0)">
        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
        <image class="home__blob-img" x="18" y="22" xlink:href="assets/images/typing.svg"/>
      </g>
    </svg>
  `;

  const homeData = createElement("div", ["home__data"]);
  const title = createElement("h1", ["home__title"]);
  title.textContent = "Raniery Meireles";
  const subtitle = createElement("h3", ["home__subtitle"]);
  subtitle.textContent = "Desenvolvedor Fullstack";
  const description = createElement("p", ["home__description"]);
  description.textContent =
    "Estudante de Ciência da Computação apaixonado por tecnologia e programação.";
  const button = createElement("a", ["button", "button--flex"], {
    href: "#contact",
  });
  button.innerHTML = 'Contato <i class="uil uil-message button__icon"></i>';

  homeData.appendChild(title);
  homeData.appendChild(subtitle);
  homeData.appendChild(description);
  homeData.appendChild(button);

  const scrollDiv = createElement("div", ["home__scroll"]);
  const scrollButton = createElement(
    "a",
    ["home__scroll-button", "button--flex"],
    { href: "#about" }
  );
  scrollButton.innerHTML = `
    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
    <span class="home__scroll-name">Desça para ver mais</span>
    <i class="uil uil-arrow-down home__scroll-arrow"></i>
  `;
  scrollDiv.appendChild(scrollButton);

  content.appendChild(social);
  content.appendChild(imgDiv);
  content.appendChild(homeData);
  container.appendChild(content);
  container.appendChild(scrollDiv);
  section.appendChild(container);

  return section;
}
