/* eslint-disable no-undef */
import { fireEvent } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'
//import { render, fireEvent, getByTestId } from 'react-testing-library'
import App from './App'

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('Renders without crashing', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
})

it('Funcionamiento al seleccionar 1, 2, 3 y *', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

  expect(labels[0].textContent).toBe('ANSWER: ')

  function click(element) {
    fireEvent(
      element,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  click(btns[4])
  expect(labels[1].textContent).toBe('VALUE: 1')
  click(btns[5])
  expect(labels[1].textContent).toBe('VALUE: 12')
  click(btns[6])
  expect(labels[1].textContent).toBe('VALUE: 123')
  click(btns[7])
  expect(labels[1].textContent).toBe('VALUE: ')
})

it('Funcionamiento al seleccionar 4, 5, 6 y -', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

  expect(labels[0].textContent).toBe('ANSWER: ')

  function click(element) {
    fireEvent(
      element,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  click(btns[8])
  expect(labels[1].textContent).toBe('VALUE: 4')
  click(btns[9])
  expect(labels[1].textContent).toBe('VALUE: 45')
  click(btns[10])
  expect(labels[1].textContent).toBe('VALUE: 456')
  click(btns[11])
  expect(labels[1].textContent).toBe('VALUE: ')
})

it('Funcionamiento al seleccionar 7, 8, 9 y +', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

  expect(labels[0].textContent).toBe('ANSWER: ')

  function click(element) {
    fireEvent(
      element,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  click(btns[12])
  expect(labels[1].textContent).toBe('VALUE: 7')
  click(btns[13])
  expect(labels[1].textContent).toBe('VALUE: 78')
  click(btns[14])
  expect(labels[1].textContent).toBe('VALUE: 789')
  click(btns[15])
  expect(labels[1].textContent).toBe('VALUE: ')
})
