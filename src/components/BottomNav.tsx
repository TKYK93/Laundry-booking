import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import { useHistory } from 'react-router'

const BottomNav: React.FC = () => {
  const pathName = window.location.pathname
  const history = useHistory()
  const [nav, setNav] = useState<string>(pathName)
  return (
    <div className="bottomNav">
      <BottomNavigation
        value={nav}
        onChange={(event, newValue) => {
          setNav(newValue)
          history.replace(`/${newValue}`)
        }}
        showLabels
      >
        <BottomNavigationAction label="bookingList" value={'bookingList'} icon={<RestoreIcon />} />
        <BottomNavigationAction label="newBooking" value={'newBooking'} icon={<AddCircleOutlineIcon />} />
        <BottomNavigationAction label="setting" value={'setting'} icon={<SettingsIcon />} />
      </BottomNavigation>
    </div>
  )
}

export default BottomNav
