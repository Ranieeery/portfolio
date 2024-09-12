'use client'

import { useState } from 'react'
import styles from './Portfolio.module.css'

const portfolioData = [
  {
    title: "Challenge Decodificador",
    icon: "arrow",
    description: "Desenvolvimento Frontend",
    details: [
      "Manipulação do DOM através de JavaScript",
      "Pseudo-elementos em CSS",
      "Emmet Abbreviation em HTML"
    ],
    projectLink: "https://ranieeery.github.io/Dencoder/"
  },
  {
    title: "Visor Pokédex",
    icon: "letter-japanese-a",
    description: "Pokédex (Pokémon)",
    details: [
      "Consumo de APIs com JavaScript",
      "Manipulação do DOM pelo usuário",
      "Uso de pseudo-classes em CSS",
      "Atributos de renderização do script na página HTML"
    ],
    projectLink: "https://ranieeery.github.io/pokedex/"
  },
  {
    title: "Banco Digital",
    icon: "money-bill",
    description: "Banco em Java",
    details: [
      "Programação Orientada a Objetos (POO)",
      "Uso de Interface",
      "Utilização de bibliotecas para complementar",
      "Métodos abstratos"
    ],
    projectLink: "https://github.com/Ranieeery/Desafio-banco-POO"
  }
]

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState<number | null>(null)

  return (
    <section className="services section" id="portfolio">
      <h2 className="section__title">Portfólio</h2>
      <span className="section__subtitle">Projetos realizados e tecnologias utilizadas</span>

      <div className={`${styles.services__container} container grid`}>
        {portfolioData.map((item, index) => (
          <div className={styles.services__content} key={index}>
            <div>
              <i className={`uil uil-${item.icon} ${styles.services__icon}`}></i>
              <h3 className={styles.services__title}>
                {item.title.split(' ').map((word, i) => <span key={i}>{word}<br /></span>)}
              </h3>
            </div>

            <span className={`button button--flex button--small button--link ${styles.services__button}`} onClick={() => setActiveModal(index)}>
              Ver mais
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className={`${styles.services__modal} ${activeModal === index ? styles.active_modal : ''}`}>
              <div className={styles.services__modal_content}>
                <h4 className={styles.services__modal_title}>{item.description}</h4>
                <i className={`uil uil-times ${styles.services__modal_close}`} onClick={() => setActiveModal(null)}></i>

                <ul className={`${styles.services__modal_services} grid`}>
                  {item.details.map((detail, detailIndex) => (
                    <li className={styles.services__modal_service} key={detailIndex}>
                      <i className={`uil uil-check-circle ${styles.services__modal_icon}`}></i>
                      <p>{detail}</p>
                    </li>
                  ))}
                  <span className="button button--flex button--small button--link">
                    <a href={item.projectLink} target="_blank" rel="noopener noreferrer">Projeto</a>
                    <i className="uil uil-arrow-right button__icon"></i>
                  </span>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}