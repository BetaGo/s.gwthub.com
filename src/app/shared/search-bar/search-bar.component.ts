import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchEngine: string = 'Google';

  searchContent: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.searchContent) return;
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
