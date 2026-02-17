import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, of } from 'rxjs';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/contact';

  /**
   * Sends contact form data to the server
   * @param formData The contact form data
   * @returns Observable with the server response
   */
  sendContactForm(formData: ContactFormData): Observable<any> {
    return this.http.post(this.apiUrl, formData).pipe(
      catchError(error => {
        console.error('Error sending contact form:', error);
        return of({ error: 'Failed to send message. Please try again later.' });
      })
    );
  }

  /**
   * Simulates sending contact form data (for development/testing)
   * @param formData The contact form data
   * @returns Observable with simulated success response
   */
  sendContactFormSimulated(formData: ContactFormData): Observable<any> {
    console.log('Simulated form submission:', formData);
    return of({ 
      success: true,
      message: 'Your message has been received (simulated). In production, this would contact the real API.'
    });
  }
}