import { List } from '@material-ui/core'
import React from 'react'
import { Booking } from '../model/Booking'
import BookingListItem from './BookingListItem'

const BookingList:React.FC = () => {
    const dummyListData:Booking[] = [
        {
            id: "1-1",
            start: "2021-03-02T10:00",
            end: "2021-03-02T11:00",
            personId: "1",
            machineId: "1",
        },
        {
            id: "1-2",
            start: "2021-03-03T11:00",
            end: "2021-03-03T12:00",
            personId: "1",
            machineId: "2",
        },

    ]
  return (
    <div className="BookingList">

    <List>
        {dummyListData.map((item, index)=>(<BookingListItem {...item} key={`bookingItem${index}`}/>))}
    </List>
    </div>
  )
}

export default BookingList
