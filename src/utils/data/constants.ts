import Experience from "../../interfaces/Experience";
import ProfileBio from "../../interfaces/ProfileBio";
import Project from "../../interfaces/Project";
import SkillSection from "../../interfaces/SkillSection";

export const Bio: ProfileBio = {
  name: "Wendell Morais",
  role: "Desenvolvedor Fullstack",
  description: "Desenvolvedor de software há mais de um ano, com experiência em desenvolvimento Fullstack. Amante de tecnologia desde pequeno, apaixonado por desenvolver ideias e transformá-las em realidade com a programação.",
  github: "https://github.com/wendellmoraisz",
  resume: "https://drive.google.com/file/d/1iNMBhmWH1Ijhd1rI3gusJ39dh-xCE1BG/view?usp=sharing",
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
        image: "data:image/png;base64,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",
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
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://www.svgrepo.com/show/331488/mongodb.svg",
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
          "https://camo.githubusercontent.com/fbfcb9e3dc648adc93bef37c718db16c52f617ad055a26de6dc3c21865c3321d/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667",
      },
      {
        name: "GitHub",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
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
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
    ],
  },
];

export const Experiences: Experience[] = [
  {
    id: 0,
    companyLogo: "https://media.licdn.com/dms/image/C4D0BAQHIhKiX05jbEQ/company-logo_200_200/0/1645028923044/telluriatecnologia_logo?e=2147483647&v=beta&t=5sGvA6lqLjOP-4pvXbnqi87Sf5d5D95bhn29RRk8NV4",
    role: "Estagiário de Desenvolvimento",
    company: "Telluria Tecnologia",
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