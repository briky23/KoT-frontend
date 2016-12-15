import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import * as moment from 'moment';

@Injectable()
export class TableService {
    constructor(private http: Http) { }

    getTables(): Observable<Array<any>> {
        return Observable.of([{
        id: 1,
        pair_code: '1223112',
        winner_id: 2,
        zone: {
            id: 1,
            name: 'Karazhan'
        },
        bosses: [{
            id: 1,
            name: 'Boss 1'
        }, {
            id: 2,
            name: 'Boss 2'
        }],
        game_sessions: [{
            id: 1,
            name: 'Team 1',
            start_time: moment(),
            boss_kills: [{
                id: 1,
                boss_id: 1,
                kill_time: moment().add(12, 'minutes')
            }, {
                id: 2,
                boss_id: 2,
                kill_time: moment().add(23, 'minutes')
            }],
            members: [{
                id: 1,
                name: "Janusz"
            }, {
                id: 2,
                name: "Halinka"
            }, {
                id: 3,
                name: "Seba"
            }, {
                id: 4,
                name: "Andzela"
            }]
        }, {
            id: 2,
            name: 'Team 2',
            start_time: moment(),
            boss_kills: [{
                id: 3,
                boss_id: 1,
                kill_time: moment().add(11, 'minutes')
            }, {
                id: 4,
                boss_id: 2,
                kill_time: moment().add(25, 'minutes')
            }],
            members: [{
                id: 5,
                name: "Brajan"
            }, {
                id: 6,
                name: "Dzesika"
            }, {
                id: 7,
                name: "Samanta"
            }, {
                id: 8,
                name: "Pawel"
            }]
        }]
    }, {
        id: 1,
        pair_code: '1223112',
        winner_id: 2,
        zone: {
            id: 1,
            name: 'Karazhan'
        },
        bosses: [{
            id: 1,
            name: 'Boss 1'
        }, {
            id: 2,
            name: 'Boss 2'
        }],
        game_sessions: [{
            id: 1,
            name: 'Team 1',
            start_time: moment(),
            boss_kills: [{
                id: 1,
                boss_id: 1,
                kill_time: moment().add(12, 'minutes')
            }, {
                id: 2,
                boss_id: 2,
                kill_time: moment().add(23, 'minutes')
            }],
            members: [{
                id: 1,
                name: "Janusz"
            }, {
                id: 2,
                name: "Halinka"
            }, {
                id: 3,
                name: "Seba"
            }, {
                id: 4,
                name: "Andzela"
            }]
        }, {
            id: 2,
            name: 'Team 2',
            start_time: moment(),
            boss_kills: [{
                id: 3,
                boss_id: 1,
                kill_time: moment().add(11, 'minutes')
            }, {
                id: 4,
                boss_id: 2,
                kill_time: moment().add(25, 'minutes')
            }],
            members: [{
                id: 5,
                name: "Brajan"
            }, {
                id: 6,
                name: "Dzesika"
            }, {
                id: 7,
                name: "Samanta"
            }, {
                id: 8,
                name: "Pawel"
            }]
        }]
    }])
    }

    createTable(user_name:string, zone_id:string) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://192.168.1.144:4000/game_sessions',
            JSON.stringify({user_name, zone_id}),
            options)
            .map(res => res.json());
    }
}