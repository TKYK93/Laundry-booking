import { TextField, Button, makeStyles, Switch, FormControlLabel } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../components/Header'
import { signUpThroughFirebase } from '../redux/userRedux/userThunk'

const useStyles = makeStyles(() => ({
  switch: {},
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

const SignUp: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [groupId, setGroupId] = useState<string>()

  const signUpHandler = (e) => {
    e.preventDefault()
    dispatch(signUpThroughFirebase(email, password, isAdmin, groupId))
    history.replace('/bookingList')
  }

  return (
    <div className="signUp">
      <p>SignUp</p>

      <form className={classes.wrapper} noValidate autoComplete="off">
        <FormControlLabel
          control={
            <Switch
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
              color="primary"
              name="asAdmin"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          }
          label="As Admin User"
        />
        {!isAdmin && (
          <TextField
            className={classes.textFiled}
            id="groupId"
            label="groupId"
            onChange={(e) => setGroupId(e.target.value)}
          />
        )}
        <TextField className={classes.textFiled} id="email" label="email" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          className={classes.textFiled}
          id="password"
          label="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className={classes.button} variant="contained" color="primary" onClick={signUpHandler}>
          SignUp
        </Button>
        <Button
          color="primary"
          onClick={() => {
            history.goBack()
          }}
        >
          Log in
        </Button>
      </form>
    </div>
  )
}

export default SignUp
