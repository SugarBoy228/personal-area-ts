import {TypeEnum} from "../type-enum";

export interface UserState {
  users: any[];
  loading: boolean;
  error: string | null;
}

export interface FETCH_USER_ACTION {
  type: TypeEnum.FETCH_USERS
}

export interface FetchUsersSuccessAction {
  type: TypeEnum.FETCH_USERS_SUCCESS;
  payload: any[];
}

export interface FetchUsersErrorAction {
  type: TypeEnum.FETCH_USERS_ERROR;
  payload: string;
}

export type UserAction = FETCH_USER_ACTION | FetchUsersErrorAction | FetchUsersSuccessAction;

