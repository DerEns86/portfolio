import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/project.interface';
import { getProjects, getWipProjects } from '../../models/project-data';
import { ProjectCardComponent } from '../../main-content/projekts/project-card/project-card.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  projects: IProject[] = [];
  wipProjects: IProject[] = [];

  ngOnInit(): void {
    this.getAllProjects();
  }

  getAllProjects() {
    this.projects = getProjects();
    this.wipProjects = getWipProjects();
  }
}
