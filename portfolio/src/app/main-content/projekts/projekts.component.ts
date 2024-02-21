import { Component, OnInit, OnChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../interfaces/project.interface';
import { getProjects } from '../../models/project-data';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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

   
  }

  

  onMouseEnter(index:number) {
    this.projects[index].isHovered = true;
  }

  onMouseLeave(index:number) {
    this.projects[index].isHovered = false;
  }
}


