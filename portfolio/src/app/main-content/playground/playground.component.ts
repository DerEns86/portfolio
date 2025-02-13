import { Component, OnInit } from '@angular/core';
import { getWipProjects } from '../../models/project-data';
import { IProject } from '../../interfaces/project.interface';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent implements OnInit {
  projects: IProject[] = [];

  ngOnInit(): void {
    this.projects = getWipProjects();
  }
}
