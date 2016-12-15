import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'kot-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    user: any;
    constructor(private userService: UserService) { 
        this.userService.user$()
            .subscribe(
                (user: any) => this.user = user
            );
    }

    ngOnInit() { }
}
