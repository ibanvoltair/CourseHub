import { Routes } from '@angular/router';
import { HomeComponent } from './features/registration/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // Default route
      },
      {
        path: '**',
        redirectTo: '', // Wildcard route to redirect to home
      }
];
