import { Action } from '@ngrx/store';
// import { Status } from '../interfaces';

export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';

export class SetLoginStatusAction implements Action {
  public readonly type: string = SET_LOGIN_STATUS;
  // constructor(public payload: Status) {}
  public readonly payload: null;
}

export type Actions =
  | SetLoginStatusAction;