import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-down-hint',
  imports: [],
  templateUrl: './scroll-down-hint.component.html',
  styleUrl: './scroll-down-hint.component.scss'
})
export class ScrollDownHintComponent {
  @Input() scrollPercentageThreshold: number = 90;

  onScroll(event: any): void {
    const scrollTop = event.target.scrollTop;
    const scrollHeight = event.target.scrollHeight - event.target.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    const hintElement = document.querySelector('.scroll-down-hint') as HTMLElement;
    if (hintElement) {
      if (scrollPercentage > this.scrollPercentageThreshold) {
        hintElement.style.opacity = '0';
      } else {
        hintElement.style.opacity = '1';
      }
    }
  }
}
