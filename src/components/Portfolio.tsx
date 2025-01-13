"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ModalContent {
    title: string;
    details: string[];
}

interface ServiceItem {
    iconClasses: string[];
    titleText: string;
    projectLink: string;
    image: string;
    modalContent: ModalContent;
}

export default function Portfolio() {
    const [activeModal, setActiveModal] = useState<number | null>(null);

    const serviceItems: ServiceItem[] = [
        {
            iconClasses: ["uil", "uil-arrow", "services__icon"],
            titleText: "Challenge<br />Decodificador",
            projectLink: "https://ranieeery.github.io/Dencoder/",
            image: "/images/chatbot.png",
            modalContent: {
                title: "Desenvolvimento<br />Frontend",
                details: [
                    "HTML5 e CSS3",
                    "Javascript",
                    "Clean Code",
                    "Responsividade",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-money-bill", "services__icon"],
            titleText: "Banco<br />Digital",
            projectLink: "https://github.com/Ranieeery/Desafio-banco-POO",
            image: "/images/bank.png",
            modalContent: {
                title: "Banco em Java",
                details: [
                    "Programação Orientada a Objetos (POO)",
                    "Uso de Interface",
                    "Utilização de bibliotecas para complementar",
                    "Métodos abstratos",
                ],
            },
        },
    ];

    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfólio</h2>
            <span className="section__subtitle">
                Projetos realizados e tecnologias utilizadas
            </span>

            <div className="portfolio__container container">
                <Swiper
                    modules={[Pagination, Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="portfolio__swiper"
                >
                    {serviceItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio__content">
                                <Image
                                    src={item.image}
                                    alt={item.titleText.replace(/<br \/>/g, " ")}
                                    width={300}
                                    height={200}
                                    className="portfolio__img"
                                />
                                <div className="portfolio__title-container">
                                    <i className={item.iconClasses.join(" ")}></i>
                                    <h3
                                        className="portfolio__title"
                                        dangerouslySetInnerHTML={{
                                            __html: item.titleText,
                                        }}
                                    />
                                </div>
                                <span
                                    className="button button--flex button--small button--link portfolio__button"
                                    onClick={() => setActiveModal(index)}
                                >
                                    Ver mais
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {serviceItems.map((item, index) => (
                <div
                    key={index}
                    className={`services__modal ${
                        activeModal === index ? "active-modal" : ""
                    }`}
                >
                    <div className="services__modal-content">
                        <h4
                            className="services__modal-title"
                            dangerouslySetInnerHTML={{
                                __html: item.modalContent.title,
                            }}
                        />

                        <i
                            className="uil uil-times services__modal-close"
                            onClick={() => setActiveModal(null)}
                        />

                        <ul className="services__modal-services grid">
                            {item.modalContent.details.map((detail, detailIndex) => (
                                <li
                                    key={detailIndex}
                                    className="services__modal-service"
                                >
                                    <i className="uil uil-check-circle services__modal-icon" />
                                    <p>{detail}</p>
                                </li>
                            ))}
                        </ul>

                        <span className="button button--flex button--small button--link">
                            <a
                                href={item.projectLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Projeto
                            </a>
                            <i className="uil uil-arrow-right button__icon" />
                        </span>
                    </div>
                </div>
            ))}
        </section>
    );
}