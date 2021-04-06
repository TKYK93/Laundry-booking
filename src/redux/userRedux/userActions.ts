import { ActionType } from '../types'
import { User } from '../../models/User'

export const setLoginUser = (user: User) =>
  ({
    type: 'SET_LOGIN_USER',
    user,
  } as const)

export const setLogoutUser = () =>
  ({
    type: 'SET_LOGOUT_USER',
  } as const)

export type UserActions = ActionType<typeof setLoginUser> | ActionType<typeof setLogoutUser>
