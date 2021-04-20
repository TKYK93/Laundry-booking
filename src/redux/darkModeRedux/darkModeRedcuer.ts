import { DarkModeActions } from './darkModeActions'

export interface DarkModeState {
  darkMode: boolean
}

export const initialState: DarkModeState = {
  darkMode: false,
}

export const DarkModeReducer = (state = initialState, action: DarkModeActions): DarkModeState => {
  switch (action.type) {
    case 'SET_DARKMODE_ON':
      return { darkMode: true }

    case 'SET_DARKMODE_OFF':
      return { darkMode: false }

    default:
      return state
  }
}
