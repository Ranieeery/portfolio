const skillsData = [
    {
        category: "Frontend",
        icon: ["uil", "uil-brackets-curly", "skills__icon"],
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Sass",
            "Tailwind CSS",
            "Angular",
            "AngularJs"
        ],
    },
    {
        category: "Backend",
        icon: ["uil", "uil-server", "skills__icon"],
        skills: [
            "Java",
            "Spring Boot",
            "Node.js",
            "Python",
            "PostgreSQL",
            "MongoDB",
        ],
    },
    {
        category: "Ferramentas",
        icon: ["uil", "uil-file-network", "skills__icon"],
        skills: ["Git", "Docker", "AWS", "Linux", "Gradle", "Maven"],
    },
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Meu nível técnico</span>

            <div className="skills__container container">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills__category">
                        <div className="skills__header">
                            <i className={category.icon.join(" ")}></i>
                            <h3 className="skills__category-title">
                                {category.category}
                            </h3>
                        </div>
                        <div className="skills__list">
                            {category.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="skill__badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
