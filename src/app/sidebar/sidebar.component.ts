import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  activeSection = input<string>('home');
  private viewportScroller = inject(ViewportScroller);
  isMobileMenuOpen = false;

  scrollTo(fragment: string): void {
    this.viewportScroller.scrollToAnchor(fragment);
    this.isMobileMenuOpen = false; // Close mobile menu after click
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });

  }
}