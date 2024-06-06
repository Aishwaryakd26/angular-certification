import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieDetails } from '../movie.model';
import { BudgetPipe } from '../budget.pipe';
import { DurationPipe } from '../duration.pipe';

@Component({
  selector: 'app-moviedetails',
  standalone: true,
  imports: [NgIf, CurrencyPipe, RouterLink, BudgetPipe, DurationPipe],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css'
})
export class MoviedetailsComponent implements OnInit {

  private movieService = inject(MovieService);
  moviesDetails: MovieDetails | undefined;
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    const moviesId = this.route.snapshot.paramMap.get('movieId');
    if (moviesId) {
      this.movieService.getMovieById(moviesId).subscribe((movie: MovieDetails) => {

        this.moviesDetails = movie;
      });
    }
  }




}
