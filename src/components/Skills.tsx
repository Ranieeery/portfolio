"use client";

import {useState} from "react";

type Skill = {
    name: string;
    percentage: string;
    className: string;
};

type SkillCategory = {
    icon: string[];
    title: string;
    isOpen: boolean;
    skills: Skill[];
};

export default function Skills() {
    const [categories, setCategories] = useState<SkillCategory[]>([
        {
            icon: ["uil", "uil-brackets-curly", "skills__icon"],
            title: "Desenvolvedor Frontend",
            isOpen: true,
            skills: [
                {name: "HTML", percentage: "75%", className: "skills__html"},
                {name: "CSS", percentage: "60%", className: "skills__css"},
                {name: "JavaScript", percentage: "40%", className: "skills__js"},
                {name: "Angular", percentage: "10%", className: "skills__angular"},
            ],
        },
        {
            icon: ["uil", "uil-server", "skills__icon"],
            title: "Desenvolvedor Backend",
            isOpen: false,
            skills: [
                {name: "Java", percentage: "80%", className: "skills__java"},
                {name: "Spring", percentage: "25%", className: "skills__spring"},
                {name: "Node JS", percentage: "10%", className: "skills__node"},
                {name: "Python", percentage: "40%", className: "skills__python"},
                {name: "PostgreSQL", percentage: "20%", className: "skills__postgres"},
            ],
        },
        {
            icon: ["uil", "uil-file-network", "skills__icon"],
            title: "Ferramentas",
            isOpen: false,
            skills: [
                {name: "AWS", percentage: "30%", className: "skills__aws"},
                {name: "Docker", percentage: "20%", className: "skills__docker"},
                {name: "Git", percentage: "70%", className: "skills__git"},
                {name: "GNU/Linux", percentage: "75%", className: "skills__linux"},
                {name: "Gradle", percentage: "40%", className: "skills__gradle"},
                {name: "Maven", percentage: "20%", className: "skills__maven"},
            ],
        },
    ]);

    const toggleCategory = (index: number) => {
        setCategories((prev) =>
            prev.map((category, i) =>
                i === index
                    ? {...category, isOpen: !category.isOpen}
                    : category
            )
        );
    };

    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">
                Meu nível técnico (júnior)
            </span>

            <div className="skills__container container grid">
                <div>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`skills__content ${
                                category.isOpen
                                    ? "skills__open"
                                    : "skills__close"
                            }`}
                        >
                            <div
                                className="skills__header"
                                onClick={() => toggleCategory(index)}
                            >
                                <i className={category.icon.join(" ")}></i>
                                <div>
                                    <h1 className="skills__title">
                                        {category.title}
                                    </h1>
                                </div>
                                <i className="uil uil-angle-down skills__arrow"></i>
                            </div>

                            <div className="skills__list grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="skills__data"
                                    >
                                        <div className="skills__titles">
                                            <h3 className="skills__name">
                                                {skill.name}
                                            </h3>
                                            <span className="skills__number">
                                                {skill.percentage}
                                            </span>
                                        </div>
                                        <div className="skills__bar">
                                            <span
                                                className={`skills__percentage ${skill.className}`}
                                                style={{
                                                    width: skill.percentage,
                                                }}
                                            ></span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
