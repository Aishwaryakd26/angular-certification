import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../movie.model';

const BASE_URL='http://localhost:4200/movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http= inject(HttpClient);
  constructor() { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(BASE_URL);
  }

  

  getMovieById(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`http://localhost:4200/movies/${id}`);
  }

  

 
}
