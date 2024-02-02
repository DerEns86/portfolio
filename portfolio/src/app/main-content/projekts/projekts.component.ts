import { Component, OnInit, OnChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../interfaces/project.interface';
import { getProjects } from '../../models/project-data';



@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss'
})
export class ProjektsComponent implements OnInit{

  projects: IProject[] = [];
  baseImgUrl = './../../../assets/img/projectImg/';
  isHovered: boolean = false;

  constructor(){
  }

  ngOnInit(): void {
    this.projects = getProjects();

    console.log(this.projects)
  }

  

  onMouseEnter(index:number) {
    this.projects[index].isHovered = true;
    console.log(this.projects[index].isHovered)
  }

  onMouseLeave(index:number) {
    this.projects[index].isHovered = true;
  }
}


