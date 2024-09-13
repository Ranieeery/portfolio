function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
  
    const footerBg = document.createElement("div");
    footerBg.classList.add("footer__bg");
  
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer__container", "container", "grid");
  
    const alignText = document.createElement("div");
    alignText.classList.add("align--text");
  
    const title = document.createElement("h1");
    title.classList.add("footer__title");
    title.innerHTML = "&#60;/Raniery&#62;";
  
    const subtitle = document.createElement("span");
    subtitle.classList.add("footer__subtitle");
    subtitle.textContent = "Desenvolvedor Web";
  
    alignText.appendChild(title);
    alignText.appendChild(subtitle);
  
    const footerLinks = document.createElement("ul");
    footerLinks.classList.add("footer__links");
  
    const links = [
      { href: "#home", text: "Início" },
      { href: "#about", text: "Sobre" },
      { href: "#portfolio", text: "Portfólio" },
      { href: "#contact", text: "Contato" },
    ];
  
    links.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.href;
      a.classList.add("footer__link");
      a.textContent = item.text;
      li.appendChild(a);
      footerLinks.appendChild(li);
    });
  
    const footerSocials = document.createElement("div");
    footerSocials.classList.add("footer__socials");
  
    const socialLinks = [
      {
        href: "https://www.linkedin.com/in/ranierygoulart/",
        icon: "uil uil-linkedin",
      },
      { href: "https://github.com/Ranieeery", icon: "uil uil-github" },
      {
        href: "https://www.instagram.com/ranierygoulart/",
        icon: "uil uil-instagram",
      },
    ];
  
    socialLinks.forEach((item) => {
      const a = document.createElement("a");
      a.href = item.href;
      a.target = "_blank";
      a.classList.add("footer__social");
  
      const i = document.createElement("i");
      i.className = item.icon;
  
      a.appendChild(i);
      footerSocials.appendChild(a);
    });
  
    const copyText = document.createElement("p");
    copyText.classList.add("footer__copy");
    copyText.innerHTML = "&#169; Raniery. Todos os direitos reservados";
  
    footerContainer.appendChild(alignText);
    footerContainer.appendChild(footerLinks);
    footerContainer.appendChild(footerSocials);
  
    footerBg.appendChild(footerContainer);
    footerBg.appendChild(copyText);
    footer.appendChild(footerBg);
  
    document.body.appendChild(footer);
  }
  