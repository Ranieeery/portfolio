'use client'

import { useState } from 'react'
import styles from './Qualifications.module.css'

const qualificationsData = {
  education: [
    {
      title: "Ciência da Computação",
      subtitle: "Uniamérica",
      date: "jan 2023 - dez 2026"
    },
    {
      title: "Desenvolvimento Web",
      subtitle: "StartSe University",
      date: "set 2022 - dez 2022"
    },
    {
      title: "Técnico em Eletroeletrônica",
      subtitle: "CEFET-MG",
      date: "fev 2018 - mar 2021"
    }
  ],
  work: [
    {
      title: "Analista de Produto",
      subtitle: "ACT Digital",
      date: "jun 2022 - jan 2023"
    },
    {
      title: "Técnico de Instrumentação",
      subtitle: "MSX International",
      date: "ago 2021 - nov 2021"
    }
  ]
}

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState('education')

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha jornada pessoal</span>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__tabs}>
          <div
            className={`${styles.qualification__button} button--flex ${activeTab === 'education' ? styles.qualification__active : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Educação
          </div>

          <div
            className={`${styles.qualification__button} button--flex ${activeTab === 'work' ? styles.qualification__active : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Trabalho
          </div>
        </div>

        <div className={styles.qualification__sections}>
          {['education', 'work'].map((section) => (
            <div
              key={section}
              className={`${styles.qualification__content} ${activeTab === section ? styles.qualification__active : ''}`}
            >
              {qualificationsData[section].map((item, index) => (
                <div className={styles.qualification__data} key={index}>
                  {index % 2 !== 0 && (
                    <>
                      <div></div>
                      <div>
                        <span className={styles.qualification__rounder}></span>
                        <span className={styles.qualification__line}></span>
                      </div>
                    </>
                  )}
                  <div>
                    <h3 className={styles.qualification__title}>{item.title}</h3>
                    <span className={styles.qualification__subtitle}>{item.subtitle}</span>
                    <div className={styles.qualification__calendar}>
                      <i className="uil uil-calendar-alt"></i> {item.date}
                    </div>
                  </div>
                  {index % 2 === 0 && (
                    <div>
                      <span className={styles.qualification__rounder}></span>
                      <span className={styles.qualification__line}></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}