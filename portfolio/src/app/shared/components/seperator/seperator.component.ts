import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seperator',
  standalone: true,
  imports: [],
  templateUrl: './seperator.component.html',
  styleUrl: './seperator.component.scss',
})
export class SeperatorComponent {
  @Input() label: string = '';
  @Input() marginRight: string = '0';
}
