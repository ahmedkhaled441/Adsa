import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { BlogComponent } from './components/blog/blog';
import { NotFound } from './components/not-found/not-found';
import { PostComponent } from './components/post/post';
import { Privacy } from './components/privacy/privacy';
import { Terms } from './components/terms/terms';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  {
    path: 'blog',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/blog/blog').then((m) => m.BlogComponent),
      },
      {
        path: ':slug',
        loadComponent: () =>
          import('./components/post/post').then((m) => m.PostComponent),
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./components/privacy/privacy').then((m) => m.Privacy),
  },
  {
    path: 'terms',
    loadComponent: () => import('./components/terms/terms').then((m) => m.Terms),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then((m) => m.NotFound),
  },
];
