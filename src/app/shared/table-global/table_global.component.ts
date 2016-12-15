import { Component, OnInit, Input } from '@angular/core';

import * as moment from 'moment';

@Component({
    selector: 'table-global',
    templateUrl: './table_global.component.html',
    styleUrls: ['./table_global.component.css']
})
export class TableGlobalComponent implements OnInit {
    @Input() gameTable: any;

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