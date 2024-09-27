import { IProject } from "../interfaces/project.interface";

export function getProjects(): IProject[] {
  return [
    {
      id: 1,
      imgUrl: "timeToQuit.png",
      title: "Time-To-Quit",
      usedTech: ["Java Spring Boot", "React", "MongoDB","OAuth"],
      description: "This stop-smoking app tracks daily cigarette consumption and shows saved cigarettes and money. Additionally, users can add or delete personal motivations and goals with prices.",
      caution: "The page may take up to two minutes to load.",
      projectUrl: "https://time-to-quit.onrender.com",
      gitUrl: "https://github.com/DerEns86/time-to-quit",
      isHovered: false
    },
    {
      id: 2,
      imgUrl: "pps_dashboard.png",
      title: "PPS-Hub",
      usedTech: ["Angular", "Firebase", "Google Auth"],
      description: "A software designed to efficiently manage manufacturing processes in machining operations. It allows for the management of employees, machine assignments, and project planning.",
      caution: null,
      projectUrl: "https://pps.v-ens.de",
      gitUrl: "https://github.com/DerEns86/pps-hub",
      isHovered: false
    },
    {
      id: 3,
      imgUrl: "join.png",
      title: "Join",
      usedTech: ["JavaScript" ,"HTML", "CSS" ],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      caution: null,
      projectUrl: "https://portfolio.v-ens.de/html/index.html",
      gitUrl: "https://github.com/DerEns86/Join",
      isHovered: false
    },
    {
      id: 4,
      imgUrl: "elPolloLoco.png",
      title: "Pollo Loco",
      usedTech: ["JavaScript" ,"HTML", "CSS" ],
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      caution: null,
      projectUrl: "https://polloloco.v-ens.de/index.html",
      gitUrl: "https://github.com/DerEns86/el_pollo_loco",
      isHovered: false
    },
    // {
    //   id: 3,
    //   imgUrl: "simpleCrm.png",
    //   title: "Simple CRM",
    //   usedTech: ["Angular" ,"Firebase" ],
    //   description: "A very Simple Customer Relationship Management system working with CRUD functionality. ",
    //   projectUrl: "",
    //   gitUrl: "https://github.com/DerEns86/daNotes",
    //   isHovered: false
    // },
    
  ];
}
