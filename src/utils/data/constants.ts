import Education from "../../interfaces/Education";
import Experience from "../../interfaces/Experience";
import ProfileBio from "../../interfaces/ProfileBio";
import Project from "../../interfaces/Project";
import SkillSection from "../../interfaces/SkillSection";

export const Bio: ProfileBio = {
  name: "Wendell Morais",
  role: "Desenvolvedor Fullstack",
  description: "Desenvolvedor de software há mais de dois anos, com experiência em desenvolvimento Fullstack. Amante de tecnologia desde pequeno, apaixonado por desenvolver ideias e transformá-las em realidade com a programação.",
  github: "https://github.com/wendellmoraisz",
  resume: "https://drive.google.com/file/d/1TjqWoTwDluvAcxo1XkyaoNlrYiVrI5LN/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/wendell-morais/",
};

export const SkillsSections: SkillSection[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "TypeScript",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      },
      {
        name: "Angular Js",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
      },
      {
        name: "React Js",
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "Material UI",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "C#",
        image: "https://www.cdnlogo.com/logos/c/27/c.svg",
      },
      {
        name: ".NET",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "RabbitMQ",
        image: "https://www.svgrepo.com/show/303576/rabbitmq-logo.svg",
      },
      {
        name: "gRPC",
        image: "https://grpc.io/img/logos/grpc-icon-color.png"
      }
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      {
        name: "Git",
        image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg",
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "JetBrains Rider",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/JetBrains_Rider_Icon.svg",
      },
      {
        name: "Visual Studio",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/2c/Visual_Studio_Icon_2022.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://cdn.worldvectorlogo.com/logos/postman.svg",
      },
    ],
  },
];

export const Experiences: Experience[] = [
  {
    id: 3,
    companyLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQEFj-fwmW3OxQ/company-logo_200_200/company-logo_200_200/0/1714392880614/alrightmediatech_logo?e=1733356800&v=beta&t=iaEpXZVoZ84yMdcQhsULgkMYAQYw40fkurL1EGtVJi0",
    role: "Desenvolvedor Fullstack",
    company: "Alright - Tempo integral",
    date: "Fev 2024 - Atualmente",
    description: "Responsável pelo desenvolvimento de interfaces com React e TypeScript, criação e manutenção de APIs em PHP com Laravel, e elaboração de scripts Python para tratamento de dados e automação de processos. Experiência em versionamento de código com Git e GitHub, manipulação de bancos de dados MySQL e Google BigQuery, e suporte à equipe de operações na implantação de anúncios em websites. Atuando dentro do framework ágil Scrum, utilizando a ferramenta Monday para gestão de tarefas.",
    skills: [
      "TypeScript",
      "ReactJs",
      "PHP",
      "Laravel",
      "Python",
      "MySQL",
      "Google BigQuery",
      "Apache Web Server",
      "Amazon AWS",
      "Git",
      "Scrum",
    ],
  },
  {
    id: 0,
    companyLogo: "https://media.licdn.com/dms/image/C4D0BAQHIhKiX05jbEQ/company-logo_200_200/0/1645028923044/telluriatecnologia_logo?e=2147483647&v=beta&t=5sGvA6lqLjOP-4pvXbnqi87Sf5d5D95bhn29RRk8NV4",
    role: "Desenvolvedor Fullstack",
    company: "Telluria Tecnologia - Estágio",
    date: "Out 2022 - Out 2023",
    description: "Contribuição para o desenvolvimento de novas funcionalidades no backend, frontend e criação de scripts SQL, tendo auxiliado em migração de sistema legado para a Web. Além disso, participação na definição de escopo com a equipe de projetos e documentação de novas atualizações do sistema.",
    skills: [
      "C#",
      ".NET",
      "TypeScript",
      "AngularJs",
      "MySQL",
      "Git",
      "Scrum",
      "Kanban",
    ],
  },
  {
    id: 1,
    companyLogo: "https://t3.ftcdn.net/jpg/02/74/19/86/360_F_274198609_QWbxYbLnZaVbSW8UPRlCvs7ui1rO5ZzL.jpg",
    role: "Desenvolvedor Web",
    company: "Freelancer",
    date: "Ago 2022 - Jan 2023",
    description: "Auxílio no desenvolvimento de plataforma de vendas, realizando migração de JavaScript para TypeScript e implementação novas telas e funcionalidades. Além disso, integração do React Query e criação de consultas com Sanity.io para gerenciamento de conteúdo da plataforma.",
    skills: [
      "TypeScript",
      "ReactJs",
      "Next.js",
      "React Query",
      "Material UI",
      "Sanity.io",
      "Git",
    ],
  },
  {
    id: 2,
    companyLogo: "https://media.licdn.com/dms/image/C4E0BAQGnZEWTF2wqKw/company-logo_200_200/0/1630577567812?e=2147483647&v=beta&t=2APllBfGIyMobjo5-F6j_uBs2IlGBYKW6nImSll7pyI",
    role: "Desenvolvedor Frontend",
    company: "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
    date: "Jun 2022 - Dez 2022",
    description: "Auxílio no desenvolvimento de página Web, com o propósito de disseminar a cultura e o turismo na cidade de Altamira - Pará.",
    skills: [
      "Javascript",
      "HTML",
      "CSS",
      "Figma",
      "Git",
    ],
  },
];

