import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";

import { Server } from "./server.service";
import { User } from "./username.service";

@Component({
    selector:"nca-sendmessage",
    templateUrl:"./sendmessage.component.html"
})

export class SendMessage{
    constructor(private sv:Server,private crch:Currentch,private usr:User){  }
    ch=''
    flag=true

    setcurrentch(){
        this.ch=this.crch.getcurrentch()
    }

    sendmsg(m:string){
        //console.log(m)
        console.log(this.crch.getcurrentch(),"Send msg")
        this.sv.sendmsg(this.usr.getuser(),this.crch.getcurrentch(),m)
        console.log(m,"from send message component")

        //this.sv.appdata.find((e)=>e.)
    }

    public sndbutton(){
        if(this.sv.userslogged.find((ele)=>ele.username==this.usr.getuser())?.channelsenrolled.includes(this.ch)){ this.flag=false}
        else{this.flag=true}
    }





    

}