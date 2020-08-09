import { Component, OnInit } from '@angular/core';
import { faStackOverflow, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchEngine = 'Google';

  searchContent = '';

  faGoogle = faGoogle;
  faStackOverflow = faStackOverflow;

  get searchIcon() {
    switch (this.searchEngine) {
      case 'Google':
        return this.faGoogle;
      case 'StackOverflow':
        return this.faStackOverflow;
      default:
        return this.faGoogle;
    }
  }

  constructor() {}

  ngOnInit(): void {}

  onSearchEngineChange(searchEngine: string) {
    this.searchEngine = searchEngine;
  }

  onSubmit(): void {
    if (!this.searchContent) {
      return;
    }
    switch (this.searchEngine) {
      case 'Google':
        window.open(
          'https://www.google.com/search?q=' +
            encodeURIComponent(this.searchContent)
        );
        break;
      case 'StackOverflow':
        window.open(
          'https://stackoverflow.com/search?q=' +
            encodeURIComponent(this.searchContent)
        );
        break;

      default:
        break;
    }
  }
}
