import { Injectable } from "@angular/core";

@Injectable()
export class Currentch{
    currentchannel:string='general'

    setcurrentch(chname:string){
        this.currentchannel=chname

    }

    getcurrentch(){
        return this.currentchannel
    }

}