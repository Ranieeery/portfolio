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
            typeof iconLike === "object" &&
            "path" in iconLike &&
            "hex" in iconLike &&
            "title" in iconLike &&
            "slug" in iconLike
    );
};

const fallbackIcon: CustomIcon = {
    title: "Default",
    slug: "default",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
    source: "Custom",
    hex: "000000",
};

// All svg credits go to www.svgrepo.com, tysm ily
const customIcons: Record<string, CustomIcon> = {
    angularjs: {
        title: "AngularJS",
        slug: "angularjs",
        path: "M12 2l9.3 3.32-1.418 12.31L12 22l-7.882-4.37L2.7 5.32 12 2zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.934l1.17 2.92h2.167L12 4.21zm1.698 8.33h-3.396L12 8.45l1.698 4.09z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    csharp: {
        title: "C#",
        slug: "csharp",
        path: "M12 24a12 12 0 1 1 0-24 12 12 0 0 1 0 24Zm-2.574-7.12a5.55 5.55 0 0 0 1.985-.38v-1.181a4.5 4.5 0 0 1-2.25.566 3.44 3.44 0 0 1-2.625-1.087 4.1 4.1 0 0 1-1.012-2.906 3.9 3.9 0 0 1 .945-2.754 3.217 3.217 0 0 1 2.482-1.023 4.657 4.657 0 0 1 2.464.634l-.004-1.08a5.543 5.543 0 0 0-2.625-.555 4.21 4.21 0 0 0-3.228 1.297 4.793 4.793 0 0 0-1.212 3.409 5.021 5.021 0 0 0 1.365 3.663 4.632 4.632 0 0 0 3.473 1.392l.12.004.122.001Zm5.863-.155h.836l-.555-2.652h1.661l.567 2.652h.81l-.555-2.652 1.732.004-.15-.697H17.91l-.412-1.98h1.852l-.176-.698h-1.816l-.58-2.625h-.83l.567 2.625h-1.65l-.555-2.625h-.81l.555 2.625h-1.74l.131.698h1.748l.401 1.976h-1.826l.138.697h1.826l.556 2.652Zm.142-3.345L15 11.4h1.673l.423 1.98h-1.665Z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    java: {
        title: "Java",
        slug: "java",
        path: "M8.142 18.554s-.99.562.689.722c2.02.24 3.097.2 5.334-.2.45.256.925.47 1.42.641-5.033 2.004-11.401-.12-7.443-1.163Zm-.644-2.604s-1.076.76.602.922c2.194.2 3.915.24 6.885-.32.289.273.642.479 1.032.6-6.066 1.684-12.864.16-8.52-1.202Zm11.875 4.567s.73.561-.818 1.002c-2.882.803-12.09 1.043-14.67 0-.904-.36.816-.881 1.368-.961.56-.12.862-.12.862-.12-.99-.641-6.583 1.322-2.84 1.882 10.283 1.563 18.759-.68 16.091-1.803h.007ZM8.608 13.224s-4.69 1.043-1.679 1.403c1.291.16 3.83.12 6.196-.04 1.936-.16 3.873-.48 3.873-.48s-.689.28-1.162.56c-4.775 1.163-13.94.642-11.315-.56 2.237-1.002 4.087-.881 4.087-.881v-.002Zm8.39 4.368c4.819-2.325 2.582-4.567 1.032-4.288-.386.08-.56.16-.56.16s.13-.24.43-.32c3.056-1.001 5.465 3.006-.99 4.568 0 0 .043-.04.086-.12h.002Zm-7.915 6.332c4.646.28 11.745-.16 11.917-2.205 0 0-.344.802-3.829 1.402-3.958.681-8.863.6-11.746.16 0 0 .603.482 3.658.643ZM14.08 0s2.668 2.525-2.538 6.332c-4.174 3.085-.946 4.848 0 6.852-2.453-2.043-4.216-3.847-3.012-5.53C10.294 5.17 15.156 3.975 14.08 0Zm-1.37 11.501c1.248 1.323-.344 2.525-.344 2.525s3.184-1.523 1.72-3.407c-1.332-1.803-2.367-2.685 3.227-5.69 0 0-8.82 2.044-4.603 6.572Z",
        svg: `<svg role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000",
    },
    sql: {
        title: "SQL",
        slug: "sql",
        path: "M10.002 0C4.482 0 .008 1.613.008 3.605v2.957c0 1.992 4.475 3.604 9.994 3.604 5.52 0 9.995-1.612 9.995-3.604V3.605C19.997 1.613 15.52 0 10.002 0Zm0 11.89c-5.27 0-9.614-1.472-9.994-3.338-.018.09 0 4.884 0 4.884 0 1.992 4.475 3.605 9.994 3.605 5.52 0 9.995-1.614 9.995-3.605 0 0 .01-4.795-.008-4.884-.38 1.866-4.718 3.338-9.987 3.338Zm9.985 3.621c-.38 1.865-4.715 3.337-9.985 3.337S.387 17.376.007 15.511v4.884C.007 22.387 4.483 24 10.002 24c5.52 0 9.995-1.614 9.995-3.605l-.01-4.884Z",
        svg: `<svg width="25" height="25 "role="img" viewBox="0 0 24 24"></svg>`,
        source: "Custom",
        hex: "000000", 
    },
    oracle: {
        title: "Oracle",
        slug: "oracle",
        path: "M16.223 16.357h-8.44c-2.674-.055-4.82-2.209-4.82-4.857S5.11 6.698 7.778 6.643h8.455c2.715 0 4.918 2.174 4.918 4.857 0 2.683-2.202 4.857-4.918 4.857h-.01ZM16.416 4H7.588C3.396 4.003 0 7.36 0 11.5c0 4.138 3.392 7.492 7.58 7.5h8.836c4.19-.006 7.584-3.362 7.584-7.5S20.605 4.006 16.416 4Z",
        svg: `<svg role="img" viewBox="0 0 15 15"></svg>`,
        source: "Custom",
        hex: "000000",
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
            { name: "Shell", icon: SimpleIcons.siGnubash },
            { name: "C", icon: SimpleIcons.siC },
            { name: "C++", icon: SimpleIcons.siCplusplus },
            { name: "HTML", icon: SimpleIcons.siHtml5 },
            { name: "CSS", icon: SimpleIcons.siCss3 },
        ],
    },
    {
        category: "Tecnologias & Frameworks",
        icon: ["uil", "uil-server", "skills__icon"],
        skills: [
            { name: "Spring Boot", icon: SimpleIcons.siSpring },
            { name: "Hibernate", icon: SimpleIcons.siHibernate },
            { name: "JUnit", icon: SimpleIcons.siJunit5 },
            { name: "Mockito", icon: SimpleIcons.siMocha },
            { name: "Node.js", icon: SimpleIcons.siNodedotjs },
            { name: "Prisma", icon: SimpleIcons.siPrisma },
            { name: "MySQL", icon: SimpleIcons.siMysql },
            { name: "PostgreSQL", icon: SimpleIcons.siPostgresql },
            { name: "Oracle", icon: getIcon("oracle") },
            { name: "MongoDB", icon: SimpleIcons.siMongodb },
            { name: "Angular", icon: SimpleIcons.siAngular },
            { name: "React.js", icon: SimpleIcons.siReact },
            { name: "Next.js", icon: SimpleIcons.siNextdotjs },
            { name: "AngularJS", icon: getIcon("angularjs") },
            { name: ".NET", icon: SimpleIcons.siDotnet },
        ],
    },
    {
        category: "DevOps & Cloud",
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
