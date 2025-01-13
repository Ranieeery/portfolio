"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ModalContent {
    title: string;
    description: string;
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
            iconClasses: ["uil", "uil-clinic-medical", "services__icon"],
            titleText: "Clínica<br />Médica API",
            projectLink:
                "https://github.com/Ranieeery/medical-clinic-api-with-spring",
            image: "/images/chatbot.png",
            modalContent: {
                title: "Clínica Médica API",
                description: `API Rest para gerenciamento de consultório médico 
                desenvolvida com Spring Boot e MySQL.`,
                details: [
                    "Java",
                    "Spring Boot 3",
                    "Spring Data JPA",
                    "MySQL",
                    "JUnit",
                    "Mockito",
                    "Swagger",
                    "Padrões de Projeto",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-meeting-board", "services__icon"],
            titleText: "IA para bot de<br />recomendação",
            projectLink:
                "https://github.com/Ranieeery/openai-ecommerce-api-integration",
            image: "/images/ecommerce.png",
            modalContent: {
                title: "Sistema de recomendação de produtos e-commerce",
                description: `Um sistema de recomendação de produtos em Java que usa 
                a API da OpenAI para fornecer recomendações personalizadas de produtos 
                e análise de sentimentos para avaliações de clientes.`,
                details: [
                    "Java",
                    "Maven",
                    "Programação Orientada a Objetos (POO)",
                    "OpenAI API",
                    "JTokkit",
                    "Inteligência Artificial (I.A.)",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-robot", "services__icon"],
            titleText: "ByteBox<br />Chatbot",
            projectLink: "https://github.com/Ranieeery/ecommerce-chatbot",
            image: "",
            modalContent: {
                title: "ByteBox E-commerce Chatbot",
                description: `Uma aplicação Spring Boot que implementa um chatbot 
                de atendimento ao cliente para a ByteBox, uma plataforma fictícia 
                de comércio eletrônico especializada em componentes de computador 
                e eletrônicos.`,
                details: [
                    "Java",
                    "Spring Boot",
                    "Spring Webflux",
                    "Thymeleaf",
                    "JavaScript",
                    "jQuery",
                    "Marked.js",
                    "OpenAI API",
                    "JTokkit",
                    "Inteligência Artificial (I.A.)",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-shopping-basket", "services__icon"],
            titleText: "MVC<br />Vendas C#",
            projectLink: "https://github.com/Ranieeery/VendasMVC",
            image: "",
            modalContent: {
                title: "VendasMVC",
                description: `Consiste em uma aplicação Web de um sistema de 
                vendas com interface gráfica para manipular o banco de dados.`,
                details: [
                    "C#",
                    ".NET",
                    "ASP.NET Core MVC",
                    "Entity Framework",
                    "LINQ",
                    "MySQL",
                    "HTML",
                    "CSS",
                    "Bootstrap",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-envelope", "services__icon"],
            titleText: "Busca<br />Correios",
            projectLink: "https://github.com/Ranieeery/Busca-CEP",
            image: "",
            modalContent: {
                title: "Busca CEP API REST",
                description: `Programa que salva uma lista de CEPs extraídas dos
                correios em um banco SQL e permite a consulta desses CEPs via API 
                REST.`,
                details: [
                    "Java",
                    "Spring Boot",
                    "Spring Data JPA",
                    "Lombok",
                    "MySQL",
                    "JUnit",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-dumbbell", "services__icon"],
            titleText: "Academia<br />Fitlife",
            projectLink: "https://fitlife-94c49.web.app/",
            image: "",
            modalContent: {
                title: "Fitlife",
                description: "Uma landing page de uma academia fictícia",
                details: ["HTML", "CSS", "Firebase"],
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
                    spaceBetween={20}
                    centeredSlides={true}
                    slidesPerView={3}
                    slideToClickedSlide={true}
                    allowTouchMove={true}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    speed={800}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            centeredSlides: false,
                        },
                        1024: {
                            slidesPerView: 3,
                            allowSlideNext: true,
                        },
                    }}
                    className="portfolio__swiper"
                >
                    {serviceItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio__content">
                                <Image
                                    src={item.image}
                                    alt={item.titleText.replace(
                                        /<br \/>/g,
                                        " "
                                    )}
                                    width={300}
                                    height={200}
                                    className="portfolio__img"
                                />
                                <div className="portfolio__title-container">
                                    <i
                                        className={item.iconClasses.join(" ")}
                                    ></i>
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
                        <p className="services__modal-description">
                            {item.modalContent.description}
                        </p>{" "}
                        <br />
                        <i
                            className="uil uil-times services__modal-close"
                            onClick={() => setActiveModal(null)}
                        />
                        <ul className="services__modal-services grid">
                            {item.modalContent.details.map(
                                (detail, detailIndex) => (
                                    <li
                                        key={detailIndex}
                                        className="services__modal-service"
                                    >
                                        <i className="uil uil-check-circle services__modal-icon" />
                                        <p>{detail}</p>
                                    </li>
                                )
                            )}
                        </ul>
                        <br />
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
