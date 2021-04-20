import { ActionType } from '../types'

export const setDarkModeOn = () =>
  ({
    type: 'SET_DARKMODE_ON',
  } as const)

  export const setDarkModeOff = () =>
  ({
    type: 'SET_DARKMODE_OFF',
  } as const)

export type DarkModeActions = ActionType<typeof setDarkModeOn> | ActionType<typeof setDarkModeOff>