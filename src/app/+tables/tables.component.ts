import { Component } from '@angular/core';
import { UserService, TableService } from '../shared/services';
import { Headers, RequestOptions } from '@angular/http';
import Rx from 'rxjs/Rx';

import * as moment from 'moment';

console.log('`Tables` component loaded asynchronously');

@Component({
  selector: 'tables',
  styleUrls: [ './tables.component.css' ],
  templateUrl: './tables.component.html'
})

export class TablesComponent {

  gameTables: Array<any>;

  constructor(private userService: UserService, private tableService: TableService) { 
    tableService.getTables()
      .subscribe(
        (tables: Array<any>) => this.gameTables = tables
      )
  }

  isLoggedIn(): boolean {
    return !!this.userService.getUser()
  }

  ngOnInit() {
    console.log('hello `tables` component');
  }

  createGame() {
    this.tableService.createTable(this.userService.getUser().name, '4')
      .subscribe();
  }
}
