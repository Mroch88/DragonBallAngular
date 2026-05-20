import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { VillainsPage } from './pages/villains-page/villains-page';
import { SagasPage } from './pages/sagas-page/sagas-page';
import { CategoriesPage } from './pages/categories-page/categories-page';
import { CharacterDetailPage } from './pages/character-detail-page/character-detail-page';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: HomePage
  },

  {
    path: 'about',
    component: AboutPage
  },

  {
    path: 'villains',
    component: VillainsPage
  },

  {
    path: 'sagas',
    component: SagasPage
  },

  {
    path: 'planets',
    component: CategoriesPage
  },

  {
  path: 'character/:id',
  component: CharacterDetailPage
},

];