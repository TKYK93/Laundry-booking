import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Button, Drawer, List, ListItem } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { logoutThroughFirebase } from '../redux/userRedux/userThunk'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const dispatch = useDispatch()
  const [showSidebarMenu, setShowSidebarMenu] = useState<boolean>(false)

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className="header.menuButton"
            color="inherit"
            aria-label="menu"
            onClick={() => {
              setShowSidebarMenu(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
        <Drawer style={{ width: '30%' }} anchor="left" open={showSidebarMenu}>
          <List>
            <ListItem>
              <Button
                onClick={() => {
                  setShowSidebarMenu(false)
                }}
              >
                Close the sidebar menu
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  dispatch(logoutThroughFirebase())
                }}
              >
                Logout
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </div>
  )
}

export default Header
