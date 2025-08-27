import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';

import { DetailedAboutMeComponent } from '../detailed-about-me/detailed-about-me.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-hub',
  imports: [CommonModule, ButtonModule, RouterModule, NavBarComponent, DetailedAboutMeComponent, ProjectsComponent],
  templateUrl: './hub.component.html',
  styleUrl: './hub.component.scss'
})
export class HubComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/about-me') {
      this.activeItem = 'About Me';
    } else {
      this.activeItem = 'Projects';
    }
  }

    navItems = [
      { label: 'Home', link: '/' },
      { label: 'Projects', link: '/projects' },
      { label: 'About Me', link: '/about-me' }
    ];
    activeItem = 'About Me';
}
