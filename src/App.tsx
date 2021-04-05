import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import NewBooking from './NewBooking/NewBooking'
import Header from './components/Header'
import BottomNav from './components/BottomNav'
import Setting from './Setting/Setting'
import BookingList from './BookingList/BookingList'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/bookingList" />
          <Route exact path={'/bookingList'}>
            <Header title={'BookingList'} />
            <h1>BookingList</h1>
            <BookingList />
            <BottomNav />
          </Route>
          <Route path={'/newBooking'}>
            <Header title={'New Booking'} />
            <NewBooking />
            <BottomNav />
          </Route>
          <Route path={'/setting'}>
            <Header title={'Setting'} />
            <Setting />
            <BottomNav />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
