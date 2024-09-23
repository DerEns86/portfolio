import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', iconPath: 'angular.png' },
    { name: 'TypeScript', iconPath: 'ts.png' },
    { name: 'JavaScript', iconPath: 'js.png' },
    { name: 'Java', iconPath: 'java2.png' },
    { name: 'Spring Boot', iconPath: 'spring-boot.svg' },
    { name: 'HTML', iconPath: 'ts.png' },
    { name: 'CSS', iconPath: 'css.png' },
    { name: 'React', iconPath: 'react.png' },
    { name: 'Git', iconPath: 'git.png' },
    { name: 'MongoDB', iconPath: 'mongo.png' },
    { name: 'Firebase', iconPath: 'firebase.png' },
    { name: 'CI/CD with Github Actions', iconPath: 'github-2.png' },
    { name: 'Scrum', iconPath: 'scrum.png' },
    { name: 'Rest-API', iconPath: 'api.png' },
    { name: 'Material Design', iconPath: 'material.png' },
  ]
}
