import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State as RootState } from '../../reducers/root.reducer';
// import * as carReducer from '../../reducers/cars.reducer';
import { AddCarsAction } from '../../actions/cars.action';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.view.pug',
  styleUrls: ['./car-list.view.scss'],
})

export class CarListView {
  constructor(private store: Store<RootState>) {
    //
  }

  public addCars(): void {
    const cars = [
      {
        id: '1',
        title: 'auto1',
        description: 'asfafdaf',
        brand: 'honda',
        type: 'civic',
        year: 2006,
        cylinderVolume: 1300,
        phoneNumber: 3670895432,
        emailAddress: 'valaki@gocg.com',
      },
      {
        id: '2',
        title: 'auto2',
        description: 'gegrseges',
        brand: 'mazda',
        type: 'mx-5',
        year: 2007,
        cylinderVolume: 2300,
        phoneNumber: 3670895432,
        emailAddress: 'valaki@gocg.com',
      },
    ];

    this.store.dispatch(new AddCarsAction(cars));
  }
}