import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [ButtonModule, RouterModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  @Input() navItems: { label: string; link: string }[] = [];
  @Input() activeItem: string = '';
}
