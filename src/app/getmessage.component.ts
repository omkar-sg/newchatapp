import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";

@Component({
    selector:"nca-getmessage",
    templateUrl:"./getmessage.component.html"
})
export class GetMessage{
    constructor(private sv:Server, private crch:Currentch){}
    chname='general'
    
    setchname(){
        this.chname=this.crch.getcurrentch()
    }

    getmsg(){
        this.setchname()
        console.log(this.chname," get msg comp")
        return this.sv.getmsg(this.chname)
    }

}