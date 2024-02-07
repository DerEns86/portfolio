import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit{

ngOnInit(): void {
    window.scrollTo(0,0);
}

}
