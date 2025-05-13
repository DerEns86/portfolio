import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImgModalComponent } from '../../../shared/img-modal/img-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, CommonModule, TranslateModule, ImgModalComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() project: any;
  @Input() index!: number;
  @Input() odd!: boolean;
  @Input() even!: boolean;

  baseImgUrl = './../../../../assets/img/projectImg/';
  selectedImageUrl: string = '';

  showModal: boolean = false;

  openModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  // onMouseEnter(index: number) {
  //   this.projects[index].isHovered = true;
  // }

  // onMouseLeave(index: number) {
  //   this.projects[index].isHovered = false;
  // }
}
