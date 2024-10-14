import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TranslateModule, NgxTypedJsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
