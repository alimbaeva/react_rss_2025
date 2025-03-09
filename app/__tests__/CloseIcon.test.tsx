import { render, screen } from '@testing-library/react'
import CloseIcon from '../components/icons/CloseIcon'

test('renders CloseIcon with default props', () => {
  render(<CloseIcon fill="black" />)

  const icon = screen.getByTestId('closeIcon')
  expect(icon).toBeInTheDocument()
  expect(icon).toHaveAttribute('fill', 'black')
  expect(icon).toHaveAttribute('height', '25px')
})

test('renders CloseIcon with custom height', () => {
  render(<CloseIcon fill="red" height="30px" />)

  const icon = screen.getByTestId('closeIcon')
  expect(icon).toHaveAttribute('height', '30px')
})

test('renders CloseIcon with custom fill', () => {
  render(<CloseIcon fill="blue" height="25px" />)

  const icon = screen.getByTestId('closeIcon')
  expect(icon).toHaveAttribute('fill', 'blue')
})
