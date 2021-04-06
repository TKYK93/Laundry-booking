import React from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Booking } from '../../models/Booking'

const BookingCalendar: React.FC = () => {
  const dummyEvents: Booking[] = [
    {
      id: '1-1',
      start: '2021-04-02T10:00',
      end: '2021-04-02T11:00',
      personId: '1',
      machineId: '1',
    },
    {
      id: '1-2',
      start: '2021-04-03T11:00',
      end: '2021-04-04T12:00',
      personId: '1',
      machineId: '2',
    },
  ]

  return (
    <div className="BookingCalendar">
      <p>BookingCalendar</p>
      <FullCalendar
        initialView="dayGridWeek"
        slotDuration="00:30:00" // 表示する時間軸の最小値
        selectable={true} // 日付選択可能
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        events={dummyEvents}
        eventClick={(e) => console.log('e:', e)}
      />
    </div>
  )
}

export default BookingCalendar
