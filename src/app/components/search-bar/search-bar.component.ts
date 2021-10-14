import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string = ''
  @Input() shortSearch: boolean = false

  MediaType = new FormControl('movie');

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigateByUrl(`/search/${this.MediaType.value.toLowerCase()}?searchTerm=${this.searchTerm}`);
  }
}
