import { ActionReducerMap } from '@ngrx/store';
import * as CarsReducer from './cars.reducer';

export interface State {
  cars: CarsReducer.State;
}
export function reducers(): ActionReducerMap<State> {
  return {
    cars: CarsReducer.reducer,
  };
}