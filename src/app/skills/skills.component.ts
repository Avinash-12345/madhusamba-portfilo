import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent {
  // Using signals for reactive data
  skillCategories = signal([
    {
      title: 'Cloud & DevOps',
      icon: 'bi-cloud-fill',
      skills: [
        'AWS (EKS, EC2, S3, RDS)',
        'Terraform',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'GitHub Actions',
        'ArgoCD'
      ]
    },
    {
      title: 'Monitoring & Observability',
      icon: 'bi-graph-up',
      skills: [
        'Prometheus',
        'Grafana',
        'Datadog',
        'CloudWatch',
        'ELK Stack'
      ]
    },
    {
      title: 'Security',
      icon: 'bi-shield-lock',
      skills: [
        'IAM Policies',
        'Security Groups',
        'VPC Configuration',
        'Cert Manager'
      ]
    },
    {
      title: 'Scripting & Languages',
      icon: 'bi-code-slash',
      skills: [
        'Python',
        'Bash',
        'YAML',
        'JSON'
      ]
    }
  ]);

  // Track which category is expanded (for mobile view)
  expandedCategory = signal<number | null>(null);

  toggleCategory(index: number): void {
    this.expandedCategory.set(
      this.expandedCategory() === index ? null : index
    );
  }
}