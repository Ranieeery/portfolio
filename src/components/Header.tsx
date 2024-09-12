'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollHeader, setScrollHeader] = useState(false)

  useEffect(() => {
    const changeHeaderBackground = () => {
      if (window.scrollY >= 80) {
        setScrollHeader(true)
      } else {
        setScrollHeader(false)
      }
    }

    window.addEventListener('scroll', changeHeaderBackground)

    return () => {
      window.removeEventListener('scroll', changeHeaderBackground)
    }
  }, [])

  return (
    <header className={`${styles.header} ${scrollHeader ? styles.scrollHeader : ''}`}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.nav__logo}>&#60;Raniery&#62;</Link>

        <div className={`${styles.nav__menu} ${showMenu ? styles.showMenu : ''}`}>
          <ul className={`${styles.nav__list} grid`}>
            {['home', 'about', 'skills', 'portfolio', 'contact'].map((item) => (
              <li className={styles.nav__item} key={item}>
                <Link href={`#${item}`} className={styles.nav__link}>
                  <i className={`uil uil-${item === 'home' ? 'estate' : item} ${styles.nav__icon}`}></i> {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <i className={`uil uil-times ${styles.nav__close}`} onClick={() => setShowMenu(false)}></i>
        </div>

        <div className={styles.nav__btns}>
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className={styles.nav__toggle} onClick={() => setShowMenu(!showMenu)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}