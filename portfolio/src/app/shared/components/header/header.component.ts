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

  constructor(private translate: TranslateService){  }


  menuOpened = false;


  changeLanguage(language:string){
    this.translate.use(language);
  }


  ontoggleMenu(){
    this.menuOpened = !this.menuOpened;
  }

  onCloseMenu(){
    this.menuOpened = false;
  }
}



