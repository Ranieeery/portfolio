'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const menuItems = [
        { href: "#home", icon: "uil-estate", text: "Home", active: true },
        { href: "#about", icon: "uil-user", text: "Sobre" },
        { href: "#skills", icon: "uil-books", text: "Skills" },
        { href: "#portfolio", icon: "uil-folder", text: "Portfólio" },
        { href: "#contact", icon: "uil-at", text: "Contato" }
    ]

    useEffect(() => {
        // Theme handling logic
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') {
            document.body.classList.add('dark-theme')
            setIsDarkMode(true)
        }
    }, [])

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <Link href="#" className="nav__logo">
                    &#60;Raniery&#62;
                </Link>

                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                    <ul className="nav__list grid">
                        {menuItems.map((item) => (
                            <li key={item.href} className="nav__item">
                                <Link href={item.href}
                                      className={`nav__link ${item.active ? 'active-link' : ''}`}
                                      onClick={() => setIsMenuOpen(false)}>
                                    <i className={`uil ${item.icon} nav__icon`}></i> {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <i className="uil uil-times nav__close"
                       onClick={() => setIsMenuOpen(false)}></i>
                </div>

                <div className="nav__btns">
                    <i className={`uil ${isDarkMode ? 'uil-sun' : 'uil-moon'} change-theme`}
                       onClick={() => {
                           setIsDarkMode(!isDarkMode)
                           document.body.classList.toggle('dark-theme')
                           localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
                       }}></i>

                    <div className="nav__toggle"
                         onClick={() => setIsMenuOpen(true)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}