import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Header from '../../components/Header'
import { User } from '../../models/User'
import { AppState } from '../../redux/store'
import { db } from '../../firebase'
import LoadingProgress from '../../components/Progress'

const AccountUsers: React.FC = () => {
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
          console.log(result)
          setAccountUsers((prev) => [...prev, result])
        })
        await setIsLoading(false)
      }
    }
    getAccountUsers()
  }, [])

  return (
    <div className="accountUsers">
      <Header title={'People in Your Account'} />
      {isLoading ? (
        <LoadingProgress />
      ) : accountUsers.length >= 1 ? (
        accountUsers.map((user: User, index: number) => <p key={`accountUser${index}`}>{user.email}</p>)
      ) : (
        <p>There are no other people expect other than you in this account.</p>
      )}

      <Button onClick={() => history.goBack()}>Back To Setting Page</Button>
    </div>
  )
}

export default AccountUsers
