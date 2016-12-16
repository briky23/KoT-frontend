import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

@Injectable()
export class TableService {
    tables = new Array<any>();
    constructor(private http: Http) { }

    getTable(id: string) {
        return this.tables.find(value => value.id == id)
    }

    getTables(): Observable<Array<any>> {
        return this.http.get('http://192.168.1.144:4000/game_sessions')
            .map((response) => response.json());
    }

    createTable(user_name:string, zone_id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://192.168.1.144:4000/game_sessions',
            JSON.stringify({user_name, zone_id}),
            options)
            .map(res => res.json())
            .do((json) => this.tables.push(json));
    }
}