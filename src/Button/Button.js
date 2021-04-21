/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({ inputValue, classValue, handleClick }) => (
  <div className={classValue} onClick={() => { handleClick(inputValue) }}>{inputValue}</div>
)

Button.propTypes = {
  inputValue: PropTypes.string.isRequired,
  classValue: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Button
