import Image from 'next/image'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contato</h2>
      <span className="section__subtitle">Entre em contato para conversarmos</span>
      <div className={styles.contact__bg}>
        <div className={`${styles.project__container} container grid`}>
          <div className={styles.project__data}>
            <div className={`${styles.contact__container} container grid`}>
              <div>
                {[
                  { icon: 'phone', title: 'Telefone (Celular)', subtitle: '+55 (31) 99197-4503' },
                  { icon: 'envelope', title: 'E-mail pessoal', subtitle: 'ranierymeireles@gmail.com' },
                  { icon: 'map-marker', title: 'Localização', subtitle: 'Contagem, MG' }
                ].map((item, index) => (
                  <div className={styles.contact__information} key={index}>
                    <i className={`uil uil-${item.icon} ${styles.contact__icon}`}></i>
                    <div>
                      <h3 className={styles.contact__title}>{item.title}</h3>
                      <span className={styles.contact__subtitle}>{item.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a href="mailto:ranierymeireles@gmail.com" target="_blank" rel="noopener noreferrer" className={`button button--flex button--white ${styles.project__button}`}>
              Entrar em contato
              <i className={`uil uil-message ${styles.project__icon} button__icon`}></i>
            </a>
          </div>

          <Image src="/assets/images/contact.svg" alt="Contact" width={300} height={300} className={styles.project__img} />
        </div>
      </div>
    </section>
  )
}