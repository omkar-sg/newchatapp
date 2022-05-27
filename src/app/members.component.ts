import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";

@Component({
    selector:'nca-members',
    templateUrl:'./members.component.html'
})

export class Members{
    constructor(private sv:Server, private crch:Currentch){}

    getmembers(){
        return this.sv.getmembers(this.crch.getcurrentch())
    }

}