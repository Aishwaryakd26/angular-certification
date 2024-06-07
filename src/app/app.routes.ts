import { Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MovielistComponent } from './movielist/movielist.component';

export const routes: Routes = [
    {path:'',component:MovielistComponent},
    { path: 'movies/:movieId', component: MoviedetailsComponent},
    // { path: '', redirectTo: '/movies', pathMatch: 'full' }
  
    
  
];
