import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

export interface IMedia {
  id: number;
  title: string,
  name: string,
  poster_path: string,
  vote_average: boolean,
  release_date: string,
  first_air_date: string
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  media: Array<IMedia>;
  newMedia: Array<IMedia>;
  simulateLoading = true;
  searchResult = '';
  mediaType = '';
  resultsPage = 1;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.searchResult = slug ? slug : '';
      const urlParams = new URLSearchParams(window.location.search);
      this.mediaType = urlParams.get('mediaType');

      this.movieService.searchMedia(this.mediaType, '1', this.searchResult).then((res) => {
        this.media = res.data.results;
        this.simulateLoading = false;
      })
    });
  }

  seeMoreResults() {
    this.resultsPage++

    this.movieService.searchMedia(this.mediaType, this.resultsPage, this.searchResult).then((res) => {
      this.newMedia = res.data.results;
      this.media = [
        ...this.media,
        ...this.newMedia
      ]
    })
  }
}
