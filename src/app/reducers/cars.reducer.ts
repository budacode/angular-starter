import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as CarsActions from '../actions/cars.action';
// import { Status } from '../interfaces';

export interface State {
  name: string;
}

const initialState: State = {
  name: null,
};
export function reducer(state: State = initialState, action: CarsActions.Actions): State {
  switch (action.type) {
    // case AuthActions.SET_LOGIN_STATUS: {
    //   return {
    //     ...state,
    //     status: action.payload,
    //   };
    // }
    default: {
      return state;
    }
  }
}
export const selectCarsState = createFeatureSelector<State>('cars');
// export const selectAuthenticatedState = createSelector(selectAuthState, (state: State) => state.authenticated);