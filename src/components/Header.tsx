import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SidebarMenu from './SidebarMenu'

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
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
        <SidebarMenu setShowSidebarMenu={setShowSidebarMenu} showSidebarMenu={showSidebarMenu} />
      </AppBar>
    </div>
  )
}

export default Header
