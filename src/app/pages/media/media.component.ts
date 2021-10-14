import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { MovieService } from "src/app/services/movie.service";

@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.scss"],
})
export class MediaComponent implements OnInit {
  movies: any;
  newMovies: any;
  simulateLoading = true;
  moviePage = 1;
  slug = ''

  constructor(
    public movieService: MovieService,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(params => {
      this.ngOnInit();
  });
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.slug = params.get("slug");
    });
    this.movieService.getMedia(this.slug, this.moviePage).then((res) => {
      this.movies = res.data.results;
      this.simulateLoading = false;
    });
  }

  addMoreMovies() {
    this.moviePage++;
    this.movieService.getMedia(this.slug, this.moviePage).then((res) => {
      this.newMovies = res.data.results;
      this.movies = [...this.movies, ...this.newMovies];
    });
  }
}
