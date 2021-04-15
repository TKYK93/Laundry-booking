import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { addMachineThroughFirebase, getMachinesFromFirebase } from '../../redux/machineRedux/machineThunk'

const useStyles = makeStyles(() => ({
  addMachines: {
    textAlign: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20%',
  },
  addMachines_form: {
    margin: '5% 0',
    display: 'flex',
    flexDirection: 'column',
  },
  addMachines_form_textField: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  addMachines_form_button: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  button: {
    margin: '10% 0',
  },
}))

const AddMachines: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [machineName, setMachineName] = useState<string>()
  const registerHandler = async (e) => {
    e.preventDefault()
    if (machineName) {
      await dispatch(addMachineThroughFirebase(machineName))
      await dispatch(getMachinesFromFirebase())
      await history.push('/setting')
    } else {
      window.alert("Machine's name is empty. Please try it again.")
    }
  }
  return (
    <div className={classes.addMachines}>
      <Header title={'Add Machines'} />
      <p>Please add your laundry machines</p>
      <form className={classes.addMachines_form} noValidate autoComplete="off">
        <TextField
          className={classes.addMachines_form_textField}
          required
          id="outlined-required"
          label="Enter a new machine"
          defaultValue="Ex. Laundry Machine No.1"
          variant="outlined"
          onChange={(e) => setMachineName(e.target.value)}
        />
        <Button
          color="primary"
          className={classes.addMachines_form_button}
          variant="contained"
          onClick={registerHandler}
        >
          Register a new machine
        </Button>
      </form>

      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default AddMachines
