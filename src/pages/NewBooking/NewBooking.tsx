import React from 'react'
import BottomNav from '../../components/BottomNav'
import Header from '../../components/Header'
import BookingCalendar from './BookingCalendar'

const NewBooking: React.FC = () => {
  return (
    <div className="NewBooking">
      <Header title={'New Booking'} />
      <p>NewBooking</p>
      <BookingCalendar />
      <BottomNav />
    </div>
  )
}

export default NewBooking
