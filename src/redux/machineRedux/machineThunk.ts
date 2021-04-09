import { ThunkAction } from 'redux-thunk'
import { RootReducer } from '../store'
import { Action } from 'redux'
import firebase, { db } from '../../firebase'
import { getMachines } from './machineActions'
import { Machine } from '../../models/Machine'

export const addMachineThroughFirebase = (
  name: string
): ThunkAction<void, RootReducer, undefined, Action<string>> => async (dispatch, getState) => {
  const machineId = db.collection('_').doc().id
  const groupId = getState().userState.loginUser.groupId
  const docRef = db.collection('machines').doc()
  docRef
    .set({
      id: machineId,
      groupId: groupId,
      name: name,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      window.alert('Successefully added the new machine!')
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      window.alert('error code: ' + errorCode + ' because ' + errorMessage)
    })
}

export const getMachinesFromFirebase = (): ThunkAction<void, RootReducer, undefined, Action<string>> => async (
  dispatch,
  getState
) => {
  const groupId = getState().userState.loginUser.groupId
  const machineRef = db.collection('machines').where('groupId', '==', groupId)
  const doc = await machineRef.get()
  if (!doc) {
    console.log('No such document in the database!')
  } else {
    const tempMachineArray: Machine[] = []
    await doc.forEach((machine) => {
      const result = machine.data() as Machine
      tempMachineArray.push(result)
    })
    await dispatch(getMachines(tempMachineArray))
  }
}
