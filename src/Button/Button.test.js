/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import Button from './Button'

describe('General Button Tests', () => {
  test('Button renders correctly.', () => {
    render(<Button inputValue="1" classValue="darkGray" handleClick={() => { console.log('asdf') }} />)
  })
})
