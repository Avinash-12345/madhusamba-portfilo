import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = signal([
    {
      date: 'Oct 2022 – Present',
      title: 'DevOps Engineer II — Revolution Entertainment Services',
      items: [
        'Built EKS clusters, GitOps with Argo CD',
        'Migrated apps from Heroku to AWS',
        'Implemented CI/CD pipelines and centralized monitoring',
        'Automated infrastructure provisioning with Terraform'
      ]
    },
    {
      date: 'Jun 2020 – Oct 2022',
      title: 'AWS Cloud Engineer — Lee Pharma Ltd',
      items: [
        'Provisioned multi-tier AWS infra with EC2, ALB, AutoScaling and RDS',
        'Managed backups and security',
        'Implemented monitoring solutions with CloudWatch and Prometheus',
        'Optimized cloud costs by 30% through right-sizing and reserved instances'
      ]
    }
  ]);

  // This method is no longer needed since items are always visible
  isInView(index: number): boolean {
    return true; // Always visible
  }
}