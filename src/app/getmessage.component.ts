import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";
import { User } from "./username.service";

@Component({
    selector:"nca-getmessage",
    templateUrl:"./getmessage.component.html"
})
export class GetMessage{
    constructor(private sv:Server, private crch:Currentch, private usr:User){}
    chname='general'
    
    flag2=false
    flag=true
    
    setchname(){
        this.chname=this.crch.getcurrentch()
        console.log(this.chname,"Get msg")
    }

    getmsg(){
        
        //this.setchname()
        if(this.sv.userslogged.find((ele)=>ele.username==this.usr.getuser())?.channelsenrolled.includes(this.chname) ){
            this.setchname()
            return this.sv.getmsg(this.chname)
        }

        else{
            this.setchname()
            return [{user:"Please",msg:"Subscribe"}]
        }

        //console.log(this.chname," get msg comp")
       
    }

    subscribech(){
        this.flag=false
        this.flag2=true
        this.sv.subscribetoch(this.usr.getuser(),this.chname)
        //this.sv.getmsg(this.ch)
    }

    unsubscribech(){
        this.flag2=false
        this.flag=true
        this.sv.unsubscribetoch(this.usr.getuser(),this.chname)
    }

}