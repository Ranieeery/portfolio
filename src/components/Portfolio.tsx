"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    const [currentIndex, setCurrentIndex] = useState(1);
    
    const serviceItems: ServiceItem[] = [
        {
            iconClasses: ["uil", "uil-clinic-medical", "services__icon"],
            titleText: "Clínica<br />Médica API",
            projectLink:
                "https://github.com/Ranieeery/medical-clinic-api-with-spring",
            image: "/images/medical-clinic-api-with-spring.png",
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
            image: "/images/placeholder.png",
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
            image: "/images/chatbot.png",
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
            image: "/images/placeholder.png",
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
            image: "/images/placeholder.png",
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
            image: "/images/placeholder.png",
            modalContent: {
                title: "Fitlife",
                description: "Uma landing page de uma academia fictícia",
                details: ["HTML", "CSS", "Firebase"],
            },
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prev) => 
            prev === serviceItems.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => 
            prev === 0 ? serviceItems.length - 1 : prev - 1
        );
    };

    const visibleItems = [
        currentIndex === 0 ? serviceItems.length - 1 : currentIndex - 1,
        currentIndex,
        currentIndex === serviceItems.length - 1 ? 0 : currentIndex + 1,
    ];

    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfólio</h2>
            <span className="section__subtitle">
                Projetos realizados e tecnologias utilizadas
            </span>

            <div className="portfolio__container container">
                <div className="portfolio__wrapper">
                    <button className="portfolio__nav-btn prev" onClick={handlePrev}>
                        <i className="uil uil-angle-left-b"></i>
                    </button>
                    
                    <div className="portfolio__items">
                        <AnimatePresence mode="wait">
                            {visibleItems.map((itemIndex, i) => (
                                <motion.div
                                    key={itemIndex}
                                    className={`portfolio__content ${i === 1 ? 'active' : ''}`}
                                    initial={{ scale: 0.8, opacity: 0.5 }}
                                    animate={{ 
                                        scale: i === 1 ? 1 : 0.8,
                                        opacity: i === 1 ? 1 : 0.5
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={serviceItems[itemIndex].image}
                                        alt={serviceItems[itemIndex].titleText.replace(/<br \/>/g, " ")}
                                        width={300}
                                        height={200}
                                        className="portfolio__img"
                                    />
                                    <div className="portfolio__title-container">
                                        <i className={serviceItems[itemIndex].iconClasses.join(" ")}></i>
                                        <h3
                                            className="portfolio__title"
                                            dangerouslySetInnerHTML={{
                                                __html: serviceItems[itemIndex].titleText,
                                            }}
                                        />
                                    </div>
                                    <span
                                        className="button button--flex button--small button--link portfolio__button"
                                        onClick={() => setActiveModal(itemIndex)}
                                    >
                                        Ver mais
                                        <i className="uil uil-arrow-right button__icon"></i>
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <button className="portfolio__nav-btn next" onClick={handleNext}>
                        <i className="uil uil-angle-right-b"></i>
                    </button>
                </div>
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
