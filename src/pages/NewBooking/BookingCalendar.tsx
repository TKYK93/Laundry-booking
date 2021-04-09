import React, { useEffect, useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { Booking } from '../../models/Booking'
import { Modal } from '@material-ui/core'
import BookingModalContent from './BookingModalContent'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupBookingFromFirebase } from '../../redux/BookingRedux/bookingThunk'
import { AppState } from '../../redux/store'

const dummyEvents: Booking[] = [
  {
    id: '1-1',
    start: '2021-04-02T10:00',
    end: '2021-04-02T11:00',
    groupId: '1',
    personId: '1',
    machineId: '1',
  },
  {
    id: '1-2',
    start: '2021-04-03T11:00',
    end: '2021-04-04T12:00',
    groupId: '1',
    personId: '1',
    machineId: '2',
  },
]

interface BookingCalendarProps {
  machineName: string
  machineId: string | undefined
}

const BookingCalendar: React.FC<BookingCalendarProps> = ({ machineName, machineId }) => {
  const currGroupBookings = useSelector((state: AppState) => state.bookingState.groupBookings)
  const dispatch = useDispatch()

  // format example: 2021-04-07T10:00:00+09:00
  const [start, setStart] = useState<string>()
  // format example: Wed Apr 07 2021 12:00:00 GMT+0900
  const [end, setEnd] = useState<string>()
  const [openModal, setOpenModal] = useState<boolean>(false)

  const endTime = (start: string) => {
    const selectedStart = new Date(start)
    const maxBookingRangeHours = 2
    selectedStart.setHours(selectedStart.getHours() + maxBookingRangeHours)
    // Ex. Wed Apr 07 2021 12:00:00 GMT+0900 to be displayed
    const end = selectedStart.toString()
    return end
  }

  const dateClickHandler = (e: DateClickArg) => {
    setStart(e.dateStr)
    setEnd(endTime(e.dateStr))
    setOpenModal(true)
  }

  useEffect(() => {
    if (machineId) {
      dispatch(getGroupBookingFromFirebase(machineId))
    }
  }, [machineId])

  return (
    <div className="BookingCalendar">
      <p>Selected Machine: {machineName}</p>
      <FullCalendar
        initialView="timeGridWeek"
        slotDuration="01:00:00"
        slotMinTime="07:00:00"
        slotMaxTime="22:00:00"
        selectable={true}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={currGroupBookings}
        eventClick={(e) => console.log('e:', e)}
        dateClick={dateClickHandler}
      />
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <BookingModalContent
          start={start}
          end={end}
          machineId={machineId}
          machineName={machineName}
          setOpenModal={setOpenModal}
        />
      </Modal>
    </div>
  )
}

export default BookingCalendar
