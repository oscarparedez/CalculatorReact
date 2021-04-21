/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import React from 'react'
import Button from '../Button'
import Display from '../Display'

const App = () => {
  const [result, setResult] = React.useState('0')
  const [previousNumber, setPreviousNumber] = React.useState('')
  const [operator, setOperator] = React.useState('')
  const [flagDecimalPoint, setFlagDecimalPoint] = React.useState(false)

  const screenStyle = {
    width: '320px',
    height: '470px',
    backgroundColor: 'blue',
    boxShadow: '0px 0px 20px 0px #aaa',
    position: 'absolute',
    left: '50%',
    marginTop: '50px',
    marginLeft: '-50px',
  }

  const addToResult = (valor) => {
    if (result === '0') {
      setResult(valor)
    } else if (result === 'ERROR') {
      clearResult()
    } else if (result.length < 9) {
      setResult(result + valor)
    }
  }
  const addDecimal = (valor) => {
    if (!flagDecimalPoint) {
      setResult(result + valor)
      setFlagDecimalPoint(true)
    }
  }

  const multiplyByNegativeOne = () => {
    if (result === 'ERROR') {
      clearResult()
    } else if (result.length < 9) {
      setResult((Number(-1) * Number(result)).toString())
    }
  }

  const convertToPercentage = () => {
    if (result === 'ERROR') {
      clearResult()
    } else {
      setResult((Number(result) / 100).toString().substring(0, 9))
    }
  }

  const clearResult = () => {
    setResult('0')
    setPreviousNumber('0')
    setFlagDecimalPoint(false)
  }
  const suma = () => {
    setFlagDecimalPoint(false)
    setPreviousNumber(result)
    setResult('0')
    setOperator('+')
  }
  const resta = () => {
    setFlagDecimalPoint(false)
    setPreviousNumber(result)
    setResult('0')
    setOperator('-')
  }
  const multip = () => {
    setFlagDecimalPoint(false)
    setPreviousNumber(result)
    setResult('0')
    setOperator('*')
  }
  const div = () => {
    setFlagDecimalPoint(false)
    setPreviousNumber(result)
    setResult('0')
    setOperator('/')
  }

  const evaluate = () => {
    if (operator === '+') {
      const resultadoOperacion = (Number(previousNumber) + Number(result)).toString()

      if (resultadoOperacion.length < 9) {
        setResult(resultadoOperacion.toString())
        setPreviousNumber('0')
      } else {
        setResult('ERROR')
      }
    } else if (operator === '-') {
      const resultadoOperacion = (Number(previousNumber) - Number(result)).toString().substring(0, 9)

      if (resultadoOperacion < 0) {
        setResult('ERROR')
      } else {
        setResult(resultadoOperacion)
        setPreviousNumber('0')
      }
    } if (operator === '*') {
      const resultadoOperacion = (Number(previousNumber) * Number(result)).toString()

      if (resultadoOperacion.length < 9) {
        setResult(Number(previousNumber) * Number(result))
        setPreviousNumber('0')
      } else {
        setResult('ERROR')
      }
    } if (operator === '/') {
      const resultadoOperacion = (Number(previousNumber) / Number(result)).toString().substring(0, 9)

      if (resultadoOperacion !== 'Infinity') {
        setResult(resultadoOperacion)
        setPreviousNumber('0')
      } else {
        setResult('ERROR')
      }
    }
  }

  return (
    <div style={screenStyle}>
      <Display textValue={result} testId="display-screen" />
      <Button inputValue="AC" classValue="darkGray clearDisplay" handleClick={clearResult} />
      <Button inputValue="±" classValue="darkGray" handleClick={multiplyByNegativeOne} />
      <Button inputValue="%" classValue="darkGray" handleClick={convertToPercentage} />
      <Button inputValue="÷" classValue="orange" handleClick={div} />
      <Button inputValue="7" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="8" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="9" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="x" classValue="orange" handleClick={multip} />
      <Button inputValue="4" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="5" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="6" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="-" classValue="orange" handleClick={resta} />
      <Button inputValue="1" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="2" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="3" classValue="lightGray" handleClick={addToResult} />
      <Button inputValue="+" classValue="orange" handleClick={suma} />
      <Button inputValue="0" classValue="lightGray zeroBtn" handleClick={addToResult} />
      <Button inputValue="." classValue="lightGray" handleClick={addDecimal} />
      <Button inputValue="=" classValue="orange" handleClick={evaluate} />
    </div>
  )
}

export default App
