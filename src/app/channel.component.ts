import { Component } from "@angular/core";
import { Currentch } from "./currentch.service";
import { SendMessage } from "./sendmessage.component";
import { Server } from "./server.service";
import { User } from "./username.service";


@Component({
    selector:"nca-channel",
    templateUrl:"./channel.component.html",
    
})

export class Channel{
    constructor(private sv:Server,private crch:Currentch, private us:User){}
    ch:string='general';
    flag=false
    flag2=false
    flag1=true
    sendflag=false
    
    getchannels(){
        //if(this.ch=='general'){this.flag1=false;this.sendflag=true}
        //if(this.ch!='general'){this.flag1=true;this.sendflag=false}
        //else{this.flag1=true;this.sendflag=false;this.flag2=false}
        // if(this.sv.userslogged.find((ele)=>ele.username==this.us.getuser())?.channelsenrolled.includes(this.ch) ){
        //     this.flag1=false
        //     this.sendflag=true
        // }

         this.issubscribe()
        
        return this.sv.showchannels()
    }

    // func(){
    //     //if(this.ch=='general'){this.flag1=false;this.sendflag=true}
    //     if(this.ch!='general'){this.flag1=true;this.sendflag=false}

    // }

    addchannel(chname:string){
       
        this.issubscribe()
        
        console.log(chname,"channel")
        this.sv.addchannel(chname)
    }

    setcurrentch(ch1:string){
        
        
        this.ch=ch1
        this.crch.setcurrentch(ch1)
        console.log(ch1,"Channel componenet")

    }

    
    
    setchname(){
        this.ch=this.crch.getcurrentch()
        console.log(this.ch,"Get msg")
    }

    getmsg(){
        
        
        if(this.sv.userslogged.find((ele)=>ele.username==this.us.getuser())?.channelsenrolled.includes(this.ch) ){
            // if(this.ch=='general')
            // {this.flag1=false 
            // this.sendflag=true}
            return this.sv.getmsg(this.ch)
        }

        else{
            //this.setchname()
            
            return [{date:new Date(), user:"Please",msg:"Subscribe"}]
        }

        

    }

    issubscribe(){
        //this.setchname()
        console.log(this.ch,"isss")
        console.log("Condition",this.sv.userslogged.find((ele)=>ele.username==this.us.getuser())?.channelsenrolled.includes(this.ch))
        if(this.sv.userslogged.find((ele)=>ele.username==this.us.getuser())?.channelsenrolled.includes(this.ch)){
            this.flag1=false
            this.flag2=true
            this.sendflag=true

            console.log(this.ch, '1st if')
            if(this.ch=='general'){
                this.flag1=false
                this.flag2=false
                    this.sendflag=true}
            

           
        } 
        // if(this.ch=='general'){
        //     this.flag1=false
        //     this.flag2=false
        //     this.sendflag=true

        // }
        else{ 
            this.flag1=true
            this.flag2=false
            this.sendflag=false
        }


    }

    subscribech(){
        this.flag1=false
        this.flag2=true
        this.sendflag=true
        this.setchname()

        this.sv.subscribetoch(this.us.getuser(),this.ch)
        
        //this.sv.getmsg(this.ch)
    }

    unsubscribech(){
        this.flag2=false
        this.flag1=true
        this.sendflag=false
        this.sv.unsubscribetoch(this.us.getuser(),this.ch)
    }

    // subscribech(){
    //     this.sv.subscribetoch(this.us.getuser(),this.ch)
    //     //this.sv.getmsg(this.ch)
    // }

    // unsubscribech(){
    //     this.sv.unsubscribetoch(this.us.getuser(),this.ch)
    // }
}