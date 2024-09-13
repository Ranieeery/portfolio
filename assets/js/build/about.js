import { createElement } from '../utils.js';

export function createAboutSection() {
    const section = createElement('section', ['about', 'section'], { id: 'about' });

    const title = createElement('h2', ['section__title']);
    title.textContent = 'Sobre mim';
    const subtitle = createElement('span', ['section__subtitle']);
    subtitle.textContent = 'Introdução';

    const container = createElement('div', ['about__container', 'container', 'grid']);
    const img = createElement('img', ['about__img'], { src: 'assets/images/intro.svg', alt: '' });

    const aboutData = createElement('div', ['about__data']);
    const description = createElement('p', ['about__description']);
    description.textContent = 'Desenvolvedor Web com conhecimento em JavaScript, HTML, CSS, Java, SQL, PostgreSQL, Git, Docker e Linux. Atualmente cursando Ciência da Computação e estudando Spring Framework e Angular.';

    const aboutInfo = createElement('div', ['about__info']);
    const infoItems = [
        { title: 'Sem', subtitle: 'experiência </br>na área' },
        { title: '03+', subtitle: 'projetos </br>completados' },
        { title: '02', subtitle: 'empresas </br>trabalhadas' }
    ];

    infoItems.forEach(item => {
        const info = createElement('div');
        const infoTitle = createElement('span', ['about__info-title']);
        infoTitle.textContent = item.title;
        const infoName = createElement('span', ['about__info-name']);
        infoName.innerHTML = `${item.subtitle}`;
        info.appendChild(infoTitle);
        info.appendChild(infoName);
        aboutInfo.appendChild(info);
    });

    const buttons = createElement('div', ['about__buttons']);
    const button = createElement('a', ['button', 'button--flex'], {
        href: 'assets/pdf/Currículo - Raniery Meireles Goulart.pdf',
        download: ''
    });
    button.innerHTML = `Baixar currículo<i class="uil uil-download-alt button__icon"></i>`;

    buttons.appendChild(button);
    aboutData.appendChild(description);
    aboutData.appendChild(aboutInfo);
    aboutData.appendChild(buttons);

    container.appendChild(img);
    container.appendChild(aboutData);

    section.appendChild(title);
    section.appendChild(subtitle);
    section.appendChild(container);

    return section;
}
