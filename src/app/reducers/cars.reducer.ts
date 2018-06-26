import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as CarsActions from '../actions/cars.action';
import { Car } from '../interfaces/car.interface';

export interface State {
  cars: Car[];
}

const initialState: State = {
  cars: [],
};
export function reducer(state: State = initialState, action: CarsActions.Actions): State {
  switch (action.type) {
    case CarsActions.ADD_CARS_ACTION: {
      return {
        ...state,
        cars: state.cars.concat(action.payload),
      };
    }
    default: {
      return state;
    }
  }
}
export const selectCarsState = createFeatureSelector<State>('cars');
// export const selectCarNameState = createSelector(selectCarsState, (state: State) => state.name);