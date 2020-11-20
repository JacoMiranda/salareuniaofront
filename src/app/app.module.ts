import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomDetailsComponent,
    CreateRoomComponent,
    ListRoomComponent,
    UpdateRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
