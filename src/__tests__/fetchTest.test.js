// __tests__/fetch.test.js
//this is example for testing library in react

//here we use render,act,cleanup

//here mocking concept used for fake axios

//mocking based on jest framework
import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {waitFor} from '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import Fetch from '../../fetch'

jest.mock('axios')

test('loads and displays greeting', async () => {
  const url = '/greeting'
  render(<Fetch url={url} />)

  axiosMock.get.mockResolvedValueOnce({
    data: { greeting: 'hello there' },
  })

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(axiosMock.get).toHaveBeenCalledTimes(1)
  expect(axiosMock.get).toHaveBeenCalledWith(url)
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})