import { Button, makeStyles, AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import washMachinePic from '../assets/washMachines.jpg'
import bookingList from '../assets/bookingList.jpg'
import newBooking from '../assets/newBooking.jpg'
import addNewMachines from '../assets/addNewMachine.jpg'
import { myColors } from '../config'

const useStyles = makeStyles(() => ({
  imgWrapper: {
    backgroundImage: `url(${washMachinePic})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  img: {
    opacity: '0.8',
    minHeight: '100vh',
    backgroundSize: 'cover',
  },
  header: {
    position: 'sticky',
    ziIndex: '100',
  },
  textFiled: {
    margin: '5% 0',
  },
  buttonWrapper: {
    width: '30%',
    margin: '0 0 0 auto',
  },
  button: {
    margin: '10% 3%',
    backgroundColor: myColors.myColor5,
    color: '#ffffff',
    '&:hover': {
      backgroundColor: myColors.myColor5,
      color: '#000000',
    },
  },
  gridWrapper: {
    paddingTop: '90vh',
  },
  gridContainer: {
    minHeight: '95vh',
    backgroundColor: myColors.myColor1,
    padding: '3%',
  },
  girdImg: {
    width: '100%',
  },
  rowWrapper: {
    backgroundColor: '#ffffff',
  },
}))

const LandingPage: React.FC = () => {
  const classes = useStyles()
  const hisotry = useHistory()

  return (
    <div className="LandingPage">
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Welcome to Laundry Booking
          </Typography>
          <div className={classes.buttonWrapper}>
            <Button className={classes.button} onClick={() => hisotry.push('/login')}>
              Login
            </Button>
            <Button className={classes.button} onClick={() => hisotry.push('/signUp')}>
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* <img src={washMachinePic} alt='washMachines' className={classes.img}/> */}
      <div className={`${classes.imgWrapper} ${classes.img}`}>
        <div className={classes.gridWrapper}>
          <Grid container className={classes.gridContainer} spacing={2}>
            <Grid item xs={6}>
              You can book laundry machines in your apartment by your phone/PC only.
            </Grid>
            <Grid item xs={6}>
              <img src={bookingList} alt="bookingList" className={classes.girdImg} />
            </Grid>

            <Grid item xs={6}>
              <img src={newBooking} alt="laundryBooking" className={classes.girdImg} />
            </Grid>
            <Grid item xs={6}>
              Your bookings in your apartment are shared!
            </Grid>

            <Grid item xs={6}>
              Ofcourse machines can be added!
            </Grid>
            <Grid item xs={6}>
              <img src={addNewMachines} alt="addNewMchines" className={classes.girdImg} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
