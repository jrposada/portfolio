import { render } from '@testing-library/react'
import Select from './select'

describe('Given a Select component', () => {
  it('when render then it does not throw errors', () => {
    expect(() => render(<Select />)).not.toThrow()
  })
})
