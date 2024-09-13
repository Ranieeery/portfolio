import { createElement } from "../utils.js";

export function createSkillsSection() {
  const section = createElement("section", ["skills", "section"], {
    id: "skills",
  });

  const title = createElement("h2", ["section__title"]);
  title.textContent = "Skills";
  const subtitle = createElement("span", ["section__subtitle"]);
  subtitle.textContent = "Meu nível técnico (júnior)";

  const container = createElement("div", [
    "skills__container",
    "container",
    "grid",
  ]);

  const skillCategoriesContainer = createElement("div", []);

  const createSkill = (name, percentage, className) => {
    const skillData = createElement("div", ["skills__data"]);
    const titles = createElement("div", ["skills__titles"]);

    const skillName = createElement("h3", ["skills__name"]);
    skillName.textContent = name;
    const skillNumber = createElement("span", ["skills__number"]);
    skillNumber.textContent = percentage;

    const skillBar = createElement("div", ["skills__bar"]);
    const skillPercentage = createElement("span", [
      "skills__percentage",
      className,
    ]);

    titles.appendChild(skillName);
    titles.appendChild(skillNumber);
    skillBar.appendChild(skillPercentage);
    skillData.appendChild(titles);
    skillData.appendChild(skillBar);

    return skillData;
  };

  const createSkillCategory = (iconClasses, titleText, isOpen, skills) => {
    const skillContent = createElement("div", [
      "skills__content",
      isOpen ? "skills__open" : "skills__close",
    ]);
    const skillHeader = createElement("div", ["skills__header"]);

    const skillIcon = createElement("i", iconClasses);
    const headerTitle = createElement("div");
    const categoryTitle = createElement("h1", ["skills__title"]);
    categoryTitle.textContent = titleText;

    const arrowIcon = createElement("i", [
      "uil",
      "uil-angle-down",
      "skills__arrow",
    ]);

    headerTitle.appendChild(categoryTitle);

    skillHeader.appendChild(skillIcon);
    skillHeader.appendChild(headerTitle);
    skillHeader.appendChild(arrowIcon);

    const skillList = createElement("div", ["skills__list", "grid"]);
    skills.forEach((skill) => {
      skillList.appendChild(
        createSkill(skill.name, skill.percentage, skill.className)
      );
    });

    skillContent.appendChild(skillHeader);
    skillContent.appendChild(skillList);

    return skillContent;
  };

  const frontendSkills = createSkillCategory(
    ["uil", "uil-brackets-curly", "skills__icon"],
    "Desenvolvedor Frontend",
    true,
    [
      { name: "HTML", percentage: "75%", className: "skills__html" },
      { name: "CSS", percentage: "60%", className: "skills__css" },
      { name: "JavaScript", percentage: "40%", className: "skills__js" },
      { name: "Angular", percentage: "10%", className: "skills__angular" },
    ]
  );

  const backendSkills = createSkillCategory(
    ["uil", "uil-server", "skills__icon"],
    "Desenvolvedor Backend",
    false,
    [
      { name: "Java", percentage: "80%", className: "skills__java" },
      { name: "Spring", percentage: "25%", className: "skills__spring" },
      { name: "Node JS", percentage: "10%", className: "skills__node" },
      { name: "Python", percentage: "40%", className: "skills__python" },
      { name: "PostgreSQL", percentage: "20%", className: "skills__postgres" },
    ]
  );

  const toolsSkills = createSkillCategory(
    ["uil", "uil-file-network", "skills__icon"],
    "Ferramentas",
    false,
    [
      { name: "AWS", percentage: "30%", className: "skills__aws" },
      { name: "Docker", percentage: "20%", className: "skills__docker" },
      { name: "Git", percentage: "70%", className: "skills__git" },
      { name: "GNU/Linux", percentage: "75%", className: "skills__linux" },
      { name: "Gradle", percentage: "40%", className: "skills__gradle" },
      { name: "Maven", percentage: "20%", className: "skills__maven" },
    ]
  );

  skillCategoriesContainer.appendChild(frontendSkills);
  skillCategoriesContainer.appendChild(backendSkills);
  skillCategoriesContainer.appendChild(toolsSkills);

  container.appendChild(skillCategoriesContainer);
  section.appendChild(title);
  section.appendChild(subtitle);
  section.appendChild(container);

  setTimeout(() => {
    const skillsHeader = document.querySelectorAll(".skills__header");
    skillsHeader.forEach((el) => {
      el.addEventListener("click", toggleSkills);
    });
  }, 100);

  return section;
}
