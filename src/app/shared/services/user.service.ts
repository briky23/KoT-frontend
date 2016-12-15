import { Injectable } from "@angular/core";

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    user = new BehaviorSubject<any>(null);

    constructor() {}

    user$() {
        return this.user.asObservable();
    }

    getUser() {
        return this.user.getValue();
    }

    setUser(name: string) {
        this.user.next({
            name: name
        });
    }
}

