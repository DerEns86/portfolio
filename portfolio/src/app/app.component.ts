import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Viktor Ens';

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.setDefaultLang('de'); // Setze die Standard-Sprache
    translate.use('de'); // Aktiviere die Standard-Sprache
  }

  getLanguage() {
    return this.translate.store.currentLang;
  }

  ngOnInit(): void {
    AOS.init();
    // this.pingWebsite();
    // this.pingJoin();
    this.ping();
    this.pingJoin();
  }

  ping() {
    this.http.get('https://time-to-quit.onrender.com/api/content').subscribe({
      next: (response) => console.log('Time to quit response:', response),
      error: () => console.warn('Fetching failed! But the website is up!'),
    });
  }

  pingJoin() {
    this.http
      .get('https://join-api-q9lx.onrender.com/api/public/wakeup')
      .subscribe({
        next: (response) => console.log('Join response:', response),
        error: () => console.warn('Fetching failed! But the website is up!'),
      });
  }
}
