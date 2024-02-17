import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  @HostListener('window:resize', ['$event'])
onResize(event: { target: { innerWidth: any; }; }) {
  let width=event.target.innerWidth;
  console.log(event.target.innerWidth);
  return width;
}
  ngOnInit(): void {
    AOS.init();

  }

}
