import { Button, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { User } from '../../models/User'
import { AppState } from '../../redux/store'
import { db } from '../../firebase'
import LoadingProgress from '../../components/Progress'

const useStyles = makeStyles((theme) => ({
  accountUsers: {
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  users: {
    display: 'flex',
    flexDirection: 'column',
    margin: '3% auto',
    textAlign: 'center',
  },
}))

const AccountUsers: React.FC = () => {
  const classes = useStyles()
  const history = useHistory()
  const loginUser = useSelector((state: AppState) => state.userState.loginUser)
  const [accountUsers, setAccountUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getAccountUsers = async () => {
      setIsLoading(true)
      const groupId = loginUser.groupId
      const userRef = db.collection('users').where('groupId', '==', groupId)
      const doc = await userRef.get()
      if (!doc) {
        console.log('No such document in the database!')
      } else {
        await doc.forEach((user) => {
          const result = user.data() as User
          setAccountUsers((prev) => [...prev, result])
        })
        await setIsLoading(false)
      }
    }
    getAccountUsers()
  }, [])

  return (
    <div className={classes.accountUsers}>
      <Header title={'People in Your Account'} />
      {isLoading ? (
        <LoadingProgress />
      ) : accountUsers.length >= 1 ? (
        <div className={classes.users}>
          {accountUsers.map((user: User, index: number) => (
            <p key={`accountUser${index}`}>{user.email}</p>
          ))}
        </div>
      ) : (
        <p>There are no other people expect other than you in this account.</p>
      )}

      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default AccountUsers
