import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { Machine } from '../../models/Machine'
import { formattedTime } from '../../utils'

export interface BookingListItemProps {
  id?: string
  start: string
  end: string
  groupId: string
  personId: string
  machineId: string
}

const BookingListItem: React.FC<BookingListItemProps> = (props) => {
  const currMachines = useSelector((state: AppState) => state.machineState.machines)

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

  return (
    <ListItem button>
      <ListItemText primary={`machine: ${machineName}`} />
      <ListItemText primary={`start ${formattedTime(props.start)}`} />
      <ListItemText primary={`end ${formattedTime(props.end)}`} />
    </ListItem>
  )
}

export default BookingListItem
