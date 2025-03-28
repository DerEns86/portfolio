import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: any;
  @Input() projects: any;
  @Input() index!: number;
  @Input() odd!: boolean;
  @Input() even!: boolean;

  baseImgUrl = './../../../../assets/img/projectImg/';

  onMouseEnter(index: number) {
    this.projects[index].isHovered = true;
  }

  onMouseLeave(index: number) {
    this.projects[index].isHovered = false;
  }
}
