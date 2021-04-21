/* eslint-disable max-len */
/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('General App Tests', () => {
  test('App renders correctly.', () => {
    render(<App />)
  })
  test('Value is inserted into Display Screen when a button is clicked.', () => {
    render(<App />)
    const btnElement = screen.getByText('1')
    const screenElement = screen.getByTestId('display-screen')

    userEvent.click(btnElement)
    expect(screenElement).toHaveTextContent('1')
  })
  test('Display Screen is limited to 9 digits per record', () => {
    render(<App />)

    const btnElement1 = screen.getByText('1')
    const btnElement2 = screen.getByText('2')
    const btnElement3 = screen.getByText('3')
    const screenElement = screen.getByTestId('display-screen')

    // Try to insert 10 numbers
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElement3)
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElement3)
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElement3)
    userEvent.click(btnElement1)

    expect(screenElement).toHaveTextContent('123123123')
  })
  test('Show error if subtraction result is negative', () => {
    render(<App />)

    const btnElement1 = screen.getByText('1')
    const btnElement2 = screen.getByText('2')
    const btnElement3 = screen.getByText('3')
    const btnElementSubtraction = screen.getByText('-')
    const btnElementEquals = screen.getByText('=')
    const screenElement = screen.getByTestId('display-screen')

    // Try to do 12-23, which should not be valid because we are not allowing negative result comming from subtraction.
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElementSubtraction)
    userEvent.click(btnElement2)
    userEvent.click(btnElement3)
    userEvent.click(btnElementEquals)

    expect(screenElement).toHaveTextContent('ERROR')
  })
  test('Show error if multiplication result greater than 999,999,999', () => {
    render(<App />)

    const btnElement9 = screen.getByText('1')
    const btnElementMultiplication = screen.getByText('x')
    const btnElementEquals = screen.getByText('=')
    const screenElement = screen.getByTestId('display-screen')

    // Try to do 999999999*999999999, which should not be valid because we are not allowing results greater than 999999999.
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElementMultiplication)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElement9)
    userEvent.click(btnElementEquals)

    expect(screenElement).toHaveTextContent('ERROR')
  })
  test('Convert number to negative if positive, and positive if negative when ± button clicked', () => {
    render(<App />)

    const btnElement1 = screen.getByText('1')
    const btnElement2 = screen.getByText('2')
    const btnElement3 = screen.getByText('3')
    const btnElementPlusMinus = screen.getByText('±')
    const screenElement = screen.getByTestId('display-screen')

    // Do 123±, which should return -123, as it is operating -1*123
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElement3)
    userEvent.click(btnElementPlusMinus)

    expect(screenElement).toHaveTextContent('-123')
  })
  test('Convert number to percentage', () => {
    render(<App />)

    const btnElement1 = screen.getByText('1')
    const btnElement2 = screen.getByText('2')
    const btnElementPercentage = screen.getByText('%')
    const screenElement = screen.getByTestId('display-screen')

    // Do to do 12%, which should return 0.12, as it is operating 12/100.
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElementPercentage)

    expect(screenElement).toHaveTextContent('0.12')
  })
  test('Divide two float numbers', () => {
    render(<App />)

    const btnElement1 = screen.getByText('1')
    const btnElement2 = screen.getByText('2')
    const btnElement5 = screen.getByText('5')
    const btnElementDecimalPoint = screen.getByText('.')
    const btnElementDivision = screen.getByText('÷')
    const screenElement = screen.getByTestId('display-screen')
    const btnElementEquals = screen.getByText('=')

    // Do 2.22 / 1.125, which should return 1.9733333 as an answer
    userEvent.click(btnElement2)
    userEvent.click(btnElementDecimalPoint)
    userEvent.click(btnElement2)
    userEvent.click(btnElement2)
    userEvent.click(btnElementDivision)
    userEvent.click(btnElement1)
    userEvent.click(btnElementDecimalPoint)
    userEvent.click(btnElement1)
    userEvent.click(btnElement2)
    userEvent.click(btnElement5)

    userEvent.click(btnElementEquals)

    expect(screenElement).toHaveTextContent('1.9733333')
  })
})
