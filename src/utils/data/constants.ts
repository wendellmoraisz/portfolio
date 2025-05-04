import Education from "../../interfaces/Education";
import Experience from "../../interfaces/Experience";
import ProfileBio from "../../interfaces/ProfileBio";
import Project from "../../interfaces/Project";
import SkillSection from "../../interfaces/SkillSection";

import AlrigthLogo from "../../images/logos/alright.png";
import TelluriaLogo from "../../images/logos/telluria.png";
import FreelancerLogo from "../../images/logos/freelancer.png";
import IFPALogo from "../../images/logos/ifpa.png";
import AmbiparLogo from "../../images/logos/ambipar.png";
import MicrosoftLogo from "../../images/logos/microsoft.png";
import UdemyLogo from "../../images/logos/udemy.png";
import DioLogo from "../../images/logos/dio.png";

import NoticiasIFPA from "../../images/projects/noticias-ifpa.png";
import TwitterDailyCat from "../../images/projects/twitter-daily-cat.png";
import MoviesApi from "../../images/projects/movies-api.png";
import SalesAssignment from "../../images/projects/sales-assignment.png";
import GamesEcommerce from "../../images/projects/games-ecommerce.png";

export const Bio: ProfileBio = {
  name: "Wendell Morais",
  role: "Desenvolvedor Fullstack",
  description: "Amante de tecnologia desde pequeno e apaixonado por transformar ideias em soluções reais.",
  github: "https://github.com/wendellmoraisz",
  resume: "https://drive.google.com/file/d/1PN3g7D9GILlGRU1WzRN_3RhFeByck8ZN/view?usp=sharing",
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
        name: "React",
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next.js",
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "Tailwind CSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png?20230715030042",
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
        name: "Python",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/701px-Python-logo-notext.svg.png"
      },
      {
        name: "PostgreSQL",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
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
        name: "Amazon Web Services",
        image: "https://www.svgrepo.com/show/353443/aws.svg"
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
    id: 4,
    companyLogo: AmbiparLogo,
    role: "Desenvolvedor Fullstack",
    company: "Ambipar Brasil - Tempo integral",
    date: "Nov 2024 - Atualmente",
    description: "Responsável pelo desenvolvimento de aplicações web utilizando React, TypeScript e Python, bem como pela criação de ferramentas para tratamento de dados geoespaciais. Experiência na manutenção e otimização de bancos de dados PostgreSQL, além da criação e gerenciamento de instâncias em serviços AWS. Atuação com versionamento de código utilizando Git, e participação em equipes ágeis seguindo a metodologia Scrum.",
    skills: [
      "TypeScript",
      "ReactJs",
      "Python",
      "PostgreSQL",
      "Docker",
      "AWS",
      "CI/CD",
      "GitHub",
      "Git",
      "Scrum",
    ],
  },
  {
    id: 3,
    companyLogo: AlrigthLogo,
    role: "Desenvolvedor Fullstack",
    company: "Alright - Tempo integral",
    date: "Fev 2024 - Out 2024",
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
      "AWS",
      "Git",
      "Scrum",
    ],
  },
  {
    id: 0,
    companyLogo: TelluriaLogo,
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
    companyLogo: FreelancerLogo,
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
    companyLogo: IFPALogo,
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
    image: NoticiasIFPA,
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
    image: NoticiasIFPA,
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
    id: 3,
    title: "Twitter Daily Cat",
    description: "Bot que posta um gato todos os dias no Twitter criado usando Clean Architecture.",
    image: TwitterDailyCat,
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
    image: MoviesApi,
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
    title: "Sales Assignment",
    description: "Sistema de gerenciamento de vendas e comissão de vendedores. Onde o usuário logado como gerente pode aprovar as vendas do vendedor e gerar relatórios de vendas e comissão.",
    image: SalesAssignment,
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
    image: GamesEcommerce,
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
    schollLogo: IFPALogo,
    date: "Fev 2021 - Jul 2024",
    description: "Durante o curso, tive participação ativa em iniciativas da instituição, como projetos de monitoria e extensão. Além disso, fiz parte do XV Seminário de Iniciação Científica, Tecnológica e Inovação.",
  },
  {
    id: 6,
    courseName: "Inglês Independente B1",
    schoolName: "Instituto Federal de Educação, Ciência e Tecnologia do Pará",
    schollLogo: IFPALogo,
    date: "Fev 2024 - Jul 2024",
    description: "Curso de inglês com foco em conversação, escuta e escrita.",
  },
  {
    id: 5,
    courseName: "Criando uma API Web com os controladores do ASP.NET",
    schoolName: "Microsoft Learn",
    schollLogo: MicrosoftLogo,
    date: "Dez 2023",
    description: "Neste curso, pude aprofundar meus conhecimentos em ASP.NET e entender melhor como sua estrutura de requisições HTTP funciona.",
  },
  {
    id: 1,
    courseName: "Creating .NET Core Microservices using Clean Architecture",
    schoolName: "Udemy",
    schollLogo: UdemyLogo,
    date: "Nov 2023 - Dez 2023",
    description: "O curso abordou conceitos teóricos de práticos da construção de Microsserviços com C# e .NET, seguindo os princípios da Clean Architecture. Passando também por tópicos como Mensageria, padrão publish/subscribe, gRPC e Docker.",
  },
  {
    id: 2,
    courseName: "Bootcamp WEX - Desenvolvimento .NET e QA",
    schoolName: "Digital Innovation One",
    schollLogo: DioLogo,
    date: "Ago 2023 - Nov 2023",
    description: "Bootcamp focado no ambiente .NET e Qualidade de Software. Nele, aprofundei meus conhecimentos em C#, .NET Core, ASP.NET e SQL Server. Além disso, tive a oportunidade de ter contato com testes automatizados, criando um projeto prático no final da jornada.",
  },
  {
    id: 3,
    courseName: "Curso Web Moderno Completo com Javascript + Projetos",
    schoolName: "Udemy",
    schollLogo: UdemyLogo,
    date: "Mai 2023 - Dez 2023",
    description: "Curso fullstack focado em ReactJS, AngularJS, Typescript, HTML, CSS, Node.js, MySQL e MongoDB. Com desenvolvimento de projetos práticos utilizando as tecnologias.",
  },
  {
    id: 4,
    courseName: "Bootcamp TQI FullStack Developer",
    schoolName: "Digital Innovation One",
    schollLogo: DioLogo,
    date: "Mai 2022 - Jul 2022",
    description: "Nessa formação fullstack, pude aprofundar meus conhecimentos em ReactJS, Typescript, HTML, CSS e MySQL. Também tive contato Java e Spring Boot no backend. Ao final da formação, pude criar um projeto fullstack com as tecnologias citadas.",
  },
];