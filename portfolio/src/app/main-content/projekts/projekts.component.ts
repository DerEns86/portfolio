import { Component, OnInit} from '@angular/core';
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

  constructor(){
  }

  ngOnInit(): void {
    this.projects = getProjects();

    console.log(this.projects)
  }

//  @Input() project: Project
}
