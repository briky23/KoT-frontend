import { Component } from '@angular/core';

console.log('`Tables` component loaded asynchronously');

@Component({
  selector: 'tables',
  styleUrls: [ './tables.component.css' ],
  templateUrl: './tables.component.html'
})

export class TablesComponent {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `tables` component');
  }



}
