export const ptBR = {
    header: {
        home: "Início",
        about: "Sobre",
        skills: "Habilidades",
        portfolio: "Portfólio",
        contact: "Contato",
        language: "Idioma",
    },
    home: {
        title: "Raniery Goulart",
        subtitle: "Desenvolvedor Fullstack",
        social: "Estudante de Ciência da Computação apaixonado por tecnologia e programação.",
        contact: "Contato",
        scroll: "Desça para ver mais",
    },
    about: {
        title: "Sobre mim",
        subtitle: "Introdução",
        description: `Desenvolvedor Fullstack com experiência em criação de
                APIs REST, integração com páginas front-end, bancos de
                dados relacionais e testes unitários, segurança e cloud
                com certificados AWS. Estudante de Ciência da Computação
                na Uniamérica e formado em Eletroeletrônica no CEFET-MG,
                utilizo o conhecimento obtido nas duas áreas para criar
                soluções eficientes.`,
        resume: "Baixar currículo",
        info: [
            { title: "2 anos", subtitle: "de experiência </br>na área" },
            { title: "20+", subtitle: "repositórios </br>no Github" },
            { title: "03", subtitle: "empresas </br>trabalhadas" },
        ],
    },
    skills: {
        title: "Habilidades",
        subtitle: `Tecnologias com as quais trabalho ou já tive contato no
                </br> meio acadêmico ou em projetos pessoais.`,
        categories: [
            { category: "Linguagens" },
            { category: "Tecnologias & Frameworks" },
            { category: "Banco de Dados" },
            { category: "DevOps & Cloud" },
        ],
    },
    qualification: {
        title: "Qualificações",
        subtitle: "Formação e experiência profissional",
        tab: [{ title: "Trabalho" }, { title: "Educação" }],
        education: [
            {
                title: "Ciência da Computação",
                subtitle: "Uniamérica",
                dateRange: "jan 2023 - dez 2026",
            },
            {
                title: "Oracle Next Education",
                subtitle: "Alura + Oracle",
                dateRange: "nov 2022 - abr 2023",
            },
            {
                title: "Técnico em Eletroeletrônica",
                subtitle: "CEFET-MG",
                dateRange: "fev 2018 - mar 2021",
            },
        ],
        work: [
            {
                title: "Estagiário de Desenvolvimento",
                subtitle: "Empresa 1",
                dateRange: "ago 2023 - atual",
            },
            {
                title: "Analista de Desenvolvimento de Sistemas",
                subtitle: "ACT Digital",
                dateRange: "jun 2022 - jan 2023",
            },
            {
                title: "Técnico de Instrumentação",
                subtitle: "MSX International",
                dateRange: "ago 2021 - nov 2021",
            },
        ],
    },
    portfolio: {
        title: "Portfólio",
        subtitle: "Projetos concluídos e tecnologias utilizadas",
        view: "Ver mais",
        send: "Projeto",
        projects: {
            medical_clinic: {
                title: "Clínica</br>Médica API",
                image: "/images/projects/medical-clinic-api-with-spring.png",
                link: "https://github.com/Ranieeery/medical-clinic-api-with-spring",
                icons: ["uil", "uil-clinic-medical", "services__icon"],
                tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
                modal: {
                    title: "Clínica Médica API",
                    description: `API Rest para gerenciamento de consultório médico 
                    desenvolvida com Java, Spring Boot e MySQL.`,
                    details: [
                        "Java",
                        "Spring Boot 3",
                        "Spring Data JPA",
                        "MySQL",
                        "JUnit",
                        "Mockito",
                        "Swagger",
                        "Padrões de Projeto",
                    ],
                },
            },
            ia_chatbot: {
                title: "I.A para </br>Recomendação",
                image: "/images/projects/ai.png",
                link: "https://github.com/Ranieeery/openai-ecommerce-api-integration",
                icons: ["uil", "uil-meeting-board", "services__icon"],
                tags: ["Java", "IA", "Spring Boot", "OpenAI"],
                modal: {
                    title: "Sistema de recomendação de produtos e-commerce",
                    description: `Um sistema de recomendação de produtos em Java que usa 
                    a API da OpenAI para fornecer recomendações personalizadas de produtos 
                    e análise de sentimentos para avaliações de clientes.`,
                    details: [
                        "Java",
                        "Maven",
                        "OpenAI API",
                        "JTokkit",
                        "Inteligência Artificial (I.A.)",
                    ],
                },
            },
            bytebox: {
                title: "ByteBox</br>Chatbot",
                image: "/images/projects/chatbot.png",
                link: "https://github.com/Ranieeery/ecommerce-chatbot",
                icons: ["uil", "uil-robot", "services__icon"],
                tags: ["Java", "Spring Boot", "I.A.", "JavaScript"],
                modal: {
                    title: "ByteBox E-commerce Chatbot",
                    description: `Uma aplicação Spring Boot que implementa um chatbot 
                    de atendimento ao cliente para a ByteBox, uma plataforma fictícia 
                    de comércio eletrônico especializada em componentes de computador 
                    e eletrônicos.`,
                    details: [
                        "Java",
                        "Spring Boot",
                        "Spring Webflux",
                        "Thymeleaf",
                        "JavaScript",
                        "jQuery",
                        "Marked.js",
                        "OpenAI API",
                        "JTokkit",
                        "Inteligência Artificial (I.A.)",
                    ],
                },
            },
            vendasmvc: {
                title: "MVC</br>Vendas C#",
                image: "/images/projects/vendasmvc.png",
                link: "https://github.com/Ranieeery/VendasMVC",
                icons: ["uil", "uil-shopping-basket", "services__icon"],
                tags: ["C#", ".NET", "MySQL", "ASP.NET Core MVC"],
                modal: {
                    title: "VendasMVC",
                    description: `Consiste em uma aplicação Web de um sistema de 
                    vendas com interface gráfica para manipular o banco de dados.`,
                    details: [
                        "C#",
                        ".NET",
                        "ASP.NET Core MVC",
                        "Entity Framework",
                        "LINQ",
                        "MySQL",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        "Padrões de Projeto",
                    ],
                },
            },
            blog: {
                title: "Blog</br>Pessoal",
                image: "/images/projects/blog.png",
                link: "https://ranieeery.github.io/",
                icons: ["uil", "uil-document-layout-left", "services__icon"],
                tags: ["Ruby", "Jekyll", "Shell", "Docker"],
                modal: {
                    title: "Blog Pessoal",
                    description: `Blog pessoal feito com Jekyll em um container
                    docker onde irei postar sobre tecnologia, programação e 
                    outros assuntos relacionados que sejam do meu interesse.`,
                    details: [
                        "Ruby",
                        "Jekyll",
                        "Shell",
                        "Docker",
                        "HTML",
                        "Markdown",
                    ],
                },
            },
            correios: {
                title: "Busca</br>Correios",
                image: "/images/projects/correios.png",
                link: "https://github.com/Ranieeery/Busca-CEP",
                icons: ["uil", "uil-envelope", "services__icon"],
                tags: ["Java", "MySQL", "JUnit", "Spring Boot", "Swagger"],
                modal: {
                    title: "Busca CEP API REST",
                    description: `Programa que salva uma lista de CEPs extraídas dos
                    correios em um banco SQL e permite a consulta desses CEPs via API 
                    REST.`,
                    details: [
                        "Java",
                        "Spring Boot",
                        "Spring Data JPA",
                        "Lombok",
                        "MySQL",
                        "JUnit",
                        "Swagger",
                    ],
                },
            },
            fitlife: {
                title: "Fitlife</br>Academia",
                image: "/images/projects/fitlife.png",
                link: "https://fitlife-94c49.web.app/",
                icons: ["uil", "uil-dumbbell", "services__icon"],
                tags: ["HTML", "CSS", "Firebase"],
                modal: {
                    title: "Fitlife",
                    description: `Uma landing page de uma academia fictícia`,
                    details: ["HTML", "CSS", "Firebase"],
                },
            },
            portfolio: {
                title: "Portfolio",
                image: "/images/projects/portfolio.png",
                link: "https://github.com/Ranieeery/raniery.dev",
                icons: ["uil", "uil-user", "services__icon"],
                tags: ["TypeScript", "Next.js", "React", "Node.js"],
                modal: {
                    title: "Portfolio",
                    description: `Meu portfólio pessoal feito com Next.js e TypeScript`,
                    details: [
                        "TypeScript",
                        "Next.js",
                        "React",
                        "Node.js",
                        "CSS Nano",
                        "HTML",
                        "CSS",
                        "Prettier",
                        "Vercel",
                    ],
                },
            },
            // test: {
            //     title: "",
            //     image: "/images/projects/placeholder.png",
            //     link: "",
            //     icons: [],
            //     tags: [],
            //     modal: {
            //         title: "",
            //         description: ``,
            //         details: [],
            //     },
            // },
        },
    },
    contact: {
        title: "Contato",
        subtitle: "Entre em contato para conversarmos",
        link: "Entrar em contato",
        info: [
            { title: "Telefone (Celular)", subtitle: "+55 (31) 9 9197-4503" },
            { title: "E-mail", subtitle: "raniery2003@hotmail.com" },
            { title: "Localização", subtitle: "Contagem, MG" },
        ],
    },
    footer: {
        title: "Raniery",
        subtitle: "Desenvolvedor Fullstack",
        note: `Raniery. Todos os direitos reservados. ${new Date().getFullYear()}`,
        home: "Início",
        about: "Sobre",
        portfolio: "Portfólio",
        contact: "Contato",
    },
};
