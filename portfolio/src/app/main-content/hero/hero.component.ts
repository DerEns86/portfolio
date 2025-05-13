import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule, NgxTypedJsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
