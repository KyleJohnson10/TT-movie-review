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
  nextButton = true;
  carouselPage = 1;

  constructor(public movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTrending('tv').then((res) => {
      this.trendingShows = res.data.results;
      console.log(this.trendingShows);
      this.simulateLoading = false;
    })
  }

  getNextTrending() {
    this.carouselPage++
    this.trendingShows = this.trendingShows.slice(4)
    if (this.carouselPage === 4) this.nextButton = false;
  }

}
