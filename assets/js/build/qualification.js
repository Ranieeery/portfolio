import { createElement } from '../utils.js';

export function createQualificationSection() {
    const section = createElement('section', ['qualification', 'section']);

    const title = createElement('h2', ['section__title']);
    title.textContent = 'Qualificações';
    const subtitle = createElement('span', ['section__subtitle']);
    subtitle.textContent = 'Minha jornada pessoal';

    const container = createElement('div', ['qualification__container', 'container']);

    const tabs = createElement('div', ['qualification__tabs']);

    const educationTab = createElement('div', ['qualification__button', 'button--flex', 'qualification__active'], {
        'data-target': '#education'
    });
    educationTab.innerHTML = `<i class="uil uil-graduation-cap qualification__icon"></i> Educação`;

    const workTab = createElement('div', ['qualification__button', 'button--flex'], {
        'data-target': '#work'
    });
    workTab.innerHTML = `<i class="uil uil-briefcase-alt qualification__icon"></i> Trabalho`;

    tabs.appendChild(educationTab);
    tabs.appendChild(workTab);

    const sectionsContainer = createElement('div', ['qualification__sections']);

    const createQualificationItem = (titleText, subtitleText, dateRange, index, isLast) => {
        const qualificationData = createElement('div', ['qualification__data']);

        const qualificationInfo = createElement('div');
        const title = createElement('h3', ['qualification__title']);
        title.textContent = titleText;
        const subtitle = createElement('span', ['qualification__subtitle']);
        subtitle.textContent = subtitleText;

        const calendar = createElement('div', ['qualification__calendar']);
        calendar.innerHTML = `<i class="uil uil-calendar-alt"></i> ${dateRange}`;

        qualificationInfo.appendChild(title);
        qualificationInfo.appendChild(subtitle);
        qualificationInfo.appendChild(calendar);

        const rounderWrapper = createElement('div');
        if (isLast) {
            rounderWrapper.innerHTML = `<span class="qualification__rounder"></span>`;
        } else {
            rounderWrapper.innerHTML = `<span class="qualification__rounder"></span><span class="qualification__line"></span>`;
        }

        if (index % 2 === 1) {
            const emptyDiv = createElement('div');
            qualificationData.appendChild(emptyDiv);
            qualificationData.appendChild(rounderWrapper);
            qualificationData.appendChild(qualificationInfo);
        } else {
            qualificationData.appendChild(qualificationInfo);
            qualificationData.appendChild(rounderWrapper);
        }

        return qualificationData;
    };

    const createQualificationStructure = (items) => {
        return items.map((item, index) => {
            const isLast = index === items.length - 1;
            return createQualificationItem(item.title, item.subtitle, item.dateRange, index, isLast);
        });
    };

    const educationContent = createElement('div', ['qualification__content', 'qualification__active'], {
        'data-content': '',
        'id': 'education'
    });

    const educationItems = [
        { title: 'Ciência da Computação', subtitle: 'Uniamérica', dateRange: 'jan 2023 - dez 2026' },
        { title: 'Desenvolvimento Web', subtitle: 'StartSe University', dateRange: 'set 2022 - dez 2022' },
        { title: 'Técnico em Eletroeletrônica', subtitle: 'CEFET-MG', dateRange: 'fev 2018 - mar 2021' }
    ];

    const educationStructure = createQualificationStructure(educationItems);
    educationStructure.forEach(item => educationContent.appendChild(item));

    const workContent = createElement('div', ['qualification__content'], {
        'data-content': '',
        'id': 'work'
    });

    const workItems = [
        { title: 'Analista de Produto', subtitle: 'ACT Digital', dateRange: 'jun 2022 - jan 2023' },
        { title: 'Técnico de Instrumentação', subtitle: 'MSX International', dateRange: 'ago 2021 - nov 2021' }
    ];

    const workStructure = createQualificationStructure(workItems);
    workStructure.forEach(item => workContent.appendChild(item));

    sectionsContainer.appendChild(educationContent);
    sectionsContainer.appendChild(workContent);

    container.appendChild(tabs);
    container.appendChild(sectionsContainer);

    section.appendChild(title);
    section.appendChild(subtitle);
    section.appendChild(container);

    setTimeout(() => {
        const qualificationButtons = document.querySelectorAll(".qualification__button");
        qualificationButtons.forEach((button) => {
            button.addEventListener("click", function () {
                document.querySelector('.qualification__button.qualification__active').classList.remove('qualification__active');
                this.classList.add('qualification__active');
                document.querySelector('.qualification__content.qualification__active').classList.remove('qualification__active');
                document.querySelector(this.dataset.target).classList.add('qualification__active');
            });
        });
    }, 100);

    return section;
}
