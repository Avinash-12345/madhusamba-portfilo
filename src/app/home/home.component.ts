import { Component, signal, effect, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { CertificationsComponent } from "../certifications/certifications.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    CertificationsComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  stats = signal([
    { value: '6+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '75%', label: 'Faster Deployments' }
  ]);

  impactStats = signal([
    { value: '75%', label: 'Faster Deployments' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '95%', label: 'Fewer Incidents' },
    { value: '2x', label: 'Team Productivity' }
  ]);

  isHomeVisible = signal(false);
  isAboutVisible = signal(false);

  @ViewChild('homeSection') homeSection?: ElementRef;
  @ViewChild('aboutSection') aboutSection?: ElementRef;

  constructor() {
    effect(() => {
      console.log('Stats updated:', this.stats());
    });
  }

  ngAfterViewInit() {
    if (!this.homeSection || !this.aboutSection) {
      console.warn('One or more sections not found in DOM');
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === this.homeSection?.nativeElement) {
              this.isHomeVisible.set(true);
            } else if (entry.target === this.aboutSection?.nativeElement) {
              this.isAboutVisible.set(true);
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this.homeSection.nativeElement);
    observer.observe(this.aboutSection.nativeElement);
  }
}
