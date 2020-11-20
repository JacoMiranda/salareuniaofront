import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  getRoomList(): import("rxjs").Observable<import("./room").Room[]> {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
