import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-seperator',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './seperator.component.html',
  styleUrl: './seperator.component.scss',
})
export class SeperatorComponent {
  @Input() label: string = '';
  // @Input() marginRight: string = '0';
}
