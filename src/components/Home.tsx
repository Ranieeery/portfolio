'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800">&#60;Raniery&#62;</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">Sobre</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#portfolio">Portfólio</NavLink>
            <NavLink href="#contact">Contato</NavLink>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink href="#home" mobile>Home</NavLink>
            <NavLink href="#about" mobile>Sobre</NavLink>
            <NavLink href="#skills" mobile>Skills</NavLink>
            <NavLink href="#portfolio" mobile>Portfólio</NavLink>
            <NavLink href="#contact" mobile>Contato</NavLink>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Raniery Meireles</h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Desenvolvedor Fullstack</h2>
              <p className="text-gray-700 mb-8">
                Estudante de Ciência da Computação apaixonado por tecnologia e programação.
              </p>
              <Link href="#contact">
                <span className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
                  Contato
                </span>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/placeholder.svg?height=400&width=400" 
                alt="Raniery coding" 
                width={400} 
                height={400}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Sobre mim</h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <Image 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="About me" 
                  width={300} 
                  height={300}
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-6">
                  Desenvolvedor Web com conhecimento em JavaScript, HTML, CSS, Java, SQL, PostgreSQL, Git, Docker e Linux. Atualmente cursando Ciência da Computação e estudando Spring Framework e Angular.
                </p>
                <div className="flex justify-between mb-6">
                  <InfoBox title="Sem" subtitle="experiência na área" />
                  <InfoBox title="03+" subtitle="projetos completados" />
                  <InfoBox title="02" subtitle="empresas trabalhadas" />
                </div>
                <a 
                  href="/Currículo - Raniery Meireles Goulart.pdf" 
                  download 
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Baixar currículo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <p className="text-center text-gray-600 mb-12">Meu nível técnico (júnior)</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCategory title="Desenvolvedor Frontend" years="Menos de 1 ano">
                <SkillBar name="HTML" percentage={75} />
                <SkillBar name="CSS" percentage={60} />
                <SkillBar name="JavaScript" percentage={40} />
                <SkillBar name="Angular" percentage={10} />
              </SkillCategory>
              <SkillCategory title="Desenvolvedor Backend" years="Menos de 1 ano">
                <SkillBar name="Java" percentage={80} />
                <SkillBar name="Spring" percentage={25} />
                <SkillBar name="Node JS" percentage={10} />
                <SkillBar name="Python" percentage={40} />
                <SkillBar name="PostgreSQL" percentage={20} />
              </SkillCategory>
              <SkillCategory title="Ferramentas" years="Menos de 1 ano">
                <SkillBar name="AWS" percentage={30} />
                <SkillBar name="Docker" percentage={20} />
                <SkillBar name="Git" percentage={70} />
                <SkillBar name="GNU/Linux" percentage={75} />
                <SkillBar name="Gradle" percentage={40} />
                <SkillBar name="Maven" percentage={20} />
              </SkillCategory>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Portfólio</h2>
            <p className="text-center text-gray-600 mb-12">Projetos realizados e tecnologias utilizadas</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PortfolioItem 
                title="Challenge Decodificador" 
                description="Manipulação do DOM através de JavaScript, Pseudo-elementos em CSS, Emmet Abbreviation em HTML"
                link="https://ranieeery.github.io/Dencoder/"
              />
              <PortfolioItem 
                title="Visor Pokédex" 
                description="Consumo de APIs com JavaScript, Manipulação do DOM pelo usuário, Uso de pseudo-classes em CSS"
                link="https://ranieeery.github.io/pokedex/"
              />
              <PortfolioItem 
                title="Banco Digital" 
                description="Programação Orientada a Objetos (POO), Uso de Interface, Utilização de bibliotecas para complementar, Métodos abstratos"
                link="https://github.com/Ranieeery/Desafio-banco-POO"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contato</h2>
            <p className="text-center text-gray-600 mb-12">Entre em contato para conversarmos</p>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <ContactInfo 
                  icon="phone" 
                  title="Telefone (Celular)" 
                  content="+55 (31) 99197-4503" 
                />
                <ContactInfo 
                  icon="mail" 
                  title="E-mail pessoal" 
                  content="ranierygoulart@gmail.com" 
                />
                <ContactInfo 
                  icon="map-pin" 
                  title="Localização" 
                  content="Contagem, MG" 
                />
              </div>
              <div className="md:w-1/2">
                <Image 
                  src="/placeholder.svg?height=300&width=300" 
                  alt="Contact" 
                  width={300} 
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">&#60;/Raniery&#62;</h3>
              <p>Desenvolvedor Web</p>
            </div>
            <div className="flex space-x-4 mb-6 md:mb-0">
              <FooterLink href="#home">Início</FooterLink>
              <FooterLink href="#about">Sobre</FooterLink>
              <FooterLink href="#portfolio">Portfólio</FooterLink>
              <FooterLink href="#contact">Contato</FooterLink>
            </div>
            <div className="flex space-x-4">
              <SocialLink href="https://www.linkedin.com/in/ranierygoulart/" icon="linkedin" />
              <SocialLink href="https://github.com/Ranieeery" icon="github" />
              <SocialLink href="https://www.instagram.com/ranierygoulart/" icon="instagram" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&#169; Raniery. Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const NavLink: React.FC<{ href: string; mobile?: boolean; children: React.ReactNode }> = ({ href, mobile, children }) => (
  <Link href={href}>
    <span className={`text-gray-600 hover:text-gray-900 ${mobile ? 'block py-2 px-4 hover:bg-gray-100' : ''}`}>
      {children}
    </span>
  </Link>
)

const InfoBox: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center">
    <h4 className="text-xl font-bold">{title}</h4>
    <p className="text-gray-600">{subtitle}</p>
  </div>
)

const SkillCategory: React.FC<{ title: string; years: string; children: React.ReactNode }> = ({ title, years, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{years}</p>
    {children}
  </div>
)

const SkillBar: React.FC<{ name: string; percentage: number }> = ({ name, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{name}</span>
      <span className="text-gray-700">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
)

const PortfolioItem: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
      Ver projeto
    </a>
  </div>
)

const ContactInfo: React.FC<{ icon: string; title: string; content: string }> = ({ icon, title, content }) => (
  <div className="flex items-center mb-6">
    <div className="mr-4">
      <Image src={`/placeholder.svg?height=24&width=24`} alt={icon} width={24} height={24} />
    </div>
    <div>
      <h4 className="font-bold">{title}</h4>
      <p>{content}</p>
    </div>
  </div>
)

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href}>
    <span className="hover:text-gray-300">{children}</span>
  </Link>
)

const SocialLink: React.FC<{ href: string; icon: string }> = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
    <Image src={`/placeholder.svg?height=24&width=24`} alt={icon} width={24} height={24} />
  </a>
)

export default Home