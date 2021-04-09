import { BookingActions } from './bookingActions'
import { Booking } from '../../models/Booking'

export interface BookingState {
  groupBookings: Booking[]
  personalBookings: Booking[]
}

export const initialState: BookingState = {
  groupBookings: [],
  personalBookings: [],
}

export const BookingReducer = (state = initialState, action: BookingActions): BookingState => {
  switch (action.type) {
    case 'GET_GROUP_BOOKINGS':
      return { ...state, groupBookings: action.bookings }

    case 'GET_PERSONAL_BOOKINGS':
      return { ...state, personalBookings: action.bookings }

    case 'CLEAR_BOOKINGS':
      return { ...state, ...initialState }

    default:
      return state
  }
}
