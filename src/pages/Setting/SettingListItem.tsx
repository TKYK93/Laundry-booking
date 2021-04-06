import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router'

export interface SettingListItemProps {
  title: string
  path?: string
  admin: boolean
  handler?: () => void
}

const SettingListItem: React.FC<SettingListItemProps> = (props) => {
  const history = useHistory()
  const itemClickHandler = (path: string | undefined) => {
    if (path === undefined) {
      return
    } else {
      history.push(path)
    }
  }
  return (
    <ListItem button>
      <ListItemText
        primary={props.title}
        onClick={() => {
          itemClickHandler(props.path)
        }}
      />
    </ListItem>
  )
}

export default SettingListItem
