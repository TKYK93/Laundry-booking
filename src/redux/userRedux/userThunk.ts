import { ThunkAction } from 'redux-thunk'
import { RootReducer } from '../store'
import { Action } from 'redux'
import firebase, { db } from '../../firebase'
import { setLoginUser, setLogoutUser } from './userActions'

export const loginThroughFirebase = (
  email: string,
  password: string
): ThunkAction<void, RootReducer, undefined, Action<string>> => async (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      if (user !== null) {
        dispatch(setLoginUser({ uid: user.uid, email: user.email, isAuthenticated: true }))
      } else {
        window.alert('failed to login')
      }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      window.alert('error code: ' + errorCode + ' because ' + errorMessage)
    })
}

export const signUpThroughFirebase = (
  email: string,
  password: string,
  isAdmin: boolean,
  groupId?: string
): ThunkAction<void, RootReducer, undefined, Action<string>> => async () => {
  // generate a random ID if isAdmin == true
  const IdLength = 8
  const character = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const characterLength = character.length
  let randomId = ''
  for (let i = 0; i < IdLength; i++) {
    randomId += character[Math.floor(Math.random() * characterLength)]
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      const docRef = db.collection('users').doc(user?.uid)
      if (isAdmin) {
        docRef.set({
          email: email,
          isAdmin: isAdmin,
          groupId: randomId,
        })
        window.alert('Please share your Group ID ' + randomId + ' with your accout user')
      } else {
        docRef.set({
          email: email,
          isAdmin: isAdmin,
          groupId: groupId,
        })
      }
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      window.alert('error code: ' + errorCode + ' because ' + errorMessage)
    })
}

export const logoutThroughFirebase = (): ThunkAction<void, RootReducer, undefined, Action<string>> => (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(setLogoutUser())
      window.alert('logout success!')
    })
    .catch((error) => {
      console.log('failed to logout because' + error)
    })
}
