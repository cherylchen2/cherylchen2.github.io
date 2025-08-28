import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { ScrollDownHintComponent } from '../../shared/components/scroll-down-hint/scroll-down-hint.component';

@Component({
  selector: 'app-detailed-about-me',
  imports: [AccordionModule, ButtonModule, RouterModule, ScrollDownHintComponent],
  providers: [ScrollDownHintComponent],
  standalone: true,
  templateUrl: './detailed-about-me.component.html',
  styleUrl: './detailed-about-me.component.scss'
})
export class DetailedAboutMeComponent {
  background: string = `
    I am a University of Toronto alumini, graduated in 2023 with Bachelor of Science, Computer Science degree.
    </br></br>
    I believe  <b>software should empower everyone</b>, and I am passionate about <b>leveraging technology to improve quality of
    life</b> by contributing and building solutions that make an impact in people's lives.
  `;

  screenWidth: number = window.innerWidth;
  defaultAccordionIndex: string = this.screenWidth > 768 ? '0' : '-1';

  constructor(private scrollHint: ScrollDownHintComponent) {}

  ngAfterViewInit(): void {
    if(typeof window != 'undefined') {
      this.screenWidth = window.innerWidth;
      this.defaultAccordionIndex = this.screenWidth > 768 ? '0' : '-1';
    }
  }

  jump(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onScroll(event: any): void {
    this.scrollHint.onScroll(event);
  }
}
