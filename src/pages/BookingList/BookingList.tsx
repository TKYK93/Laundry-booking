import { List } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BottomNav from '../../components/BottomNav'
import Header from '../../components/Header'
import { Booking } from '../../models/Booking'
import { getPersonalBookingFromFirebase } from '../../redux/BookingRedux/bookingThunk'
import { AppState } from '../../redux/store'
import BookingListItem from './BookingListItem'
import { db } from '../../firebase'
import { getMachinesFromFirebase } from '../../redux/machineRedux/machineThunk'

const BookingList: React.FC = () => {
  const dispatch = useDispatch()
  const currBookingList = useSelector((state: AppState) => state.bookingState.personalBookings)
  const dummyListData: Booking[] = [
    {
      id: '1-1',
      start: '2021-03-02T10:00',
      end: '2021-03-02T11:00',
      groupId: '1',
      personId: '1',
      machineId: '1',
    },
    {
      id: '1-2',
      start: '2021-03-03T11:00',
      end: '2021-03-03T12:00',
      groupId: '1',
      personId: '1',
      machineId: '2',
    },
  ]

  useEffect(() => {
    dispatch(getMachinesFromFirebase())
    const doc = db.collection('bookings')
    const unsubscribe = doc.onSnapshot((docSnapshot) => {
      dispatch(getPersonalBookingFromFirebase())
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className="bookingList">
      <Header title={'BookingList'} />
      <List>
        {currBookingList.length >= 1 ? (
          currBookingList.map((item, index) => <BookingListItem {...item} key={`bookingItem${index}`} />)
        ) : (
          <p>You have no booking.</p>
        )}
      </List>
      <BottomNav />
    </div>
  )
}

export default BookingList
