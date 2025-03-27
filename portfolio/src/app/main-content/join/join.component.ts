import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/project.interface';
import { getJoinData } from '../../models/project-data';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent implements OnInit {
  projects: IProject[] = [];

  ngOnInit(): void {
    this.projects = getJoinData();
  }
}
