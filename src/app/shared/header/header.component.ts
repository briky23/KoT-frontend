import { Component, OnInit } from '@angular/core';
import {User} from '../user.service';

@Component({
    selector: 'kot-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    constructor(private user:User) { 
        this.user2 = this.user
    }
    user2 = {}

    ngOnInit() { }
    
}