import { ActionType } from '../types'
import { Booking } from '../../models/Booking'

export const getGroupBookings = (bookings: Booking[]) =>
  ({
    type: 'GET_GROUP_BOOKINGS',
    bookings
  } as const)

  export const getPersonalBookings = (bookings: Booking[]) =>
  ({
    type: 'GET_PERSONAL_BOOKINGS',
    bookings
  } as const)

  export const clearBookings = () =>
  ({
    type: 'CLEAR_BOOKINGS'
  } as const)

export type BookingActions = ActionType<typeof getGroupBookings> 
| ActionType<typeof getPersonalBookings>
| ActionType<typeof clearBookings>
