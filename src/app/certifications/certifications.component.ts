import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'AWS Solutions Architect',
      image: 'https://matthewivan.com/cert-icons/aws-solutions-architect.png'
    },
    {
      title: 'AWS Certified Security',
      image: 'https://matthewivan.com/cert-icons/aws-solutions-architect.png'
    },
    {
      title: 'AWS Advanced Networking',
      image: 'https://matthewivan.com/cert-icons/aws-solutions-architect.png'
    },
    {
      title: 'GCP Cloud Architect',
      image: 'https://matthewivan.com/cert-icons/aws-solutions-architect.png'
    },
  ];
}
