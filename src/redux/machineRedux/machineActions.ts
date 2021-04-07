import { ActionType } from '../types'
import { Machine } from '../../models/Machine'

export const getMachines = (machines: Machine[]) =>
  ({
    type: 'GET_MACHINES',
    machines
  } as const)

  export const clearMachines = () =>
  ({
    type: 'CLEAR_MACHINES'
  } as const)

export type MachineActions = ActionType<typeof getMachines> | ActionType<typeof clearMachines>
