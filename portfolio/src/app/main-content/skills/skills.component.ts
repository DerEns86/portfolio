import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', iconPath: 'angular.png' },
    { name: 'Typescript', iconPath: 'ts.png' },
    { name: 'Javascript', iconPath: 'js.png' },
    { name: 'HTML', iconPath: 'ts.png' },
    { name: 'CSS', iconPath: 'css.png' },
    { name: 'Git', iconPath: 'git.png' },
    { name: 'Firebase', iconPath: 'firebase.png' },
    { name: 'Scrum', iconPath: 'scrum.png' },
    { name: 'Rest-API', iconPath: 'api.png' },
    { name: 'Matiral Design', iconPath: 'material.png' },
  ]
}
