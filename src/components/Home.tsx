import Image from 'next/image'
import Link from 'next/link'
import styles from './Home.module.css'

export default function Home() {
  return (
    <section className={`${styles.home} section`} id="home">
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <div className={styles.home__social}>
            {[
              { name: 'linkedin', url: 'https://www.linkedin.com/in/ranierygoulart/' },
              { name: 'github', url: 'https://github.com/Ranieeery' },
              { name: 'instagram', url: 'https://www.instagram.com/ranierygoulart/' }
            ].map((social) => (
              <Link key={social.name} href={social.url} target="_blank" className={styles.home__social_icon}>
                <i className={`uil uil-${social.name}`}></i>
              </Link>
            ))}
          </div>

          <div className={styles.home__img}>
            <svg className={styles.home__blob} viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                <image className={styles.home__blob_img} x="12" y="18" xlinkHref="/assets/images/typing.svg"/>
              </g>
            </svg>
          </div>

          <div className={styles.home__data}>
            <h1 className={styles.home__title}>Raniery Meireles</h1>
            <h3 className={styles.home__subtitle}>Desenvolvedor Fullstack</h3>
            <p className={styles.home__description}>
              Estudante de Ciência da Computação apaixonado por tecnologia e programação.
            </p>
            <Link href="#contact" className={`button button--flex ${styles.home__button}`}>
              Contato<i className="uil uil-message button__icon"></i>
            </Link>
          </div>
        </div>

        <div className={styles.home__scroll}>
          <Link href="#about" className={`${styles.home__scroll_button} button--flex`}>
            <i className={`uil uil-mouse-alt ${styles.home__scroll_mouse}`}></i>
            <span className={styles.home__scroll_name}>Desça para ver mais</span>
            <i className={`uil uil-arrow-down ${styles.home__scroll_arrow}`}></i>
          </Link>
        </div>
      </div>
    </section>
  )
}