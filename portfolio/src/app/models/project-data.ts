import { IProject } from "../interfaces/project.interface";

export function getProjects(): IProject[] {
  return [
    {
      id: 1,
      imgUrl: "join.png",
      title: "Join",
      usedTech: ["JavaScript" ,"HTML", "CSS" ],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      projectUrl: "",
      gitUrl: "https://github.com/DerEns86/daNotes",
      isHovered: false
    },
    {
      id: 2,
      imgUrl: "elPolloLoco.png",
      title: "Pollo Loco",
      usedTech: ["JavaScript" ,"HTML", "CSS" ],
      description: "Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.",
      projectUrl: "",
      gitUrl: "https://github.com/DerEns86/daNotes",
      isHovered: false
    },
    {
      id: 3,
      imgUrl: "simpleCrm.png",
      title: "Simple CRM",
      usedTech: ["Angular" ,"Firebase" ],
      description: "A very Simple Customer Relationship Management system working with CRUD functionality. ",
      projectUrl: "",
      gitUrl: "https://github.com/DerEns86/daNotes",
      isHovered: false
    },
    
    {
      id: 4,
      imgUrl: "crypto.png",
      title: "Crypto Converter",
      usedTech: ["Angular" ,"Typescript", "RestAPI", "HTML", "CSS" ],
      description: "Simple currency converter based on a public API displaying exchange rate charts.",
      projectUrl: "",
      gitUrl: "https://github.com/DerEns86/daNotes",
      isHovered: false
    },
  ];
}
