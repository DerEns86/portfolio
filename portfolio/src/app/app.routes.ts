import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PlaygroundComponent } from './main-content/playground/playground.component';
import { JoinComponent } from './main-content/join/join.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'playground', component: PlaygroundComponent },
  { path: 'join', component: JoinComponent },
];
