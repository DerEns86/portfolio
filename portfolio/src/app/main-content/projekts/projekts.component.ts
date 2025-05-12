import { Component, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../interfaces/project.interface';
import { getProjects } from '../../models/project-data';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-projekts',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink, ProjectCardComponent],
  templateUrl: './projekts.component.html',
  styleUrl: './projekts.component.scss',
})
export class ProjektsComponent implements OnInit {
  projects: IProject[] = [];
  baseImgUrl = './../../../assets/img/projectImg/';
  isHovered: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.projects = this.getMainProjects();
  }

  getMainProjects() {
    return [getProjects()[1], getProjects()[3], getProjects()[2]];
  }

  onMouseEnter(index: number) {
    this.projects[index].isHovered = true;
  }

  onMouseLeave(index: number) {
    this.projects[index].isHovered = false;
  }
}
