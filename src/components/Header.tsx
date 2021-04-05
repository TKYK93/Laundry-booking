import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

interface HeaderProps {
    title: string
}

const Header: React.FunctionComponent<HeaderProps> = ({title}) => {
  return (

      <div className="header">
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className="header.menuButton" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default Header;
