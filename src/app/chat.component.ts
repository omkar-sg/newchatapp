import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { Server } from "./server.service";
import { User } from "./username.service";

@Component({
    selector:"nca-chat",
    templateUrl:"./chat.component.html",
    providers:[Currentch,User]
    
})

export class Chat{

    flag=false
    
    constructor(private sv:Server,private crch:Currentch, private us:User){}
    usr='general'

    setuser(){
        this.usr=this.us.getuser()
    }

    uiflag(fg:boolean){
        this.flag=fg
        this.setuser()

    }

    
}