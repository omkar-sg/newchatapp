import { Component } from "@angular/core";
import { Server } from "./server.service";
import { User } from "./username.service";

@Component({
    selector:"nca-login",
    templateUrl:"./login.component.html"

})

export class Login{
    flag=true

    constructor(private sv:Server,private usr:User){}
    
    login(username:string){
        this.sv.userlogin(username)
        this.usr.setuser(username)
    }
}