import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class statusBackendService {

    constructor(private http: Http) { }

    gameStatusBackendLoop (pairCode: string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.http.get('http://192.168.1.144:4000/game_sessions')
    }
}

