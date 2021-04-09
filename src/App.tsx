import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NewBooking from './pages/NewBooking/NewBooking'
import Setting from './pages/Setting/Setting'
import BookingList from './pages/BookingList/BookingList'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { useSelector } from 'react-redux'
import { AppState } from './redux/store'
import AvailableMachines from './pages/Setting/AvailableMachines'
import AddMachines from './pages/Setting/AddMachines'
import GroupId from './pages/Setting/GroupId'
import AccountUsers from './pages/Setting/AccountUsers'

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: AppState) => state.userState.loginUser.isAuthenticated)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <PublicRoute exact path={'/login'} component={Login} isAuthenticated={isAuthenticated} />
          <Route exact path={'/signUp'} component={SignUp}></Route>
          <PrivateRoute exact path={'/bookingList'} component={BookingList} isAuthenticated={isAuthenticated} />
          <PrivateRoute exact path={'/newBooking'} isAuthenticated={isAuthenticated} component={NewBooking} />
          <PrivateRoute exact path={'/setting'} isAuthenticated={isAuthenticated} component={Setting} />
          <PrivateRoute
            exact
            path={'/setting/allMachines'}
            isAuthenticated={isAuthenticated}
            component={AvailableMachines}
          />
          <PrivateRoute exact path={'/setting/addMachines'} isAuthenticated={isAuthenticated} component={AddMachines} />
          <PrivateRoute exact path={'/setting/groupId'} isAuthenticated={isAuthenticated} component={GroupId} />
          <PrivateRoute exact path={'/setting/users'} isAuthenticated={isAuthenticated} component={AccountUsers} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
