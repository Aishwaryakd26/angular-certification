import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, MovieDetails } from '../movie.model';

const BASE_URL='movies';

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
    return this.http.get<MovieDetails>(`movies/${id}`);
  }

  

 
}
