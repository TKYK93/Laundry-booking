import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BottomNav from '../../components/BottomNav'
import Header from '../../components/Header'
import RadioButtonsGroup from '../../components/RadioButtonsGroup'
import { AppState } from '../../redux/store'
import BookingCalendar from './BookingCalendar'
import { Machine } from '../../models/Machine'

const NewBooking: React.FC = () => {
  const machines = useSelector((state: AppState) => state.machineState.machines)
  const defaultMachineName = machines.length >= 1 ? machines[0].name : undefined
  const [machineName, setMachineName] = useState<string | undefined>(defaultMachineName)

  const machinesNames = (): Array<string> => {
    const tempMachineNameArray: Array<string> = []
    if (!machines) {
      return []
    }
    machines.map((machine: Machine) => {
      if (machine.name) {
        tempMachineNameArray.push(machine.name)
      }
    })
    return tempMachineNameArray
  }

  const checkMachineId = (): string | undefined => {
    let machineId: string | undefined = undefined
    machines.forEach((machine) => {
      if (machine.name === machineName) {
        machineId = machine.id
      }
    })
    return machineId
  }

  return (
    <div className="NewBooking">
      <Header title={'New Booking'} />

      {machineName ? (
        <div>
          <RadioButtonsGroup
            radioButtonLabels={machinesNames()}
            groupLabel={'Please select a machine'}
            setValue={setMachineName}
            value={machineName}
          />
          <BookingCalendar machineName={machineName} machineId={checkMachineId()} />
        </div>
      ) : (
        <p>There is no registered machine. Please register any machine at first.</p>
      )}

      <BottomNav />
    </div>
  )
}

export default NewBooking
