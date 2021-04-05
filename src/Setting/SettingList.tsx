import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'

export interface SettingListProps {
  title: string
  path?: string
  admin: boolean
  handler?: () => void
}

const SettingList: React.FC<SettingListProps> = (props) => {
  return (
    <ListItem button>
      <ListItemText primary={props.title} />
    </ListItem>
  )
}

export default SettingList
