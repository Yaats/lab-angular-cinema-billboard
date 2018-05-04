import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesServiceService } from 'app/movie-list/movies-service.service';
import { AppComponent } from 'app/app.component';
import { MovieDetailsComponent } from 'app/movie-details/movie-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
 
  { path: '', component: AppComponent },

  { path: 'movies', component: MoviesServiceService },

  { path: 'movie/:blahId', component: MovieDetailsComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

