import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { Machine } from '../../models/Machine'
import { getMachinesFromFirebase } from '../../redux/machineRedux/machineThunk'
import { AppState } from '../../redux/store'

const AvailableMachines: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentMachines = useSelector((state: AppState) => state.machineState.machines)
  useEffect(() => {
    dispatch(getMachinesFromFirebase())
  }, [])
  return (
    <div className="AvailableMachines">
      <Header title={'Available Machines'} />
      <p>AvailableMachines</p>
      {currentMachines.length >= 1 ? (
        currentMachines.map((machine: Machine, index: number) => <p key={`machine${index}`}>{machine.name}</p>)
      ) : (
        <p>There is no machine registered.</p>
      )}
      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default AvailableMachines
