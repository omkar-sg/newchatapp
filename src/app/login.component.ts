import { Component, EventEmitter, Input, Output } from "@angular/core";
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

    @Input() flag1:boolean=false;

    @Output() chatuiflag=new EventEmitter<boolean>()

    flagui(){
        this.chatuiflag.emit(this.uiflag)
    }
    
    login(username:string){
        if(this.sv.userslogged.find((el)=>el.username==username)!=undefined){this.usr.setuser(username)}
        else{
            this.sv.userlogin(username)
        this.usr.setuser(username)
        }

        // this.sv.userlogin(username)
        // this.usr.setuser(username)
    }
}