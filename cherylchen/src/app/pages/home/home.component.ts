import { Component, OnInit } from '@angular/core';

import { ParallaxStandaloneDirective } from '@yoozly/ngx-parallax';
import  {NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ParallaxStandaloneDirective, NgxTypewriterComponent, AboutMeComponent],
  standalone: true
})
export class HomeComponent implements OnInit {
  words: string[] = [' a creator.', ' an explorer.', ' a developer.', ' Cheryl.'];

  constructor() {}

  ngOnInit(): void {}
}
