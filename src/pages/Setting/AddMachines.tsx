import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { addMachineThroughFirebase } from '../../redux/machineRedux/machineThunk'

const AddMachines: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [machineName, setMachineName] = useState<string>()
  const registerHandler = (e) => {
    e.preventDefault()
    if (machineName) {
      dispatch(addMachineThroughFirebase(machineName))
    } else {
      window.alert("Machine's name is empty. Please try it again.")
    }
  }
  return (
    <div className="AddMachines">
      <Header title={'Add Machines'} />
      <p>Please add your laundry machines</p>
      <form noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Enter a new machine"
          defaultValue="Ex. Laundry Machine No.1"
          variant="outlined"
          onChange={(e) => setMachineName(e.target.value)}
        />
        <Button onClick={registerHandler}>Register a new machine</Button>
      </form>

      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default AddMachines
