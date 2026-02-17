import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  // Using signals for reactive projects data
  projects = signal([
    {
      title: 'Cloud Migration Project',
      description: 'Migrated legacy on-premise infrastructure to AWS with zero downtime.',
      technologies: ['AWS', 'Terraform', 'Kubernetes'],
      githubLink: 'https://github.com/yourprofile/cloud-migration',
      demoLink: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Implemented GitOps workflow with ArgoCD and GitHub Actions.',
      technologies: ['ArgoCD', 'GitHub Actions', 'Kustomize'],
      githubLink: 'https://github.com/yourprofile/cicd-pipeline',
      demoLink: '#'
    },
    {
      title: 'Monitoring Stack',
      description: 'Centralized monitoring solution with Prometheus and Grafana.',
      technologies: ['Prometheus', 'Grafana', 'Alertmanager'],
      githubLink: 'https://github.com/yourprofile/monitoring-stack',
      demoLink: '#'
    },
    {
      title: 'Internal Developer Platform',
      description: 'Built self-service platform for development teams to provision resources.',
      technologies: ['Kubernetes', 'Crossplane', 'Backstage'],
      githubLink: 'https://github.com/yourprofile/developer-platform',
      demoLink: '#'
    },
    {
      title: 'Infrastructure as Code Library',
      description: 'Reusable Terraform modules for AWS infrastructure provisioning.',
      technologies: ['Terraform', 'AWS', 'Terratest'],
      githubLink: 'https://github.com/yourprofile/iac-library',
      demoLink: '#'
    },
    {
      title: 'Cost Optimization Dashboard',
      description: 'Dashboard for tracking and optimizing cloud costs.',
      technologies: ['AWS Cost Explorer', 'Grafana', 'Lambda'],
      githubLink: 'https://github.com/yourprofile/cost-dashboard',
      demoLink: '#'
    }
  ]);

  // Track which project is expanded for mobile view
  expandedProject = signal<number | null>(null);

  toggleProject(index: number): void {
    this.expandedProject.set(
      this.expandedProject() === index ? null : index
    );
  }
}