import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { JoinComponent } from './main-content/join/join.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'projects', component: ProjectPageComponent },
  { path: 'join', component: JoinComponent },
];
