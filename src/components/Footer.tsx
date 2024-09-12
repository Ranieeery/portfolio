import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__bg}>
        <div className={`${styles.footer__container} container grid`}>
          <div className={styles.align__text}>
            <h1 className={styles.footer__title}>&#60;/Raniery&#62;</h1>
            <span className={styles.footer__subtitle}>Desenvolvedor Web</span>
          </div>

          <ul className={styles.footer__links}>
            {['Início', 'Sobre', 'Portfólio', 'Contato'].map((item, index) => (
              <li key={index}>
                <Link href={`#${item.toLowerCase()}`} className={styles.footer__link}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.footer__socials}>
            {[
              { name: 'linkedin', url: 'https://www.linkedin.com/in/ranierygoulart/' },
              { name: 'github', url: 'https://github.com/Ranieeery' },
              { name: 'instagram', url: 'https://www.instagram.com/ranierygoulart/' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__social}
              >
                <i className={`uil uil-${social.name}`}></i>
              </a>
            ))}
          </div>
        </div>

        <p className={styles.footer__copy}>&#169; Raniery. Todos os direitos reservados</p>
      </div>
    </footer>
  )
}