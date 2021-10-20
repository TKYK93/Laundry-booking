import { makeStyles, List } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import { getPersonalBookingFromFirebase } from '../../redux/BookingRedux/bookingThunk'
import { AppState } from '../../redux/store'
import BookingListItem from './BookingListItem'
import { db } from '../../firebase'
import { getMachinesFromFirebase } from '../../redux/machineRedux/machineThunk'
import LoadingProgress from '../../components/Progress'

const useStyles = makeStyles(() => ({
  NoBookMessage: {
    marginLeft: '1.5rem',
  },
}))

const BookingList: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const currBookingList = useSelector((state: AppState) => state.bookingState.personalBookings)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getMachinesFromFirebase())
    const doc = db.collection('bookings')
    const unsubscribe = doc.onSnapshot(async () => {
      await setIsLoading(true)
      await dispatch(getPersonalBookingFromFirebase())
      await setIsLoading(false)
    })
    return () => unsubscribe()
  }, [])

  return (
    <div className={'bookingList'}>
      <Header title={'BookingList'} />
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          {currBookingList.length >= 1 ? (
            <List>
              {currBookingList.map((item, index) => (
                <BookingListItem {...item} key={`bookingItem${index}`} />
              ))}
            </List>
          ) : (
            <p className={classes.NoBookMessage}>You have no booking.</p>
          )}
        </>
      )}
    </div>
  )
}

export default BookingList
