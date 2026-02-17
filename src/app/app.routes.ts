import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent,
        data: { fragment: 'home' }
      },
      {
        path: 'about',
        component: HomeComponent,
        data: { fragment: 'about' }
      },
      {
        path: 'experience',
        component: HomeComponent,
        data: { fragment: 'experience' }
      },
      {
        path: 'skills',
        component: HomeComponent,
        data: { fragment: 'skills' }
      },
      {
        path: 'projects',
        component: HomeComponent,
        data: { fragment: 'projects' }
      },
      {
        path: 'contact',
        component: HomeComponent,
        data: { fragment: 'contact' }
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];