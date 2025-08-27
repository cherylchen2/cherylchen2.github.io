import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

// PrimeNG modules
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';


type projectDetails = {
  name: string;
  active: boolean;
  path: string;
  logo: string;
  logoDisplayName: boolean;
  cardPath: string;
  link: string | null;
  description: string;
}

@Component({
  selector: 'app-projects',
  imports: [ButtonModule, CommonModule, TagModule, CardModule, DialogModule, RouterModule, CarouselModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  screenWidth: number = window.innerWidth;
  carouselDirection: "vertical" | "horizontal" = this.screenWidth > 768 ? "horizontal" : "vertical";
   projects: projectDetails[] = [
    {
      name: "FTracker",
      active: true,
      logo: "/assets/images/ftracker.png",
      logoDisplayName: true,
      path: "/assets/images/ftracker.png",
      cardPath: "/assets/images/ftracker.png",
      link: null,
      description: "A fully off-line finance tracker that works by importing exported estatements from Canadian banks. Providing visual insights of the user's spending by automatically categorizing the spending through natural language processing, such as restaurants, groceries, entertainment etc.. More details to come"
    },
    {
      name: "PetSprout",
      active: false,
      logo: "/assets/images/habipets.png",
      logoDisplayName: true,
      path: "/assets/images/habipets.png",
      cardPath: "/assets/images/habipets-card.png",
      link: "https://github.com/PhyLimChordata/PetSprout",
      description: "We want to cater this application to students who may be suffering from the effects of the pandemic on motivation levels. Techniques such as self-regulated learning, pomodoro, flowtime technique implemented into the features to encourage users to develop better study habits. Gamification is also used to motivate users to stick with their goals."
    },
    {
      name: "OnTrack",
      active: false,
      path: "/assets/images/ontrack.png",
      logoDisplayName: false,
      logo: "/assets/images/ontrack-logo.png",
      cardPath: "/assets/images/ontrack-card.png",
      link: "https://devpost.com/software/ontrack-nq0iv2",
      description: "As university students, we have all experienced large workloads, including MANY readings.Upon further research, university and college students are frustrated with the number of readings they're assigned, negatively impacting their comprehension of course content and motivation to learn. We wanted to create a solution that would help students complete their readings more effectively and efficiently. We present ONTRACK for these students."
    },
    {
      name: "African Impact Challenge (AIC)",
      active: false,
      path: "/assets/images/aic.png",
      logo: "/assets/images/aic-logo.png",
      logoDisplayName: true,
      cardPath: "/assets/images/aic-card.png",
      link: null,
      description: "African Impact Challenge is a web-app developed during the course CSCC01 in University of Toronto, its main objective, is to bring entreprrenuers, start-ups, investors and companies all together in one platform to allow more networking opportunities while also providing training for users from Africa who would like to learn more."
    },
  ]
  selectedProject: projectDetails = this.projects[0];
  projectDialogVisible: boolean = false;

  openProjectDialog(projectIndex: number): void {
    this.selectedProject = this.projects[projectIndex];
    this.projectDialogVisible = true;
  }

  closeProjectDialog(): void {
    this.projectDialogVisible = false;
  }
}
