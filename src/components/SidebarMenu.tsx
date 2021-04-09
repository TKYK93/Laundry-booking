import React from 'react'
import { Drawer, List, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation'
import SidebarMenuItem from './SidebarMenuItem'
import { logoutThroughFirebase } from '../redux/userRedux/userThunk'

interface SidebarMenuProps {
  setShowSidebarMenu: (showSidebar: boolean) => void
  showSidebarMenu: boolean
}

const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const dispatch = useDispatch()

  const SidebarMenuItems = [
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
    <Drawer style={{ width: '40%' }} anchor="left" open={props.showSidebarMenu}>
      <List>
        {SidebarMenuItems.map((menuItem, index) => (
          <SidebarMenuItem {...menuItem} key={`sidebarMenu${index}`} />
        ))}
      </List>
    </Drawer>
  )
}

export default SidebarMenu
