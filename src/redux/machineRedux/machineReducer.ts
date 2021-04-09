import { MachineActions } from './machineActions'
import { Machine } from '../../models/Machine'

export interface MachineState {
  machines: Machine[]
}

export const initialState: MachineState = {
  machines: [],
}

export const MachineReducer = (state = initialState, action: MachineActions): MachineState => {
  switch (action.type) {
    case 'GET_MACHINES':
      return { machines: action.machines }

    case 'CLEAR_MACHINES':
      return { ...state, ...initialState }

    default:
      return state
  }
}
