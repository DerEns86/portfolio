import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-modal',
  standalone: true,
  imports: [],
  templateUrl: './img-modal.component.html',
  styleUrl: './img-modal.component.scss',
})
export class ImgModalComponent {
  @Input() imageUrl!: string;
  @Output() closeModal = new EventEmitter<void>();

  onClose() {
    this.closeModal.emit();
  }
}
