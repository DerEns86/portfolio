import { Component, computed, OnInit, signal } from '@angular/core';
import { IProject } from '../../interfaces/project.interface';
import { getProjects, getWipProjects } from '../../models/project-data';
import { ProjectCardComponent } from '../../main-content/projekts/project-card/project-card.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ProjectCardComponent, RouterLink, TranslateModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss',
})
export class ProjectPageComponent implements OnInit {
  projects: IProject[] = [];
  wipProjects: IProject[] = [];

  filterSignal = signal('All');
  allProjectsSignal = signal<IProject[]>([]);

  filteredProjects = computed(() => {
    const filter = this.filterSignal();
    const allProjects = this.allProjectsSignal();

    if (filter === 'All') return allProjects;

    return allProjects.filter((project) => project.usedTech.includes(filter));
  });

  ngOnInit(): void {
    this.projects = getProjects();
    this.wipProjects = getWipProjects();
    this.allProjectsSignal.set([...this.projects, ...this.wipProjects]);
  }

  getAllProjects() {}

  handleFilter(name: string) {
    this.filterSignal.set(name);
  }
}
