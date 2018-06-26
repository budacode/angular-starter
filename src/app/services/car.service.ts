import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car.interface';
import { AddCarsAction } from '../actions/cars.action';
import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';

@Injectable()
export class CarService {

  constructor(private store: Store<RootState>, private httpClient: HttpClient) {
    //
   }

  public createCar(car: any): void {
    this.httpClient.post('https://car-crud.herokuapp.com/create', car)
      .subscribe((car: Car) => {
        // console.log(car);
      });
  }

  public getCars(skip: number = 0, take: number = 5): void {
    this.httpClient.get(`https://car-crud.herokuapp.com/?skip=${skip}&take=${take}`)
      .subscribe((cars: Car[]) => {
        this.store.dispatch(new AddCarsAction(cars));
      });
  }
}