"use client";

import Image from "next/image";

export default function About() {
    const infoItems = [
        { title: "2 anos", subtitle: "de experiência </br>na área" },
        { title: "03+", subtitle: "projetos </br>completados" },
        { title: "02", subtitle: "empresas </br>trabalhadas" },
    ];

    return (
        <section className="about section" id="about">
            <h2 className="section__title">Sobre mim</h2>
            <span className="section__subtitle">Introdução</span>

            <div className="about__container container grid">
                <Image
                    src="/images/about.svg" // Update path
                    alt=""
                    width={200}
                    height={200}
                    className="about__img"
                    priority
                />

                <div className="about__data">
                    <p className="about__description">
                        Desenvolvedor Web com conhecimento em JavaScript, HTML,
                        CSS, Java, SQL, PostgreSQL, Git, Docker e Linux.
                        Atualmente cursando Ciência da Computação e estudando
                        Spring Framework e Angular.
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
                            Baixar currículo
                            <i className="uil uil-download-alt button__icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
