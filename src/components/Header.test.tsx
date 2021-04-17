import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { Provider } from 'react-redux'
import store from '../redux/store'

const title = 'Header Test'

describe('Header test', () => {
  test('renders Header Component and test if the text appears', () => {
    render(
      <Provider store={store}>
        <Header title={title} />
      </Provider>
    )
    screen.debug()
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
