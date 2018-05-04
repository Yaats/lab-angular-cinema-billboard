import { Injectable } from '@angular/core';
import { Movie, movieList } from './movie-data';

@Injectable()
export class MoviesServiceService {

  movies: Array<Movie> = movieList;

  constructor() { }

  getMovies() {}


  getMovie(id) {}
}
