import { Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import RadioButtonsGroup from '../../components/RadioButtonsGroup';
import { Booking } from '../../models/Booking';
import { Machine } from '../../models/Machine';
import { addBookingThroughFirebase } from '../../redux/BookingRedux/bookingThunk';
import { AppState } from '../../redux/store';
import { formattedDate, formattedTime } from '../../utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

  }),
);

const modalPosition = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

interface BookingModalContentProps {
  start: string | undefined
  end: string | undefined
  setOpenModal: (openModal) => void
}

const BookingModalContent: React.FC<BookingModalContentProps> = ({start, end, setOpenModal}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const loginUser = useSelector((state:AppState) => state.userState.loginUser)
  const machines = useSelector((state:AppState)=>state.machineState.machines)
  const [machineName, setMachineName] = useState<string | undefined>(machines[0].name)

  const checkMachineId = ():string | undefined=> {
    let machineId:string | undefined = undefined
    machines.forEach(machine => {
    if(machine.name === machineName){
      machineId = machine.id
    }})
    return machineId
  }

  const registerHandler = () => {
    const machineId = checkMachineId()
    if(!machineId){
      window.alert("Failed to book because there is something wrong with machine registration.")
      return
    }

    if(!loginUser.groupId){
      window.alert("Failed to book because there is something wrong with your groupID.")
      return 
    }

    if(!start || !end){
      window.alert("Failed to book because there is something wrong with start/end time.")
      return 
    }

    const bookingData:Booking = {
      start: new Date(start).toISOString(),
      end: new Date(end).toISOString(),
      groupId: loginUser.groupId,
      personId: loginUser.uid,
      machineId: machineId
    }

    dispatch(addBookingThroughFirebase(bookingData))
  }

  const machinesNames = ():Array<string> => {
    const tempMachineNameArray:Array<string> = []
    if(!machines){
      return []
    }
    machines.map((machine:Machine) => {
      if(machine.name){
      tempMachineNameArray.push(machine.name)
      }
    })
    return tempMachineNameArray
  }



  return (
    <div style={modalPosition} className={classes.paper}>
    <h2 id="modal-title">Please confirm your booking</h2>
    <h3 id="modal-description">
      Date: {formattedDate(start)}
    </h3>
    <h3 id="modal-description">
      start: {formattedTime(start)}
    </h3>
    <h3 id="modal-description">
      end: {formattedTime(end)}
    </h3>
    <div>
      {machines.length >=1 ? <RadioButtonsGroup radioButtonLabels={machinesNames()} groupLabel={'Please select a machine'} setValue={setMachineName} value={machineName}/> : <p>There is no registered machine. Please register any machine at first.</p>}
    </div>
    <div>
      <Button variant="contained" color="primary" onClick={()=>registerHandler()}>Register</Button>
      <Button variant="contained" color="primary" onClick={()=>setOpenModal(false)}>Cancel</Button>
    </div>
  </div>


  )
}

export default BookingModalContent

