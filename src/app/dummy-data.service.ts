import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {

  Data: any = [
    [3, 3, 3],
    [4, 5, 6],
    [4, 4, 4],
    [4, 1, 4],
    [4, 6, 2]
  ]



  constructor() { }



}
