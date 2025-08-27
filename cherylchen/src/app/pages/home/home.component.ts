import { Component, OnInit } from '@angular/core';

import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import  {NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { ScrollDownHintComponent } from '../../shared/components/scroll-down-hint/scroll-down-hint.component';

import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ScrollDownHintComponent, ParallaxStandaloneDirective, NgxTypewriterComponent, AboutMeComponent],
  providers: [ScrollDownHintComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  words: string[] = [' a creator.', ' an explorer.', ' a developer.', ' Cheryl.'];

  constructor(private scrollHint: ScrollDownHintComponent) {}

  ngOnInit(): void {}

  onScroll(event: Event) {
    this.scrollHint.onScroll(event);
  }
}
