import { Component, signal, effect, inject, afterNextRender } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  private contactService = inject(ContactService);
  
  isSubmitting = signal(false);
  submitSuccess = signal(false);
  submitError = signal('');
  isVisible = signal(false); // Changed to signal

  contactForm = new FormGroup({
    name: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    email: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required, Validators.email] 
    }),
    subject: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    }),
    message: new FormControl<string>('', { 
      nonNullable: true, 
      validators: [Validators.required] 
    })
  });

  constructor() {
    afterNextRender(() => {
      this.setupIntersectionObserver();
    });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible.set(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) return;

    this.isSubmitting.set(true);
    this.submitError.set('');

    const submitMethod = environment.production
      ? this.contactService.sendContactForm
      : this.contactService.sendContactFormSimulated;

    const formData: ContactFormData = this.contactForm.getRawValue();

    submitMethod(formData).subscribe({
      next: (response) => {
        if (response.error) {
          this.submitError.set(response.error);
        } else {
          this.submitSuccess.set(true);
          this.contactForm.reset();
        }
        this.isSubmitting.set(false);
      },
      error: () => {
        this.submitError.set('There was an error sending your message. Please try again later.');
        this.isSubmitting.set(false);
      }
    });
  }
}