import { Injectable } from "@angular/core";
//import { Console } from "console";

export class ServerData{
    userslogged:{username:string;channelsenrolled:string[]}[]=[]
    
    joinedchannels:{channel:string;members:string[]}[]=[]
    
}

@Injectable()
export class Server{
    channels:string[]=['general']
    appdata:ServerData[]=[]
    userslogged:{username:string;channelsenrolled:string[]}[]=[]
    joinedchannels:{channel:string;members:string[]}[]=[]
    channelmsg:{channel:string ;msgarr:{user:string;msg:string}[]}[]=[]

    userlogin(user:string){
       //let data=new ServerData()
        //data.userslogged.push({username:user,channelsenrolled:["general"]})
        this.userslogged.push({username:user,channelsenrolled:["general"]})
        //this.appdata.push(data)
        this.channelmsg.push({channel:"general",msgarr:[]})
        this.joinedchannels.push({channel:'general',members:[user]})
        //console.log(this.appdata)
         //this.userslogged.push({username:user,channelsenrolled:["general"]})


    }

    showchannels(){
        return this.channels
    }

    addchannel(chname:string){
        console.log(chname,"Server")
        this.channels.push(chname)
        this.channelmsg.push({channel:chname,msgarr:[]})
        console.log(this.channels)
    }

    sendmsg(username:string,chname:string,ms:string){
        // this.appdata.find((ele)=>ele.userslogged.find((ele)=>ele.username==username))?.
        console.log(this.channelmsg.find((ele)=>ele.channel==chname))
        console.log(username)
        this.channelmsg.find((ele)=>ele.channel==chname)?.msgarr.push({user:username,msg:ms})
        console.log(this.channelmsg,chname,"Server")

    }
       // this.channelmsg.find((ele)=>ele.channel=='general')?.msgarr.push({user:username,msg:ms})
        
    

    getmsg(chname:string){
        //return this.appdata.find((ele)=>ele.userslogged.find((ele)=>ele.username==chname))?.channelmsg
        return this.channelmsg.find((ele)=>ele.channel==chname)?.msgarr
    }

    subscribetoch(user:string,chaname:string){
        this.userslogged.find((ele)=>ele.username==user)?.channelsenrolled.push(chaname)

    }

    unsubscribetoch(user:string,chaname:string){
     let ind = this.userslogged.findIndex((ele)=>ele.username==user) //?.channelsenrolled.findIndex((el)=>el=chaname)
       let ind2= this.userslogged[ind].channelsenrolled.findIndex((el)=>el==chaname)
       this.userslogged[ind].channelsenrolled.splice(ind2,1)
    }





}