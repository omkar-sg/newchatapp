import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";

@Component({
    selector:"nca-channel",
    templateUrl:"./channel.component.html",
    
})

export class Channel{
    constructor(private sv:Server,private crch:Currentch){}
    ch:string='general';
    getchannels(){
        return this.sv.showchannels()
    }

    addchannel(chname:string){
        console.log(chname,"channel")
        this.sv.addchannel(chname)
    }

    setcurrentch(ch:string){
        this.crch.setcurrentch(ch)

    }
}