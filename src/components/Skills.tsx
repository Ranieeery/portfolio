'use client'

import { useState } from 'react'
import styles from './Skills.module.css'

const skillsData = [
  {
    category: 'Frontend',
    icon: 'brackets-curly',
    title: 'Desenvolvedor Frontend',
    subtitle: 'Menos de 1 ano',
    skills: [
      { name: 'HTML', percentage: 75 },
      { name: 'CSS', percentage: 60 },
      { name: 'JavaScript', percentage: 40 },
      { name: 'Angular', percentage: 10 },
    ]
  },
  {
    category: 'Backend',
    icon: 'server',
    title: 'Desenvolvedor Backend',
    subtitle: 'Menos de 1 ano',
    skills: [
      { name: 'Java', percentage: 80 },
      { name: 'Spring', percentage: 25 },
      { name: 'Node JS', percentage: 10 },
      { name: 'Python', percentage: 40 },
      { name: 'PostgreSQL', percentage: 20 },
    ]
  },
  {
    category: 'Tools',
    icon: 'file-network',
    title: 'Ferramentas',
    subtitle: 'Menos de 1 ano',
    skills: [
      { name: 'AWS', percentage: 30 },
      { name: 'Docker', percentage: 20 },
      { name: 'Git', percentage: 70 },
      { name: 'GNU/Linux', percentage: 75 },
      { name: 'Gradle', percentage: 40 },
      { name: 'Maven', percentage: 20 },
    ]
  }
]

export default function Skills() {
  const [openSkill, setOpenSkill] = useState('')

  const toggleSkill = (category: string) => {
    setOpenSkill(openSkill === category ? '' : category)
  }

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Meu nível técnico (júnior)</span>

      <div className={`${styles.skills__container} container grid`}>
        {skillsData.map((skillSet) => (
          <div 
            key={skillSet.category}
            className={`${styles.skills__content} ${openSkill === skillSet.category ? styles.skills__open : styles.skills__close}`}
          >
            <div className={styles.skills__header} onClick={() => toggleSkill(skillSet.category)}>
              <i className={`uil uil-${skillSet.icon} ${styles.skills__icon}`}></i>
              <div>
                <h1 className={styles.skills__title}>{skillSet.title}</h1>
                <span className={styles.skills__subtitle}>{skillSet.subtitle}</span>
              </div>
              <i className={`uil uil-angle-down ${styles.skills__arrow}`}></i>
            </div>

            <div className={`${styles.skills__list} grid`}>
              {skillSet.skills.map((skill) => (
                <div className={styles.skills__data} key={skill.name}>
                  <div className={styles.skills__titles}>
                    <h3 className={styles.skills__name}>{skill.name}</h3>
                    <span className={styles.skills__number}>{skill.percentage}%</span>
                  </div>
                  <div className={styles.skills__bar}>
                    <span 
                      className={`${styles.skills__percentage} ${styles[`skills__${skill.name.toLowerCase().replace(' ', '')}`]}`}
                      style={{width: `${skill.percentage}%`}}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}