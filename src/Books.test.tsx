import React from 'react'
import { MockedProvider } from '@apollo/client/testing'
import { render } from '@testing-library/react'
import { Books } from './components/Books/Books'
import { booksQueryMock } from './apollo/mocks'

test('renders learn react link', () => {
    const { getByText } = render(
      <MockedProvider mocks={[booksQueryMock]}>
        <Books />
      </MockedProvider>
    )
    const linkElement = getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})
