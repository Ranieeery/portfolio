"use client";

import { useState } from "react";

type QualificationItem = {
    title: string;
    subtitle: string;
    dateRange: string;
};

interface TabProps {
    icon: string;
    title: string;
    target: string;
    isActive: boolean;
    onClick: (target: string) => void;
}

const QualificationTab = ({
    icon,
    title,
    target,
    isActive,
    onClick,
}: TabProps) => (
    <div
        className={`qualification__button button--flex ${
            isActive ? "qualification__active" : ""
        }`}
        data-target={`#${target}`}
        onClick={() => onClick(target)}
    >
        <i className={`uil ${icon} qualification__icon`}></i> {title}
    </div>
);

const QualificationData = ({ items }: { items: QualificationItem[] }) => (
    <>
        {items.map((item, index) => (
            <div key={index} className="qualification__data">
                {index % 2 === 1 && <div></div>}

                {index % 2 === 1 && (
                    <div>
                        <span className="qualification__rounder"></span>
                        {index !== items.length - 1 && (
                            <span className="qualification__line"></span>
                        )}
                    </div>
                )}

                <div>
                    <h3 className="qualification__title">{item.title}</h3>
                    <span className="qualification__subtitle">
                        {item.subtitle}
                    </span>
                    <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt"></i>{" "}
                        {item.dateRange}
                    </div>
                </div>

                {index % 2 === 0 && (
                    <div>
                        <span className="qualification__rounder"></span>
                        {index !== items.length - 1 && (
                            <span className="qualification__line"></span>
                        )}
                    </div>
                )}

                {index % 2 === 0 && <div></div>}
            </div>
        ))}
    </>
);

export default function Qualification() {
    const [activeTab, setActiveTab] = useState("education");

    const educationItems = [
        {
            title: "Ciência da Computação",
            subtitle: "Uniamérica",
            dateRange: "jan 2023 - dez 2026",
        },
        {
            title: "Desenvolvimento Web",
            subtitle: "StartSe University",
            dateRange: "set 2022 - dez 2022",
        },
        {
            title: "Técnico em Eletroeletrônica",
            subtitle: "CEFET-MG",
            dateRange: "fev 2018 - mar 2021",
        },
    ];

    const workItems = [
        {
            title: "Analista de Produto",
            subtitle: "ACT Digital",
            dateRange: "jun 2022 - jan 2023",
        },
        {
            title: "Técnico de Instrumentação",
            subtitle: "MSX International",
            dateRange: "ago 2021 - nov 2021",
        },
    ];

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <QualificationTab
                        icon="uil-graduation-cap"
                        title="Educação"
                        target="education"
                        isActive={activeTab === "education"}
                        onClick={setActiveTab}
                    />
                    <QualificationTab
                        icon="uil-briefcase-alt"
                        title="Trabalho"
                        target="work"
                        isActive={activeTab === "work"}
                        onClick={setActiveTab}
                    />
                </div>

                <div className="qualification__sections">
                    <div
                        className={`qualification__content ${
                            activeTab === "education"
                                ? "qualification__active"
                                : ""
                        }`}
                        data-content=""
                        id="education"
                    >
                        <QualificationData items={educationItems} />
                    </div>

                    <div
                        className={`qualification__content ${
                            activeTab === "work" ? "qualification__active" : ""
                        }`}
                        data-content=""
                        id="work"
                    >
                        <QualificationData items={workItems} />
                    </div>
                </div>
            </div>
        </section>
    );
}