export const Projects: Project[] = [
  {
    id: 0,
    title: "News Scraping Microservices",
    description: "Aplicação com arquitetura de microsserviços que extrai novas notícias postados no site do IFPA Campus Altamira e as envia por e-mail.",
    image: "https://i.imgur.com/c3VJobP.png",
    tags: [
      "C#",
      ".NET",
      "MySQL",
      "MongoDB",
      "Docker",
      "Git",
      "RabbitMQ",
      "gRPC",
      "Web Scraping",
      "Clean Architecture",
    ],
    repository: "https://github.com/wendellmoraisz/news-scraping-microservices",
  },
  {
    id: 1,
    title: "News Scraping Monolithic",
    description: "Aplicação que extrai notícias inseridas no site do IFPA Campus Altamira e enviadas por email.",
    image: "https://i.imgur.com/yhBKTkB.png",
    tags: [
      "C#",
      ".NET",
      "MySQL",
      "Docker",
      "Git",
      "Web Scraping",
      "Clean Architecture",
    ],
    repository: "https://github.com/wendellmoraisz/news-scraping-monolithic",
  },
  {
    id: 2,
    title: "Emails Register Page",
    description: "Página de cadastro por e-mail para receber atualizações de novidades do IFPA Campus Altamira.",
    image: "https://i.imgur.com/wXDUrTo.png",
    tags: [
      "TypeScript",
      "React Js",
      "Material UI",
      "React Toastfy",
      "Git",
    ],
    repository: "https://github.com/wendellmoraisz/emails-register-page",
  },
  {
    id: 3,
    title: "Twitter Daily Cat",
    description: "Bot que posta um gato todos os dias no Twitter criado usando Clean Architecture.",
    image: "https://1000logos.net/wp-content/uploads/2017/06/Logo-Twitter.jpg",
    tags: [
      "Typescript",
      "Node.js",
      "Express.js",
      "Docker",
      "Twitter Api",
      "Clean Architecture",
    ],
    repository: "https://github.com/wendellmoraisz/twitter-daily-cat-clean-architecture",
  },
  {
    id: 4,
    title: "Movies API",
    description: "Api REST que permite gerenciamento de filmes, podendo cadastrá-los, editá-los, excluí-los e listá-los por paginação.",
    image: "https://hips.hearstapps.com/hmg-prod/images/time-travel-movies-1581634382.jpg?crop=0.502xw:1.00xh;0.251xw,0&resize=640:*",
    tags: [
      "C#",
      ".NET",
      "Entity Framework Core",
      "MySQL",
      "REST Api",
    ],
    repository: "https://github.com/wendellmoraisz/movies-api",
  },
  {
    id: 5,
    title: "Sales Assigment",
    description: "Sistema de gerenciamento de vendas e comissão de vendedores. Onde o usuário logado como gerente pode aprovar as vendas do vendedor e gerar relatórios de vendas e comissão.",
    image: "https://i.imgur.com/CM4JKu8.png",
    tags: [
      "Javascript",
      "React Js",
      "Next.js",
      "Styled Components",
      "Firebase",
    ],
    repository: "https://github.com/wendellmoraisz/sales-assignment",
    demo: "https://sales-assignment-lyart.vercel.app/",
  },
  {
    id: 6,
    title: "Games E-commerce",
    description: "Frontend de um e-commerce de jogos, onde o usuário pode visualizar os jogos, adicioná-los ao carrinho e finalizar a compra. O sistema também possui uma página de admin para gerenciamento de estoque da loja.",
    image: "https://raw.githubusercontent.com/wendellmoraisz/GamesEcommerce-client/3d1f4656610c25c2030411bb94bda46c1bbea5a5/public/screenshots/initial-page.png",
    tags: [
      "Typescript",
      "React Js",
      "Styled Components",
    ],
    repository: "https://github.com/wendellmoraisz/GamesEcommerce-client",
  },
];

