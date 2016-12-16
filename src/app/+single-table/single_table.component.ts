import { Component } from '@angular/core';
import { TableService } from '../shared/services/table.service';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`SingleTableComponent` component loaded asynchronously');

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'single-table',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './single_table.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './single_table.component.html'
})

export class SingleTableComponent {
  gameTable: any;
  constructor(private tableService: TableService,
              private ar: ActivatedRoute) {
    let id = ar.snapshot.params['id'];
    this.gameTable = tableService.getTable(id);
  }

  ngOnInit() {
    console.log('hello `single-table` component');
  }

}
