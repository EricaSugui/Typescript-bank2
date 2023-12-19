import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import {  render, screen } from '@testing-library/react'

describe('button', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const defaultProps = {
        title: 'Button Title',
        onClick: mockAlert,
    }
    render(<Button {...defaultProps} />)

    it('Deve exibir um alert com boas vindas', () => {
        const button = screen.getByText(defaultProps.title)
        userEvent.click(button)
        expect(mockAlert).toHaveBeenCalled()
    })
})