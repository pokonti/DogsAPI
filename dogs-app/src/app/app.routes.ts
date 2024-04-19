import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BreedsComponent } from './components/breeds/breeds.component';
import { BreedDetailComponent } from './components/breed-detail/breed-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'breeds',
        component: BreedsComponent
    },
    {
        path: 'breeds/:breed',
        component: BreedDetailComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
