import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

console.log(moment());

@Component({
    selector: 'table-view',
    templateUrl: './table_view.component.html',
    styleUrls: ['./table_view.component.css']
})
export class TableViewComponent implements OnInit {
    duration: moment.Duration;

    gameTable: any = {
        id: 1,
        zone: {
            id: 1,
            name: 'Deadmines'
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
            // start_time: moment(),
            // boss_kills: [{
            //     id: 1,
            //     boss_id: 1,
            //     kill_time: moment().add(12, 'minutes')
            // }, {
            //     id: 2,
            //     boss_id: 2,
            //     kill_time: moment().add(23, 'minutes')
            // }],
            members: [{
                id: 1,
                pair_code: '1223112',
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
            // id: 2,
            // name: 'Team 2',
            // start_time: moment(),
            // boss_kills: [{
            //     id: 3,
            //     boss_id: 1,
            //     kill_time: moment().add(11, 'minutes')
            // }, {
            //     id: 4,
            //     boss_id: 2,
            //     kill_time: moment().add(25, 'minutes')
            // }],
            // members: [{
            //     id: 5,
            //     pair_code: '1223112',
            //     name: "Brajan"
            // }, {
            //     id: 6,
            //     name: "Dzesika"
            // }, {
            //     id: 7,
            //     name: "Samanta"
            // }, {
            //     id: 8,
            //     name: "Pawel"
            // }]
        }]
    }

    constructor() { }

    ngOnInit() { }

    getLastBossKillTime(startTime:Date, bossKills:Array<any>){
        let lastKill = bossKills[bossKills.length-1];

        return this.formatTime(startTime, lastKill.kill_time)
    }

    formatTime(startTime:Date, endTime:Date){
        let mStartTime = moment(startTime);
        let mEndTime = moment(endTime);
        let mDuration = moment.duration(mEndTime.diff(mStartTime));

        let hours = this.prependZero(Math.floor(mDuration.asHours()));
        let minutes = this.prependZero(Math.floor(mDuration.minutes()));
        let seconds = this.prependZero(Math.floor(mDuration.seconds()));
        let dateString = `${hours}:${minutes}:${seconds}`;

        return dateString; 
    }

    prependZero(value: number) {
        return ("0" + value).slice(-2);
    }
}
