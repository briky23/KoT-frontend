import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'table-global',
    templateUrl: './table_global.component.html',
    styleUrls: ['./table_global.component.css']
})
export class TableGlobalComponent implements OnInit {

gameTable: any = {
        id: 1,
        pair_code: '1223112',
        winner_id: 2,
        zone: {
            id: 1,
            name: 'karazhan'
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
            start_time: '01:13:42',
            boss_kills: [{
                id: 1,
                boss_id: 1,
                start_time: new Date(),
                end_time: new Date()
            }, {
                id: 2,
                boss_id: 2,
                start_time: new Date(),
                end_time: new Date()
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
            start_time: '00:03:32',
            boss_kills: [{
                id: 3,
                boss_id: 1,
                start_time: new Date(),
                end_time: new Date()
            }, {
                id: 4,
                boss_id: 2,
                start_time: new Date(),
                end_time: new Date()
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
    }

    constructor() { }

    ngOnInit() { }
}