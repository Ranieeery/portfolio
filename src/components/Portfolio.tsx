'use client'

import {useState} from 'react'

interface ModalContent {
    title: string
    details: string[]
}

interface ServiceItem {
    iconClasses: string[]
    titleText: string
    projectLink: string
    modalContent: ModalContent
}

export default function Portfolio() {
    const [activeModal, setActiveModal] = useState<number | null>(null)

    const serviceItems: ServiceItem[] = [
        {
            iconClasses: ["uil", "uil-arrow", "services__icon"],
            titleText: "Challenge<br />Decodificador",
            projectLink: "https://ranieeery.github.io/Dencoder/",
            modalContent: {
                title: "Desenvolvimento<br />Frontend",
                details: [
                    "Manipulação do DOM através de JavaScript",
                    "Pseudo-elementos em CSS",
                    "Emmet Abbreviation em HTML",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-letter-japanese-a", "services__icon"],
            titleText: "Visor<br />Pokédex",
            projectLink: "https://ranieeery.github.io/pokedex/",
            modalContent: {
                title: "Pokédex (Pokémon)",
                details: [
                    "Consumo de APIs com JavaScript",
                    "Manipulação do DOM pelo usuário",
                    "Uso de pseudo-classes em CSS",
                    "Atributos de renderização do script na página HTML",
                ],
            },
        },
        {
            iconClasses: ["uil", "uil-money-bill", "services__icon"],
            titleText: "Banco<br />Digital",
            projectLink: "https://github.com/Ranieeery/Desafio-banco-POO",
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
    ]

    const ServiceContent = ({
                                item,
                                index
                            }: {
        item: ServiceItem
        index: number
    }) => (
        <div className="services__content">
            <div>
                <i className={item.iconClasses.join(' ')}></i>
                <h3
                    className="services__title"
                    dangerouslySetInnerHTML={{__html: item.titleText}}
                />
            </div>

            <span
                className="button button--flex button--small button--link services__button"
                onClick={() => setActiveModal(index)}
            >
        Ver mais
        <i className="uil uil-arrow-right button__icon"></i>
      </span>

            <div className={`services__modal ${activeModal === index ? 'active-modal' : ''}`}>
                <div className="services__modal-content">
                    <h4
                        className="services__modal-title"
                        dangerouslySetInnerHTML={{__html: item.modalContent.title}}
                    />

                    <i
                        className="uil uil-times services__modal-close"
                        onClick={() => setActiveModal(null)}
                    ></i>

                    <ul className="services__modal-services grid">
                        {item.modalContent.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
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
            <i className="uil uil-arrow-right button__icon"></i>
          </span>
                </div>
            </div>
        </div>
    )

    return (
        <section className="services section" id="portfolio">
            <h2 className="section__title">Portfólio</h2>
            <span className="section__subtitle">
        Projetos realizados e tecnologias utilizadas
      </span>

            <div className="services__container container grid">
                {serviceItems.map((item, index) => (
                    <ServiceContent
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </div>
        </section>
    )
}