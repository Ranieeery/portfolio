function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  header.id = "header";

  const nav = document.createElement("nav");
  nav.classList.add("nav", "container");

  const logo = document.createElement("a");
  logo.href = "#";
  logo.classList.add("nav__logo");
  logo.innerHTML = "&#60;Raniery&#62;";

  const menu = document.createElement("div");
  menu.classList.add("nav__menu");
  menu.id = "nav-menu";

  const ul = document.createElement("ul");
  ul.classList.add("nav__list", "grid");

  const menuItems = [
    { href: "#home", icon: "uil uil-estate", text: "Home", active: true },
    { href: "#about", icon: "uil uil-user", text: "Sobre" },
    { href: "#skills", icon: "uil uil-books", text: "Skills" },
    { href: "#portfolio", icon: "uil uil-folder", text: "Portfólio" },
    { href: "#contact", icon: "uil uil-at", text: "Contato" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("nav__item");

    const a = document.createElement("a");
    a.href = item.href;
    a.classList.add("nav__link");
    if (item.active) a.classList.add("active-link");
    a.innerHTML = `<i class="${item.icon} nav__icon"></i> ${item.text}`;

    li.appendChild(a);
    ul.appendChild(li);
  });

  menu.appendChild(ul);

  const navClose = document.createElement("i");
  navClose.classList.add("uil", "uil-times", "nav__close");
  navClose.id = "nav-close";
  menu.appendChild(navClose);

  const navBtns = document.createElement("div");
  navBtns.classList.add("nav__btns");

  const themeBtn = document.createElement("i");
  themeBtn.classList.add("uil", "uil-moon", "change-theme");
  themeBtn.id = "theme-button";

  const toggleBtn = document.createElement("div");
  toggleBtn.classList.add("nav__toggle");
  toggleBtn.id = "nav-toggle";

  const toggleIcon = document.createElement("i");
  toggleIcon.classList.add("uil", "uil-apps");
  toggleBtn.appendChild(toggleIcon);

  navBtns.appendChild(themeBtn);
  navBtns.appendChild(toggleBtn);

  nav.appendChild(logo);
  nav.appendChild(menu);
  nav.appendChild(navBtns);

  header.appendChild(nav);

  document.body.prepend(header);
}

document.addEventListener("DOMContentLoaded", createHeader);
