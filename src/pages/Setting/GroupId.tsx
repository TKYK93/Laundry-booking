import { Button } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { AppState } from '../../redux/store'

const GroupId: React.FC = () => {
  const history = useHistory()
  const loginUser = useSelector((state: AppState) => state.userState.loginUser)

  return (
    <div className="GroupId">
      <Header title={'GroupId'} />
      <p>
        Your Group ID is "{loginUser.groupId}". Please share your ID with your account user. This Group ID is required
        when your account user create their account.
      </p>
      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default GroupId
