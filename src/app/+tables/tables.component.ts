import { Component } from '@angular/core';
import {User} from '../shared/user.service';
import { Headers, RequestOptions } from '@angular/http';
import Rx from 'rxjs/Rx';
import { Http, JsonpModule } from '@angular/http';

console.log('`Tables` component loaded asynchronously');

@Component({
  selector: 'tables',
  styleUrls: [ './tables.component.css' ],
  templateUrl: './tables.component.html'
})

export class TablesComponent {
  constructor(private user:User, public http: Http) { 
        this.user2 = this.user
    }
    user2 = {}

    zone_id = '1581'

  ngOnInit() {
    console.log('hello `tables` component');
  }


createGame(userName:string, zoneId:string) {
// user_name: Brajan wysyłamy
  this.http.get('http://192.168.1.144:4000/game_sessions')
    .map(res => res.text())
    .subscribe(
      data => console.log( data),
      // err => this.logError(err),
      () => console.log('Random Quote Complete')
    );
}


}
