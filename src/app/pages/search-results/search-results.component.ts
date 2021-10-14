import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  media: any;
  newMedia: any;
  searchResultsData: any;
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
        console.log(this.media.length)
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
