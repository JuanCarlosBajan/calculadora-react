/* eslint-disable no-undef */
import { fireEvent } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
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

test('Renders without crashing', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
})

test('Funcionamiento al seleccionar 1, 2, 3 y *', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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

test('Funcionamiento al seleccionar 4, 5, 6 y -', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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

test('Funcionamiento al seleccionar 7, 8, 9 y +', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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

test('Renders correctly with snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Funcionamiento de toggle sign +/-', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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
  click(btns[1])
  expect(labels[1].textContent).toBe('VALUE: -7')
  click(btns[1])
  expect(labels[1].textContent).toBe('VALUE: 7')
})

test('Funcionamiento = (respuesta correcta)', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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
  click(btns[11])
  expect(labels[1].textContent).toBe('VALUE: ')
  click(btns[12])
  expect(labels[1].textContent).toBe('VALUE: 7')
  click(btns[13])
  expect(labels[1].textContent).toBe('VALUE: 78')
  click(btns[19])
  expect(labels[0].textContent).toBe('ANSWER: 711')
})

test('Funcionamiento Clear', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

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
  click(btns[11])
  expect(labels[1].textContent).toBe('VALUE: ')
  click(btns[12])
  expect(labels[1].textContent).toBe('VALUE: 7')
  click(btns[13])
  expect(labels[1].textContent).toBe('VALUE: 78')
  click(btns[19])
  expect(labels[0].textContent).toBe('ANSWER: 711')
  click(btns[12])
  expect(labels[1].textContent).toBe('VALUE: 7')
  click(btns[0])
  expect(labels[0].textContent).toBe('ANSWER: ')
  expect(labels[1].textContent).toBe('VALUE: ')
})

test('Verify if calculation generates ERROR', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />)
  })
  const labels = container.querySelectorAll('h1')
  const btns = container.querySelectorAll('button')

  function click(element) {
    fireEvent(
      element,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
  }
  click(btns[14])
  click(btns[14])
  click(btns[14])
  click(btns[14])
  click(btns[14])
  click(btns[14])
  click(btns[14])
  click(btns[7])
  click(btns[4])
  click(btns[16])
  click(btns[16])
  click(btns[16])
  click(btns[16])
  click(btns[19])
  expect(labels[0].textContent).toBe('ANSWER: ERROR')
})
