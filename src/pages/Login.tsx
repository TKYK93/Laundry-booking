import { TextField, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { getMachinesFromFirebase } from '../redux/machineRedux/machineThunk'
import { loginThroughFirebase } from '../redux/userRedux/userThunk'

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '20%',
  },
  textFiled: {
    margin: '5% 0',
  },
  button: {
    margin: '10% 0',
  },
}))

const Login: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const loginHandler = async (e) => {
    await e.preventDefault()
    await dispatch(loginThroughFirebase(email, password))
    await history.push('/bookingList')
  }

  return (
    <div className="Login">
      <p>Login</p>
      <form className={classes.wrapper} noValidate autoComplete="off">
        <TextField className={classes.textFiled} id="email" label="email" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          className={classes.textFiled}
          id="password"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={classes.textFiled} variant="contained" color="primary" onClick={loginHandler}>
          Login
        </Button>
        <Button
          color="primary"
          onClick={() => {
            history.push('/signUp')
          }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default Login
