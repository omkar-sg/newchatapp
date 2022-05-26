import { Injectable } from "@angular/core";

@Injectable()

export class User{
    user:string=''

    setuser(username:string){
        this.user=username

    }

    getuser(){
        return this.user
    }
}