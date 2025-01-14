import * as SimpleIcons from "simple-icons";
import type { SimpleIcon } from "simple-icons";

interface Skill {
    name: string;
    icon: SimpleIcon;
}

interface SkillCategory {
    category: string;
    icon: string[];
    skills: Skill[];
}

interface CustomIcon {
    title: string;
    slug: string;
    path: string;
    svg: string;
    source: string;
    hex: string;
}

interface IconLike {
    path?: string;
    hex?: string;
    title?: string;
    slug?: string;
}

type SimpleIconsType = typeof SimpleIcons;
type SimpleIconKey = keyof SimpleIconsType;

const getIcon = (iconName: string): SimpleIcon | CustomIcon => {
    // Try SimpleIcons first
    const simpleIconKey = `si${iconName}` as SimpleIconKey;
    const simpleIcon = SimpleIcons[simpleIconKey];
    if (isSimpleIcon(simpleIcon)) {
        return simpleIcon;
    }

    const customIcon = customIcons[iconName.toLowerCase()];
    if (customIcon) {
        return customIcon;
    }

    return fallbackIcon;
};

const isSimpleIcon = (icon: unknown): icon is SimpleIcon => {
    const iconLike = icon as IconLike;
    return Boolean(
        iconLike &&
        typeof iconLike === 'object' &&
        'path' in iconLike &&
        'hex' in iconLike &&
        'title' in iconLike &&
        'slug' in iconLike
    );
};

const fallbackIcon: CustomIcon = {
    title: "Default",
    slug: "default",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    svg: `<svg role="img" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>`,
    source: "Custom",
    hex: "000000"
};

const customIcons: Record<string, CustomIcon> = {
    angularjs: {
        title: "AngularJS",
        slug: "angularjs",
        path: "M12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.934l1.17 2.92h2.167L12 4.21zm1.698 8.33h-3.396L12 8.45l1.698 4.09z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000"
    },
};

const skillsData: SkillCategory[] = [
    {
        category: "Linguagens",
        icon: ["uil", "uil-brackets-curly", "skills__icon"],
        skills: [
            { name: "Java", icon: getIcon("java") },
            { name: "JavaScript", icon: SimpleIcons.siJavascript },
            { name: "TypeScript", icon: SimpleIcons.siTypescript },
            { name: "Python", icon: SimpleIcons.siPython },
            { name: "Ruby", icon: SimpleIcons.siRuby },
            { name: "C#", icon: getIcon("csharp") },
            { name: "SQL", icon: getIcon("sql") },
            { name: "Shell Script", icon: SimpleIcons.siGnubash },
        ],
    },
    {
        category: "Ferramentas",
        icon: ["uil", "uil-server", "skills__icon"],
        skills: [
            { name: "Spring Boot", icon: SimpleIcons.siSpring },
            { name: "Hibernate", icon: SimpleIcons.siHibernate },
            { name: "JUnit", icon: SimpleIcons.siJunit5 },
            { name: "Mockito", icon: SimpleIcons.siMocha},
            { name: "Node.js", icon: SimpleIcons.siNodedotjs },
            { name: "Prisma", icon: SimpleIcons.siPrisma },
            { name: "MySQL", icon: getIcon("mysql") },
            { name: "PostgreSQL", icon: SimpleIcons.siPostgresql },
            { name: "Oracle", icon: getIcon("oracle") },
            { name: "MongoDB", icon: SimpleIcons.siMongodb },
            { name: "Angular", icon: SimpleIcons.siAngular },
            { name: "React.js", icon: SimpleIcons.siReact },
            { name: "Next.js", icon: SimpleIcons.siNextdotjs },
            { name: "AngularJS", icon: getIcon("angularjs") },
            { name: "Dotnet", icon: SimpleIcons.siDotnet },
        ],
    },
    {
        category: "Ferramentas",
        icon: ["uil", "uil-file-network", "skills__icon"],
        skills: [
            { name: "AWS", icon: SimpleIcons.siAmazonwebservices },
            { name: "Docker", icon: SimpleIcons.siDocker },
            { name: "Git", icon: SimpleIcons.siGit },
            { name: "Tailwind CSS", icon: SimpleIcons.siTailwindcss },
            { name: "Maven", icon: SimpleIcons.siApachemaven },
            { name: "Gradle", icon: SimpleIcons.siGradle },
            { name: "Linux", icon: SimpleIcons.siLinux },
            { name: "RabbitMQ", icon: SimpleIcons.siRabbitmq },
            { name: "Kafka", icon: SimpleIcons.siApachekafka },
            { name: "Flyway", icon: SimpleIcons.siFlyway },
        ],
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
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        className="skill__icon"
                                        fill="currentColor"
                                    >
                                        <path d={skill.icon.path} />
                                    </svg>
                                    {skill.name}
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
