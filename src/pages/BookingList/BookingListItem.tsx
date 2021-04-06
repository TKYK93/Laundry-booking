import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

export interface BookingListItemProps {
  id: string
  start: string
  end: string
  personId: string
  machineId: string
}

const BookingListItem: React.FC<BookingListItemProps> = (props) => {
  return (
    <ListItem button>
      <ListItemText primary={`machine No. ${props.machineId}`} />
    </ListItem>
  )
}

export default BookingListItem
