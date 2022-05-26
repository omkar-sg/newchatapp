import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";

@Component({
    selector:"nca-getmessage",
    templateUrl:"./getmessage.component.html"
})
export class GetMessage{
    constructor(private sv:Server, private crch:Currentch){}
    chname=''
    
    setchname(){
        this.chname=this.crch.getcurrentch()
    }

    getmsg(){
        this.setchname()
        return this.sv.getmsg(this.chname)
    }

}