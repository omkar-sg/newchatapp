import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Channel } from './channel.component';
import { Chat } from './chat.component';
import { GetMessage } from './getmessage.component';
import { Login } from './login.component';
import { Members } from './members.component';
import { SendMessage } from './sendmessage.component';
import { Server } from './server.service';

@NgModule({
  declarations: [
    AppComponent,Chat,Login,SendMessage,GetMessage,Channel,Members
  ],
  imports: [
    BrowserModule
  ],
  providers: [Server],
  bootstrap: [AppComponent]
})
export class AppModule { }
