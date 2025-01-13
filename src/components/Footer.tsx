"use client";

interface FooterLink {
    href: string;
    text: string;
}

interface SocialLink {
    href: string;
    icon: string;
}

export default function Footer() {
    const footerLinks: FooterLink[] = [
        { href: "#home", text: "Início" },
        { href: "#about", text: "Sobre" },
        { href: "#portfolio", text: "Portfólio" },
        { href: "#contact", text: "Contato" },
    ];

    const socialLinks: SocialLink[] = [
        {
            href: "https://www.linkedin.com/in/ranierygoulart/",
            icon: "uil uil-linkedin",
        },
        {
            href: "https://github.com/Ranieeery",
            icon: "uil uil-github",
        },
        {
            href: "https://www.instagram.com/ranierygoulart/",
            icon: "uil uil-instagram",
        },
    ];

    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div className="align--text">
                        <h1 className="footer__title">&#60;/Raniery&#62;</h1>
                        <span className="footer__subtitle">
                            Desenvolvedor Web
                        </span>
                    </div>

                    <ul className="footer__links">
                        {footerLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="footer__link">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="footer__socials">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="footer__social"
                            >
                                <i className={social.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

                <p className="footer__copy">
                    &#169; Raniery. Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}
