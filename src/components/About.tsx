"use client";

import Image from "next/image";
import { en } from "@/locales/en";
import { ptBR } from "@/locales/pt-BR";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
    const { language } = useLanguage();
    const texts = language === "pt-BR" ? ptBR : en;

    const infoItems = [
        { title: "2 anos", subtitle: "de experiência </br>na área" },
        { title: "20+", subtitle: "repositórios </br>no Github" },
        { title: "03", subtitle: "empresas </br>trabalhadas" },
    ];

    return (
        <section className="about section" id="about">
            <h2 className="section__title">{texts.about.title}</h2>
            <span className="section__subtitle">{texts.about.subtitle}</span>

            <div className="about__container container grid">
                <Image
                    src="/images/about.svg"
                    alt=""
                    width={200}
                    height={200}
                    className="about__img"
                    priority
                />

                <div className="about__data">
                    <p className="about__description ">
                        {texts.about.description}
                    </p>

                    <div className="about__info">
                        {infoItems.map((item, index) => (
                            <div key={index}>
                                <span className="about__info-title">
                                    {item.title}
                                </span>
                                <span
                                    className="about__info-name"
                                    dangerouslySetInnerHTML={{
                                        __html: item.subtitle,
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="about__buttons">
                        <a
                            href="/pdf/Currículo - Raniery Meireles Goulart.pdf"
                            download=""
                            className="button button--flex"
                        >
                            {texts.about.resume}
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
