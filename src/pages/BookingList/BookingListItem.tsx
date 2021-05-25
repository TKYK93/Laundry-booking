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
  '@keyframes shake' : {
    '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
    '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
    '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
    '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
    '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
    '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
    '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
    '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
    '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
    '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
    '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' },
  },
  deleteIcon: {
    "&:hover":{
      cursor: 'pointer',
      animation: `$shake 0.5s ease-in-out`,
      animationIterationCount: 'infinite',
      },
  }
  
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
          <DeleteIcon className={classes.deleteIcon} onClick={() => deleteHandler(props.id)} />
        </ListItem>
      </CardContent>
    </Card>
  )
}

export default BookingListItem
