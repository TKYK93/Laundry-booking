import React from 'react'
import { Drawer, List } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import RestoreIcon from '@material-ui/icons/Restore'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'
import SidebarMenuItem from './SidebarMenuItem'
import { logoutThroughFirebase } from '../redux/userRedux/userThunk'
import { useHistory } from 'react-router'

interface SidebarMenuProps {
  setShowSidebarMenu: (showSidebar: boolean) => void
  showSidebarMenu: boolean
}

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const SidebarMenuItems = [
    {
      title: 'Booking List',
      icon: RestoreIcon,
      handler: () => {
        props.setShowSidebarMenu(false)
        history.replace('/bookingList')
      },
    },
    {
      title: 'New Booking',
      icon: AddCircleOutlineIcon,
      handler: () => {
        props.setShowSidebarMenu(false)
        history.replace('/newBooking')
      },
    },
    {
      title: 'Setting',
      icon: SettingsIcon,
      handler: () => {
        props.setShowSidebarMenu(false)
        history.replace('/setting')
      },
    },
    {
      title: 'Close this menu',
      icon: CancelPresentationIcon,
      handler: () => props.setShowSidebarMenu(false),
    },
    {
      title: 'Log out',
      icon: ExitToAppIcon,
      handler: () => dispatch(logoutThroughFirebase()),
    },
  ]

  return (
    <Drawer
      style={{ width: '40%' }}
      anchor="left"
      open={props.showSidebarMenu}
      onClose={() => props.setShowSidebarMenu(false)}
    >
      <List>
        {SidebarMenuItems.map((menuItem, index) => (
          <SidebarMenuItem {...menuItem} key={`sidebarMenu${index}`} />
        ))}
      </List>
    </Drawer>
  )
}

export default SidebarMenu
