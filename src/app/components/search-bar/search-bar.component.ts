import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string = ''
  @Input() shortSearch: boolean = false

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  submitForm() {
    this.router.navigateByUrl(`/search/${this.searchTerm.toLowerCase().replace(/ /g, '-')}`);
  }
}
