import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Booking } from '../../models/Booking'
import { addBookingThroughFirebase, getPersonalBookingFromFirebase } from '../../redux/BookingRedux/bookingThunk'
import { AppState } from '../../redux/store'
import { formattedDate, formattedTime } from '../../utils'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal_buttons: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })
)

const modalPosition = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

interface BookingModalContentProps {
  start: string | undefined
  end: string | undefined
  machineId: string | undefined
  machineName: string | undefined
  setOpenModal: (openModal) => void
}

const BookingModalContent: React.FC<BookingModalContentProps> = ({
  start,
  end,
  machineId,
  machineName,
  setOpenModal,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loginUser = useSelector((state: AppState) => state.userState.loginUser)

  const registerHandler = async () => {
    if (!machineId) {
      window.alert('Failed to book because there is something wrong with machine registration.')
      return
    }

    if (!loginUser.groupId) {
      window.alert('Failed to book because there is something wrong with your groupID.')
      return
    }

    if (!start || !end) {
      window.alert('Failed to book because there is something wrong with start/end time.')
      return
    }

    const bookingData: Booking = {
      start: new Date(start).toISOString(),
      end: new Date(end).toISOString(),
      groupId: loginUser.groupId,
      personId: loginUser.uid,
      machineId: machineId,
    }

    await dispatch(addBookingThroughFirebase(bookingData))
    await dispatch(getPersonalBookingFromFirebase())
    await setOpenModal(false)
  }

  return (
    <div style={modalPosition} className={classes.wrapper}>
      <h2 id="modal-title">Please confirm your booking</h2>
      <h3 id="modal-description">Machine: {machineName}</h3>
      <h3 id="modal-description">Date: {formattedDate(start)}</h3>
      <h3 id="modal-description">start: {formattedTime(start)}</h3>
      <h3 id="modal-description">end: {formattedTime(end)}</h3>
      <div className={classes.modal_buttons}>
        <Button variant="contained" color="primary" onClick={() => registerHandler()}>
          Register
        </Button>
        <Button variant="contained" color="primary" onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default BookingModalContent
