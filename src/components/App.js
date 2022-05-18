import React, { useState } from 'react'
import infixToPostfix from 'infix-to-postfix'
import postfixCalculator from 'postfix-calculator'
import '../styles/Button.css'
import '../styles/Answer.css'
import '../styles/App.css'

export default function App() {
  const [answer, setAnswer] = useState('')
  const [expression, setExpression] = useState('')
  const [actual, setActual] = useState('')
  const [toggleSign, setToggleSign] = useState(false)

  function isIn(value) {
    if (
      value.includes(' + ') ||
      value.includes(' - ') ||
      value.includes(' * ') ||
      value.includes(' / ')
    )
      return true
    return false
  }

  function verifyAnswer(value) {
    if (answer && !isIn(expression.toString())) {
      setAnswer('')
      setExpression('')
    }
    // eslint-disable-next-line yoda
    if (actual.length < 9) {
      setActual(actual + value)
    }
  }

  function addDot() {
    if (actual) {
      verifyAnswer('.')
    } else {
      verifyAnswer('0.')
    }
  }

  function del() {
    if (actual) {
      setActual(actual.substring(0, actual.length - 1))
    }

    if (actual.length === 2 && toggleSign) {
      setActual('')
      setToggleSign(!toggleSign)
    }
  }

  function clear() {
    setActual('')
    setExpression('')
    setAnswer('')
  }

  function sign() {
    if (!toggleSign && actual) {
      setActual('-' + actual)
      setToggleSign(!toggleSign)
    } else if (toggleSign && actual) {
      setActual(actual.substring(1))
      setToggleSign(!toggleSign)
    }
  }

  function equals() {
    if (expression && actual) {
      let response = postfixCalculator(infixToPostfix(expression + actual))
      clear()
      if (response > 999999999 || response < -999999999) {
        setAnswer('ERROR')
        setExpression('')
      } else {
        if (response.toString().length > 9) {
          response = response.toString().substring(0, 9)
        }
        setAnswer(response)
        setExpression(response)
      }
      setActual('')
    }
  }

  function addExpression(value) {
    if (actual) {
      setExpression(expression + actual + ' ' + value + ' ')
      setActual('')
    } else if (!actual && expression) {
      setExpression(expression + ' ' + value + ' ')
    }
  }

  return (
    <div className="main">
      <h1>ANSWER: {answer}</h1>
      <h1 id="value">VALUE: {actual}</h1>
      <div>
        <button onClick={() => clear()}>Clear</button>
        <button onClick={() => sign()}>+/-</button>
        <button onClick={() => addExpression('')}>_</button>
        <button onClick={() => addExpression('/')}>/</button>
      </div>
      <div>
        <button onClick={() => verifyAnswer('1')}>1</button>
        <button onClick={() => verifyAnswer('2')}>2</button>
        <button onClick={() => verifyAnswer('3')}>3</button>
        <button onClick={() => addExpression('*')}>x</button>
      </div>
      <div>
        <button onClick={() => verifyAnswer('4')}>4</button>
        <button onClick={() => verifyAnswer('5')}>5</button>
        <button onClick={() => verifyAnswer('6')}>6</button>
        <button onClick={() => addExpression('-')}>-</button>
      </div>
      <div>
        <button onClick={() => verifyAnswer('7')}>7</button>
        <button onClick={() => verifyAnswer('8')}>8</button>
        <button onClick={() => verifyAnswer('9')}>9</button>
        <button onClick={() => addExpression('+')}>+</button>
      </div>
      <div>
        <button onClick={() => verifyAnswer('0')}>0</button>
        <button onClick={() => addDot()}>.</button>
        <button onClick={() => del()}>{'<'}</button>
        <button onClick={() => equals()}>=</button>
      </div>
    </div>
  )
}
