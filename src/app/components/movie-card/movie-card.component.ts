import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() title: string = '';
  @Input() logo: string = '';
  @Input() rating: string = '';
  @Input() slug: string = '';
  @Input() releaseDate: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
