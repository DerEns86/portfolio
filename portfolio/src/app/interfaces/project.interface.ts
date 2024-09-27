export interface IProject {
    id:number;
    imgUrl:string;
    title:string;
    usedTech:string[];
    description:string;
    caution: string | null,
    projectUrl:string;
    gitUrl:string;
    isHovered:boolean

}
