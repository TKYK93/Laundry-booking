import React from 'react'
import { Card, CardContent, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { Machine } from '../../models/Machine'
import { formattedDate, formattedTime } from '../../utils'
import { deleteBookingFromFirebase } from '../../redux/BookingRedux/bookingThunk'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles(() => ({
  card: {
    margin: '3%',
  },
}))

export interface BookingListItemProps {
  id?: string
  start: string
  end: string
  groupId: string
  personId: string
  machineId: string
}

const BookingListItem: React.FC<BookingListItemProps> = (props) => {
  const classes = useStyles()
  const currMachines = useSelector((state: AppState) => state.machineState.machines)
  const dispatch = useDispatch()

  const findMachineName = (id: string): string | undefined => {
    let machineName: string | undefined
    if (id === undefined) {
      machineName = undefined
    } else {
      currMachines.forEach((machine: Machine) => {
        if (machine.id === id) {
          machineName = machine.name
        }
      })
    }
    return machineName
  }

  const machineName = findMachineName(props.machineId)

  const deleteHandler = (bookingId: string | undefined) => {
    if (!bookingId) {
      window.alert('Failed to delete. Please retry.')
      return
    }
    dispatch(deleteBookingFromFirebase(bookingId))
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <ListItem>
          <ListItemText primary={`machine: ${machineName}`} />
          <ListItemText primary={`date ${formattedDate(props.start)}`} />
          <ListItemText primary={`start ${formattedTime(props.start)}`} />
          <ListItemText primary={`end ${formattedTime(props.end)}`} />
          <DeleteIcon onClick={() => deleteHandler(props.id)} />
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default BookingListItem
