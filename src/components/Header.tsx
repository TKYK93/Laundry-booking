import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SidebarMenu from './SidebarMenu'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { useDispatch } from 'react-redux'
import { setDarkModeOff, setDarkModeOn } from '../redux/darkModeRedux/darkModeActions'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  darkModeButton: {
    marginLeft: 'auto',
  },
}))

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [showSidebarMenu, setShowSidebarMenu] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const handleDarkModeOn = () => {
    dispatch(setDarkModeOn())
    setDarkMode(true)
  }
  const handleDarkModeOff = () => {
    dispatch(setDarkModeOff())
    setDarkMode(false)
  }

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
          {darkMode ? (
            <IconButton color="inherit" onClick={handleDarkModeOff} className={classes.darkModeButton}>
              <Brightness7Icon />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={handleDarkModeOn} className={classes.darkModeButton}>
              <Brightness4Icon />
            </IconButton>
          )}
        </Toolbar>
        <SidebarMenu setShowSidebarMenu={setShowSidebarMenu} showSidebarMenu={showSidebarMenu} />
      </AppBar>
    </div>
  )
}

export default Header
