import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { AppState } from '../../redux/store'

const useStyles = makeStyles(() => ({
  groupId: {
    textAlign: 'center',
  },
}))

const GroupId: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const loginUser = useSelector((state: AppState) => state.userState.loginUser)

  return (
    <div className={classes.groupId}>
      <Header title={'GroupId'} />
      <p>
        Your Group ID is "<strong>{loginUser.groupId}</strong>". <br />Please share your ID with your account user. This Group ID is required
        when your account user create their account.
      </p>
      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default GroupId
