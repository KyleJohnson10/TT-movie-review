import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() logo: string = '';
  @Input() rating: string = '';
  @Input() id: string = '';
  @Input() releaseDate: string = '';
  @Input() mediaType: string = '';
  cardLink: string = '';
  
  constructor(private router: Router) { }

  navigateToProduct() {
    this.router.navigateByUrl(`/product/${this.id}?mediaType=${this.mediaType}`)
  }

  ngOnInit() {
  }

}
