import { Component, signal, effect, inject } from '@angular/core';
import { Router, RouterOutlet, Event, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent],
  template: `
    <div class="app-container">
      <app-sidebar [activeSection]="activeSection()" />
      
      <div class="content-container">
        <router-outlet 
          (activate)="onRouteActivate($event)"
          (deactivate)="onRouteDeactivate($event)">
        </router-outlet>
      </div>
      
      <!-- Mobile menu toggle button (hidden on desktop) -->
      <button class="mobile-menu-toggle" (click)="toggleMobileMenu()">
        <i class="bi" [class.bi-list]="!isMobileMenuOpen()" [class.bi-x]="isMobileMenuOpen()"></i>
      </button>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      min-height: 100vh;
      position: relative;
    }

    .content-container {
      flex: 1;
      padding: 2rem;
      margin-left: 350px;
      overflow-y: auto;
      height: 100vh;
      transition: margin-left 0.3s ease;
      
      @media (max-width: 992px) {
        margin-left: 0;
        padding: 1rem;
        padding-top: 80px;
      }
    }

    .mobile-menu-toggle {
      display: none;
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 1100;
      background: var(--bs-primary);
      color: white;
      border: none;
      border-radius: 4px;
      padding: 0.5rem;
      font-size: 1.5rem;
      
      @media (max-width: 992px) {
        display: block;
      }
    }
  `]
})
export class AppComponent {
  private router = inject(Router);
  activeSection = signal('home');
  isMobileMenuOpen = signal(false);

  constructor() {
    // Track route changes to update active section
    this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateActiveSection();
        this.isMobileMenuOpen.set(false); // Close mobile menu on navigation
      });
  }

  private updateActiveSection(): void {
    const url = this.router.url;
    if (url.includes('#')) {
      const section = url.split('#')[1];
      this.activeSection.set(section);
    } else {
      this.activeSection.set('home');
    }
  }

  onRouteActivate(component: any): void {
    // You can add specific component activation logic here if needed
  }

  onRouteDeactivate(component: any): void {
    // You can add specific component deactivation logic here if needed
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(open => !open);
  }
}