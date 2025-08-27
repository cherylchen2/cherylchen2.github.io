import { Component } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detailed-about-me',
  imports: [AccordionModule, ButtonModule, RouterModule],
  standalone: true,
  templateUrl: './detailed-about-me.component.html',
  styleUrl: './detailed-about-me.component.scss'
})
export class DetailedAboutMeComponent {
  background: string = `
    I was born in Hong Kong and have stayed in Hong Kong for 7 and
    a half years before moving to Shanghai with my family where I continued my education
    in Shanghai Singapore International School (SSIS) for 10 years. After graduation, I have
    moved to Toronto, Canada to pursue my post-secondary education at the University of Toronto
    where I have graduated with Honours Bachelor of Science as a Computer Science Specialist.
    Since young, I have always been interested in technology as inspired by my father who
    is currently working in the technology industry. I have always been fascinated by how
    technology can be used to solve problems and improve people's lives. This passion has driven
    me to pursue a career in technology, where I can use my skills and knowledge to make a positive impact.
  `;

  screenWidth: number;
  defaultAccordionIndex: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.defaultAccordionIndex = this.screenWidth > 768 ? 0 : -1;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.defaultAccordionIndex = this.screenWidth > 768 ? 0 : -1;

    
  }

  ngAfterContentInit(): void {
    document?.getElementById('education')?.scrollIntoView();
  }

  jump(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight - event.target.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    const hintElement = document.querySelector('.scroll-down-hint') as HTMLElement;
    hintElement.style.opacity = '0';

    if (hintElement) {
      if (scrollPercentage == 100) {
        hintElement.style.opacity = '0';
      } else {
        hintElement.style.opacity = '1';
      }
    }
  }
}
