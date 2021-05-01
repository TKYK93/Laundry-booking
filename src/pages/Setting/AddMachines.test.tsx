import React from 'react'
import { fireEvent, getByLabelText, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import AddMachines from './AddMachines'
import store from '../../redux/store'

jest.mock('../../redux/machineRedux/machineThunk', () => ({
  addMachineThroughFirebase: jest.fn(() => Promise.resolve()),
  getMachinesFromFirebase: jest.fn(() => Promise.resolve()),
}))

describe('AddMAchines test', () => {
  test('renders AddMachines Component and test if the text appears', () => {
    render(
      <Provider store={store}>
        <AddMachines />
      </Provider>
    )
    expect(screen.getByText('Add Machines')).toBeInTheDocument()
    const nameInput = screen.getByLabelText(/a new machine/i)
    const dummyInputValue = 'New Machine No.1'
    fireEvent.change(nameInput, { target: { value: dummyInputValue } })
    expect(nameInput).toHaveValue(dummyInputValue)

    const registerButton = screen.getByText('Register a new machine')
    fireEvent.click(registerButton)
  })
})
