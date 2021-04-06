import { UserActions } from './userActions'
import { User } from '../../models/User'

export interface UserState {
  loginUser: User
}

export const initialState: UserState = {
  loginUser: {} as User,
}

export const userReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case 'SET_LOGIN_USER':
      return { ...state, loginUser: { ...action.user } }

    case 'SET_LOGOUT_USER':
      return { ...state, ...initialState }

    default:
      return state
  }
}
