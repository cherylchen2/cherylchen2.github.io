import { Component } from '@angular/core';

@Component({
  selector: 'app-detailed-about-me',
  imports: [],
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
}
