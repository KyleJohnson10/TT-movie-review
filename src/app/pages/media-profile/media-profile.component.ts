import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-media-profile',
  templateUrl: './media-profile.component.html',
  styleUrls: ['./media-profile.component.scss'],
})
export class MediaProfileComponent implements OnInit {

  productData: any;
  productId = '';
  mediaType = '';
  reviews = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = params.get('slug');
      const urlParams = new URLSearchParams(window.location.search);
      this.mediaType = urlParams.get('mediaType');
      
      this.movieService.getMediaProduct(this.mediaType, this.productId).then((res) => {
        this.productData = res.data;
        console.log(this.productData)
      })
    });

      this.movieService.getMediaReviews(this.mediaType, this.productId).then((res) => {
        console.log(res.data.results);
        this.reviews = res.data.results;
      });
  }

  toggleAccordion(i) {
    const element = document.getElementById(`collapse${i}`);
    if (element.classList.contains('show')) {
      element.classList.remove('show')
    } else {
      element.classList.add('show')
    }
  }
}
