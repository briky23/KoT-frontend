import {Injectable} from "@angular/core";

@Injectable()
export class User {
    private name = ''

    constructor() {}

    setName(name){
        this.name = name;
    }
    getName(){
      return  this.name;
    }
}

