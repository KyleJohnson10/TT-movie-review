import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  movies: any;
  newMovies: any;
  simulateLoading = true;
  moviePage = 1;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMedia('tv', this.moviePage).then((res) => {
      this.movies = res.data.results;
      console.log(this.movies);
      this.simulateLoading = false;
    })
  }

  addMoreMovies() {
    this.moviePage++
    this.movieService.getMedia('tv', this.moviePage).then((res) => {
      this.newMovies = res.data.results;
      console.log(this.newMovies);
      console.log(this.movies);
      this.movies = [
        ...this.movies,
        ...this.newMovies
      ]
      console.log(this.movies);
    })
  }

}
