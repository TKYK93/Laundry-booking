import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'

export interface SettingListItemProps {
  title: string
  path?: string
  admin: boolean
  handler?: () => void
}

const SettingListItem: React.FC<SettingListItemProps> = (props) => {
  const loginUser = useSelector((state: AppState) => state.userState.loginUser)
  const history = useHistory()
  const itemClickHandler = (path: string | undefined) => {
    if (path === undefined) {
      return
    } else {
      history.push(path)
    }
  }
  return !props.admin || loginUser.isAdmin ? (
    <ListItem button>
      <ListItemText
        primary={props.title}
        onClick={() => {
          itemClickHandler(props.path)
        }}
      />
    </ListItem>
  ) : (
    <></>
  )
}

export default SettingListItem
