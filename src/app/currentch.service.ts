import { Injectable } from "@angular/core";

@Injectable()
export class Currentch{
    currentchannel:string='general'

    setcurrentch(chname:string){
        this.currentchannel=chname
        console.log(this.currentchannel,"Current channel service")

    }

    getcurrentch(){
        return this.currentchannel
    }

}