export const Educations: Education[] = [
  {
    id: 0,
    courseName: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    schoolName: "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
    schollLogo: "https://media.licdn.com/dms/image/C4E0BAQGnZEWTF2wqKw/company-logo_200_200/0/1630577567812?e=2147483647&v=beta&t=2APllBfGIyMobjo5-F6j_uBs2IlGBYKW6nImSll7pyI",
    date: "Fev 2021 - Dez 2023",
    description: "Durante o curso, tive participação ativa em iniciativas da instituição, como projetos de monitoria e extensão. Além disso, fiz parte do XV Seminário de Iniciação Científica, Tecnológica e Inovação.",
  },
  {
    id: 5,
    courseName: "Criando uma API Web com os controladores do ASP.NET",
    schoolName: "Microsoft Learn",
    schollLogo: "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_200_200/company-logo_200_200/0/1630652622688/microsoft_logo?e=1733356800&v=beta&t=REZJRk_Q8wrLAfYj3tRmF0crh3BCLk1j8DJjHrPOKNE",
    date: "Dez 2023",
    description: "Neste curso, pude aprofundar meus conhecimentos em ASP.NET e entender melhor como sua estrutura de requisições HTTP funciona.",
  },
  {
    id: 1,
    courseName: "Creating .NET Core Microservices using Clean Architecture",
    schoolName: "Udemy",
    schollLogo: "data:image/png;base64,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",
    date: "Nov 2023 - Dez 2023",
    description: "O curso abordou conceitos teóricos de práticos da construção de Microsserviços com C# e .NET, seguindo os princípios da Clean Architecture. Passando também por tópicos como Mensageria, padrão publish/subscribe, gRPC e Docker.",
  },
  {
    id: 2,
    courseName: "Bootcamp WEX - Desenvolvimento .NET e QA",
    schoolName: "Digital Innovation One",
    schollLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQG86uup28-NVA/company-logo_200_200/company-logo_200_200/0/1722255038542/dio_makethechange_logo?e=1733356800&v=beta&t=QC7VfFy5WHmJyUPEB-wrb7SXdaVpku0iPNbvnXeu0ww",
    date: "Ago 2023 - Nov 2023",
    description: "Bootcamp focado no ambiente .NET e Qualidade de Software. Nele, aprofundei meus conhecimentos em C#, .NET Core, ASP.NET e SQL Server. Além disso, tive a oportunidade de ter contato com testes automatizados, criando um projeto prático no final da jornada.",
  },
  {
    id: 3,
    courseName: "Curso Web Moderno Completo com Javascript + Projetos",
    schoolName: "Udemy",
    schollLogo: "data:image/png;base64,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",
    date: "Mai 2023 - Dez 2023",
    description: "Curso fullstack focado em ReactJS, AngularJS, Typescript, HTML, CSS, Node.js, MySQL e MongoDB. Com desenvolvimento de projetos práticos utilizando as tecnologias.",
  },
  {
    id: 4,
    courseName: "Bootcamp TQI FullStack Developer",
    schoolName: "Digital Innovation One",
    schollLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQG86uup28-NVA/company-logo_200_200/company-logo_200_200/0/1722255038542/dio_makethechange_logo?e=1733356800&v=beta&t=QC7VfFy5WHmJyUPEB-wrb7SXdaVpku0iPNbvnXeu0ww",
    date: "Mai 2022 - Jul 2022",
    description: "Nessa formação fullstack, pude aprofundar meus conhecimentos em ReactJS, Typescript, HTML, CSS e MySQL. Também tive contato Java e Spring Boot no backend. Ao final da formação, pude criar um projeto fullstack com as tecnologias citadas.",
  },
];