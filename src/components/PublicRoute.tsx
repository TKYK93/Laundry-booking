import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

interface PublicRouteProps extends RouteProps {
  isAuthenticated: boolean
}

const PublicRoute: React.FC<PublicRouteProps> = (props) => {
  return props.isAuthenticated ? <Redirect to={'/bookingList'} /> : <Route {...props} />
}

export default PublicRoute
