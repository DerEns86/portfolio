import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Viktor Ens';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de'); // Setze die Standard-Sprache
    translate.use('de'); // Aktiviere die Standard-Sprache
  }

  getLanguage(){
    return this.translate.store.currentLang
  }

  ngOnInit(): void {
    AOS.init();

  }

}
