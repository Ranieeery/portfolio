import Image from 'next/image'
import Link from 'next/link'
import styles from './About.module.css'

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <h2 className="section__title">Sobre mim</h2>
      <span className="section__subtitle">Introdução</span>

      <div className={`${styles.about__container} container grid`}>
        <Image src="/assets/images/intro.svg" alt="About image" width={300} height={300} className={styles.about__img} />

        <div className={styles.about__data}>
          <p className={styles.about__description}>
            Desenvolvedor Web com conhecimento em JavaScript, HTML, CSS, Java,
            SQL, PostgreSQL, Git, Docker e Linux. Atualmente cursando Ciência
            da Computação e estudando Spring Framework e Angular.
          </p>

          <div className={styles.about__info}>
            <div>
              <span className={styles.about__info_title}>Sem</span>
              <span className={styles.about__info_name}>experiência <br /> na área</span>
            </div>
            <div>
              <span className={styles.about__info_title}>03+</span>
              <span className={styles.about__info_name}>projetos <br /> completados</span>
            </div>
            <div>
              <span className={styles.about__info_title}>02</span>
              <span className={styles.about__info_name}>empresas <br /> trabalhadas</span>
            </div>
          </div>

          <div className={styles.about__buttons}>
            <Link href="/assets/pdf/Currículo - Raniery Meireles Goulart.pdf" className="button button--flex" download>
              Baixar currículo<i className="uil uil-download-alt button__icon"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}