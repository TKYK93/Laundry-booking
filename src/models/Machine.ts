import { Booking } from './Booking'

export interface Machine {
  id: string
  groupId?: string
  name?: string
  Booking?: Booking[]
}
