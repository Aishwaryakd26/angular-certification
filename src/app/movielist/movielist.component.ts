import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Movie } from '../movie.model';
import { BudgetPipe } from '../budget.pipe';
import { DurationPipe } from '../duration.pipe';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movielist',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, CurrencyPipe, RouterLink, BudgetPipe, DurationPipe],
  templateUrl: './movielist.component.html',
  styleUrl: './movielist.component.css'
})
export class MovielistComponent {


  private movieService = inject(MovieService);
  movies: Movie[] = [];

  filteredMovies: Movie[] = [];

  titleFilter = new FormControl('');
  yearFilter = new FormControl('');

  ngOnInit(): void {

    this.loadMovies();

    this.titleFilter.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.applyFilters();
    });

    this.yearFilter.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.applyFilters();
    });
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
      this.filteredMovies = movies;
    })
  }


  applyFilters() {
    const title = this.titleFilter.value?.toLowerCase() || '';
    const year = this.yearFilter.value;

    this.filteredMovies = this.movies.filter(movie => {
      const movieYear = new Date(movie.release_date).getFullYear().toString();
      return movie.title.toLowerCase().includes(title) &&
        (!year || movieYear.includes(year));
    });
  }

}
