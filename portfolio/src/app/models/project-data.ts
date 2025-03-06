import { IProject } from '../interfaces/project.interface';

export function getProjects(): IProject[] {
  return [
    {
      id: 3,
      imgUrl: 'join.png',
      title: 'Join Full Stack',
      usedTech: [
        'Java',
        'Spring Boot',
        'JWT',
        'Postgres',
        'Angular',
        'TypeScript',
        'Bootstrap',
        'RXJS',
        'SCSS',
      ],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions.',
      caution: 'The page may take up to two minutes to load!',
      projectUrl: 'http://localhost:4200/join',
      // projectUrl: 'https://v-ens.de/join',
      gitUrl: 'https://github.com/DerEns86/Join',
      isHovered: false,
    },
    {
      id: 1,
      imgUrl: 'timeToQuit.png',
      title: 'Time-To-Quit',
      usedTech: ['Java Spring Boot', 'React', 'MongoDB', 'OAuth'],
      description:
        'This stop-smoking app tracks daily cigarette consumption and shows saved cigarettes and money. Additionally, users can add or delete personal motivations and goals with prices.',
      caution: 'The page may take up to two minutes to load!',
      projectUrl: 'https://time-to-quit.onrender.com',
      gitUrl: 'https://github.com/DerEns86/time-to-quit',
      isHovered: false,
    },
    {
      id: 2,
      imgUrl: 'pps_dashboard.png',
      title: 'PPS-Hub',
      usedTech: ['Angular', 'Firebase', 'Google Auth'],
      description:
        'A software designed to efficiently manage manufacturing processes in machining operations. It allows for the management of employees, machine assignments, and project planning.',
      caution: null,
      projectUrl: 'https://pps.v-ens.de',
      gitUrl: 'https://github.com/DerEns86/pps-hub',
      isHovered: false,
    },

    {
      id: 4,
      imgUrl: 'elPolloLoco.png',
      title: 'Pollo Loco',
      usedTech: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      caution: null,
      projectUrl: 'https://polloloco.v-ens.de/index.html',
      gitUrl: 'https://github.com/DerEns86/el_pollo_loco',
      isHovered: false,
    },
  ];
}

export function getWipProjects(): IProject[] {
  return [
    {
      id: 3,
      imgUrl: 'join.png',
      title: 'Join',
      usedTech: ['JavaScript', 'HTML', 'CSS'],
      description:
        'Aufgabenmanager nach dem Vorbild des Kanban-Systems. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen.',
      caution: null,
      projectUrl: 'https://portfolio.v-ens.de/html/index.html',
      // projectUrl: '',
      gitUrl: 'https://github.com/DerEns86/Join',
      isHovered: false,
    },
    {
      id: 3,
      title: 'URL Shortener',
      usedTech: [
        'Java',
        'Spring Boot',
        'Postgres',
        'Angular',
        'TypeScript',
        'Tailwind CSS',
      ],
      description:
        'URL Shortener ist eine Full Stack Webanwendung, die es Benutzern ermöglicht, lange URLs in besser verwaltbare Links zu kürzen. Die Anwendung bietet außerdem Analysen zur Nutzung der verkürzten URLs.',
      caution: null,
      gitUrl: 'https://github.com/DerEns86/url-shortener',
      isHovered: false,
      imgUrl: '',
      projectUrl: '',
    },
    {
      id: 4,
      title: 'Shop',
      usedTech: [
        'Angular',
        'Bootstrap',
        'RXJS',
        'Signals',
        'SCSS',
        'TypeScript',
      ],
      description:
        'Ein Angular Fake-Shop. Es dient als Beispielanwendung für die Verwendung von Angular-Funktionen wie signals, routing, services und HTTP-Client. Es nutzt die FakeStore-API als Datenquelle und unterstützt dynamische Routen, Filterung nach Kategorie und Verwaltung eines Warenkorbs.',
      caution: null,
      gitUrl: 'https://github.com/DerEns86/kalle-shop',
      isHovered: false,
      imgUrl: '',
      projectUrl: '',
    },
  ];
}

export function getJoinData(): IProject[] {
  return [
    {
      id: 1,
      title: 'Join_Api',
      usedTech: ['Java', 'JWT', 'Postgres', 'Spring Boot', 'Swagger'],
      description:
        'Eine API nach Vorlage von Join. Die API soll die Möglichkeit bieten, Aufgaben zu erstellen, zu bearbeiten und zu löschen. Auth wird mithilfe von JWT gewährleistet und gespeichert werden die Daten in einer Postgres-Datenbank.',
      caution: null,
      gitUrl: 'https://github.com/DerEns86/join_api',
      isHovered: false,
      imgUrl: '',
      projectUrl: '',
    },
    {
      id: 2,
      title: 'Join_UI',
      usedTech: ['Angular', 'Bootstrap', 'RXJS', 'SCSS', 'TypeScript'],
      description:
        'Join UI ist ein Kanban-Projektmanagement-Tool, das mit Angular erstellt wurde. Diese Anwendung hilft Teams, ihre Aufgaben und Projekte mithilfe der Kanban-Methodik effizient zu verwalten. Das Tool bietet Funktionen wie Aufgabenerstellung, Priorisierung und Nachverfolgung sowie eine reaktionsfähige Benutzeroberfläche.',
      caution:
        'Da das Projekt auf render.com gehostet wird, kann es bis zu zwei Minuten dauern, bis der Backend-Server hochgefahren ist!',
      gitUrl: 'https://github.com/DerEns86/join_ui',
      isHovered: false,
      imgUrl: '',
      projectUrl: 'https://join.v-ens.de',
    },
  ];
}
