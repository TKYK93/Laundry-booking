import { ThunkAction } from 'redux-thunk'
import { RootReducer } from '../store'
import { Action } from 'redux'
import firebase, { db } from '../../firebase'
import { Booking } from '../../models/Booking'
import { getGroupBookings, getPersonalBookings } from './bookingActions'

export const addBookingThroughFirebase = (
  bookingData: Booking
): ThunkAction<void, RootReducer, undefined, Action<string>> => async (dispatch, getState) => {
  const docRef = db.collection('bookings').doc()
  docRef
    .set({
      ...bookingData,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const getGroupBookingFromFirebase = (): ThunkAction<void, RootReducer, undefined, Action<string>> => async (
  dispatch,
  getState
) => {
  const groupId = getState().userState.loginUser.groupId
  const bookingRef = db.collection('bookings').where('groupId', '==', groupId)
  const doc = await bookingRef.get()
  if (!doc) {
    console.log('No such document in the database!')
  } else {
    const tempBookingArray: Booking[] = []
    await doc.forEach((booking) =>  {
        const result = booking.data() as Booking
        tempBookingArray.push(result)
       })
    await dispatch(getGroupBookings(tempBookingArray))
  }
}

export const getPersonalBookingFromFirebase = (): ThunkAction<void, RootReducer, undefined, Action<string>> => async (
    dispatch,
    getState
  ) => {
    const personId = getState().userState.loginUser.uid
    const bookingRef = db.collection('bookings').where('personId', '==', personId)
    const doc = await bookingRef.get()
    if (!doc) {
      console.log('No such document in the database!')
    } else {
      const tempBookingArray: Booking[] = []
      await doc.forEach((booking) =>  {
          const result = booking.data() as Booking
          tempBookingArray.push(result)
         })
      await dispatch(getPersonalBookings(tempBookingArray))
    }
  }