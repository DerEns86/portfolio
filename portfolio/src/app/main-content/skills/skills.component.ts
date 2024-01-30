import { Component } from '@angular/core';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ CommonModule ,SkillCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', iconPath: 'angular.png' },
    { name: 'Typescript', iconPath: 'ts.png' },
  ]
}
