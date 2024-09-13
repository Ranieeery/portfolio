import { createElement } from '../utils.js';

export function createSkillsSection() {
    // Criação da seção principal
    const section = createElement('section', ['skills', 'section'], { id: 'skills' });

    // Título e subtítulo
    const title = createElement('h2', ['section__title']);
    title.textContent = 'Skills';
    const subtitle = createElement('span', ['section__subtitle']);
    subtitle.textContent = 'Meu nível técnico (júnior)';

    // Criação do container principal
    const container = createElement('div', ['skills__container', 'container', 'grid']);
    
    // Div que contém todas as categorias de skills
    const skillCategoriesContainer = createElement('div', []);

    // Função para criar uma skill
    const createSkill = (name, percentage, className) => {
        const skillData = createElement('div', ['skills__data']);
        const titles = createElement('div', ['skills__titles']);
        
        const skillName = createElement('h3', ['skills__name']);
        skillName.textContent = name;
        const skillNumber = createElement('span', ['skills__number']);
        skillNumber.textContent = percentage;

        const skillBar = createElement('div', ['skills__bar']);
        const skillPercentage = createElement('span', ['skills__percentage', className]);

        titles.appendChild(skillName);
        titles.appendChild(skillNumber);
        skillBar.appendChild(skillPercentage);
        skillData.appendChild(titles);
        skillData.appendChild(skillBar);

        return skillData;
    };

    // Função para criar uma categoria de skills (Frontend, Backend, etc.)
    const createSkillCategory = (iconClasses, titleText, isOpen, skills) => {
        const skillContent = createElement('div', ['skills__content', isOpen ? 'skills__open' : 'skills__close']);
        const skillHeader = createElement('div', ['skills__header']);
        
        const skillIcon = createElement('i', iconClasses); // Agora passando como array de classes
        const headerTitle = createElement('div');
        const categoryTitle = createElement('h1', ['skills__title']);
        categoryTitle.textContent = titleText;
        

        const arrowIcon = createElement('i', ['uil', 'uil-angle-down', 'skills__arrow']);

        headerTitle.appendChild(categoryTitle);
        
        skillHeader.appendChild(skillIcon);
        skillHeader.appendChild(headerTitle);
        skillHeader.appendChild(arrowIcon);
        
        const skillList = createElement('div', ['skills__list', 'grid']);
        skills.forEach(skill => {
            skillList.appendChild(createSkill(skill.name, skill.percentage, skill.className));
        });

        skillContent.appendChild(skillHeader);
        skillContent.appendChild(skillList);

        return skillContent;
    };

    // Criando categorias e suas respectivas skills
    const frontendSkills = createSkillCategory(['uil', 'uil-brackets-curly', 'skills__icon'], 'Desenvolvedor Frontend', true, [
        { name: 'HTML', percentage: '75%', className: 'skills__html' },
        { name: 'CSS', percentage: '60%', className: 'skills__css' },
        { name: 'JavaScript', percentage: '40%', className: 'skills__js' },
        { name: 'Angular', percentage: '10%', className: 'skills__angular' },
    ]);

    const backendSkills = createSkillCategory(['uil', 'uil-server', 'skills__icon'], 'Desenvolvedor Backend', false, [
        { name: 'Java', percentage: '80%', className: 'skills__java' },
        { name: 'Spring', percentage: '25%', className: 'skills__spring' },
        { name: 'Node JS', percentage: '10%', className: 'skills__node' },
        { name: 'Python', percentage: '40%', className: 'skills__python' },
        { name: 'PostgreSQL', percentage: '20%', className: 'skills__postgres' },
    ]);

    const toolsSkills = createSkillCategory(['uil', 'uil-file-network', 'skills__icon'], 'Ferramentas', false, [
        { name: 'AWS', percentage: '30%', className: 'skills__aws' },
        { name: 'Docker', percentage: '20%', className: 'skills__docker' },
        { name: 'Git', percentage: '70%', className: 'skills__git' },
        { name: 'GNU/Linux', percentage: '75%', className: 'skills__linux' },
        { name: 'Gradle', percentage: '40%', className: 'skills__gradle' },
        { name: 'Maven', percentage: '20%', className: 'skills__maven' },
    ]);

    // Adicionando as categorias ao container de skills
    skillCategoriesContainer.appendChild(frontendSkills);
    skillCategoriesContainer.appendChild(backendSkills);
    skillCategoriesContainer.appendChild(toolsSkills);

    // Adicionando todos os elementos à seção
    container.appendChild(skillCategoriesContainer);
    section.appendChild(title);
    section.appendChild(subtitle);
    section.appendChild(container);

    setTimeout(() => {
        const skillsHeader = document.querySelectorAll(".skills__header");
        skillsHeader.forEach((el) => {
          el.addEventListener("click", toggleSkills);
        });
      }, 100);  // Pequeno atraso para garantir que os elementos estejam no DOM
      

    return section;
}
