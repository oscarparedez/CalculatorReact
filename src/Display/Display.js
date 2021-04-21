import React from 'react'
import PropTypes from 'prop-types'
import './Display.css'

const Display = ({ textValue, testId }) => (
  <div className="displayScreen" data-testid={testId}>{textValue}</div>
)

Display.propTypes = {
  textValue: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
}

export default Display
