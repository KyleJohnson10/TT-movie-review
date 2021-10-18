import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { IMedia } from '../search-results/search-results.component';
@Component({
  selector: 'app-media-profile',
  templateUrl: './media-profile.component.html',
  styleUrls: ['./media-profile.component.scss'],
})
export class MediaProfileComponent implements OnInit {

  productData: Array<IMedia>;
  productId = '';
  mediaType = '';
  reviews = [];
  reviewModalActive = false;
  guestSessionID = '';
  loading = false;
  formSuccess = false;

  reviewScore = new FormControl('0');

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
      })
    });

      this.movieService.getMediaReviews(this.mediaType, this.productId).then((res) => {
        this.reviews = res.data.results;
      });
      this.movieService.getPostSessionID().then((res) => {
        this.guestSessionID = res.data.guest_session_id;
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

  navigateToExternalLink(link) {
    window.open(link, '_blank');
  }

  toggleModal() {
    if (this.reviewModalActive) {
      this.reviewModalActive = false;
    } else {
      this.reviewModalActive = true;
    }
  }

  submitReviewForm() {
    this.loading = true;
    this.movieService.submitMediaReview(this.mediaType, this.productId, this.guestSessionID, this.reviewScore.value).then((res) => {
      this.toggleModal();
      this.loading = false;
      if (res.data.success == true) {
        this.formSuccess = true;
      }
    })
  }
}
