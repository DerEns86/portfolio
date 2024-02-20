import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})



export class HeaderComponent {

  currentLanguage: string;
  
  constructor(private translate: TranslateService){ 
    this.currentLanguage = this.translate.currentLang;
   }

  
  menuOpened = false;


  changeLanguage(){
    const newLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(newLanguage);
    this.currentLanguage = newLanguage;
    console.log(this.translate.store.currentLang)
  }


  ontoggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

  onCloseMenu(){
    this.menuOpened = false;
  }
}



