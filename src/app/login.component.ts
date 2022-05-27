import { Component, EventEmitter, Output } from "@angular/core";
import { Server } from "./server.service";
import { User } from "./username.service";

@Component({
    selector:"nca-login",
    templateUrl:"./login.component.html"

})

export class Login{
    flag=true
    uiflag=true

    constructor(private sv:Server,private usr:User){}

    @Output() chatuiflag=new EventEmitter<boolean>()

    flagui(){
        this.chatuiflag.emit(this.uiflag)
    }
    
    login(username:string){
        this.sv.userlogin(username)
        this.usr.setuser(username)
    }
}