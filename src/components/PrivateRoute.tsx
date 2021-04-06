import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
  if (props.isAuthenticated) {
    return <Route {...props} />
  }

  //   window.location.reload()
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: props.location },
      }}
    />
  )
}

export default PrivateRoute
