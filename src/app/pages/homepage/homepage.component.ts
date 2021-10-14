import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  trendingShows: any;
  simulateLoading = true;
  carouselPage = 1;

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTrending('tv').then((res) => {
      this.trendingShows = res.data.results;
      this.simulateLoading = false;
    })
  }

  getNextTrending() {
    this.carouselPage++
    this.trendingShows = this.trendingShows.slice(4)
  }

}
