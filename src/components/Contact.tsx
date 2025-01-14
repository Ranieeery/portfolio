"use client";
import Image from "next/image";

interface ContactInfo {
    icon: string;
    title: string;
    subtitle: string;
}

export default function Contact() {
    const contactInfos: ContactInfo[] = [
        {
            icon: "uil uil-phone contact__icon",
            title: "Telefone (Celular)",
            subtitle: "+55 (31) 9 9197-4503",
        },
        {
            icon: "uil uil-envelope contact__icon",
            title: "E-mail pessoal",
            subtitle: "raniery2003@hotmail.com",
        },
        {
            icon: "uil uil-map-marker contact__icon",
            title: "Localização",
            subtitle: "Contagem, MG",
        },
    ];

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contato</h2>
            <span className="section__subtitle">
                Entre em contato para conversarmos
            </span>

            <div className="contact__bg">
                <div className="project__container container grid">
                    <div className="project__data">
                        <div className="contact__container container grid">
                            {contactInfos.map((info, index) => (
                                <div
                                    key={index}
                                    className="contact__information"
                                >
                                    <i className={info.icon}></i>
                                    <div>
                                        <h3 className="contact__title">
                                            {info.title}
                                        </h3>
                                        <span className="contact__subtitle">
                                            {info.subtitle}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="mailto:raniery2003@hotmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="button button--flex button--white project__button"
                        >
                            Entrar em contato
                            <i className="uil uil-message project__icon button__icon"></i>
                        </a>
                    </div>
                    <Image
                        src="/images/contact.svg"
                        alt="Contact illustration"
                        className="project__img"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    );
}
