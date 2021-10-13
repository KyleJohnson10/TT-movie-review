import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  movies: any;
  newMovies: any;
  simulateLoading = true;
  moviePage = 1;

  constructor(public movieService: MovieService) {}

  ngOnInit() {
    this.movieService.getMedia('movie', this.moviePage).then((res) => {
      this.movies = res.data.results;
      console.log(this.movies);
      this.simulateLoading = false;
    })
  }

  addMoreMovies() {
    this.moviePage++
    this.movieService.getMedia('movie', this.moviePage).then((res) => {
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
