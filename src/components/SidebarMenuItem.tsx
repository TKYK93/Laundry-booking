import React from 'react'
import { ListItem, ListItemText, makeStyles, SvgIcon, SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

const useStyles = makeStyles(() => ({
  text: {
    marginLeft: '3%',
  },
}))

export interface SidebarMenuItemProps {
  title: string
  path?: string
  icon: OverridableComponent<SvgIconTypeMap<Record<string, unknown>, 'svg'>>
  handler?: () => void
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = (props) => {
  const classes = useStyles()

  return (
    <ListItem button>
      <SvgIcon component={props.icon} />
      <ListItemText className={classes.text} primary={props.title} onClick={props.handler} />
    </ListItem>
  )
}

export default SidebarMenuItem
