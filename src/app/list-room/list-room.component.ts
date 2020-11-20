import { Component, OnInit } from '@angular/core';
import { RoomDetailsComponent} from 'src/app/room-details/room-details.component';
import { from, Observable} from "rxjs";
import { RoomService} from  "../room.service";
import {Room} from "../room";
import {Router} from '@angular/router'
Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {
rooms: Observable<Room[]>;

  constructor(private RoomService: RoomService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
   this.rooms = this.RoomService.getRoomList();
  }

  deleteRoom(id: number){
    this.RoomService.deleteRoom(id).subscribe(
      data => {
        console.log(data)
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  roomDetails(id: number){
    this.router.navigate(['details', id]);
  }
  updateRoom(id: number){
    this.router.navigate(['upadate', id])
  }


}
