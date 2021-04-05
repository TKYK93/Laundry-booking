import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'

export interface SettingListItemProps {
  title: string
  path?: string
  admin: boolean
  handler?: () => void
}

const SettingListItem: React.FC<SettingListItemProps> = (props) => {
  return (
    <ListItem button>
      <ListItemText primary={props.title} />
    </ListItem>
  )
}

export default SettingListItem
