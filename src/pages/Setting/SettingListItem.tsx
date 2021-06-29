import React from 'react'
import { ListItem, ListItemText, makeStyles, SvgIcon, SvgIconTypeMap } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

const useStyles = makeStyles((theme) => ({
  text: {
    marginLeft: '3%',
    color: theme.palette.text.primary,
  },
  svgIcon: {
    color: theme.palette.text.secondary
  }
}))

export interface SettingListItemProps {
  title: string
  path?: string
  admin: boolean
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>
  handler?: () => void
}

const SettingListItem: React.FC<SettingListItemProps> = (props) => {
  const classes = useStyles()
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
    <ListItem
      button
      onClick={() => {
        itemClickHandler(props.path)
      }}
    >
      <SvgIcon className={classes.svgIcon} component={props.icon} />
      <ListItemText className={classes.text} primary={props.title} />
    </ListItem>
  ) : (
    <></>
  )
}

export default SettingListItem
