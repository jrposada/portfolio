import { render } from '@testing-library/react'

import Button from 'react-ui/button.mock'

describe('Given a Header component', () => {
  describe('when rendered', () => {
    const onClick1 = jest.fn()
    const onClick2 = jest.fn()
    beforeEach(() => {
      render(
        <>
          <Button disabled onClick={onClick1} />
          <Button onClick={onClick2} />
        </>
      )
    })
    it('SearchBar is rendered with no props', () => {
      expect(Button.mock.props).toHaveBeenCalledTimes(2)
      expect(Button.mock.props).toHaveBeenNthCalledWith(
        1,
        {
          disabled: true,
          onClick: onClick1,
        },
        undefined
      )
      expect(Button.mock.props).toHaveBeenNthCalledWith(
        2,
        {
          onClick: onClick2,
        },
        undefined
      )
    })

    it('and onClick1 is fired then onClick is called', () => {
      Button.mock.events[0].onClick()

      expect(onClick1).toHaveBeenCalledTimes(1)
      expect(onClick1).toHaveBeenCalledWith()

      expect(onClick2).not.toHaveBeenCalledTimes(1)
      expect(onClick2).not.toHaveBeenCalledWith()
    })
    it('and onClick2 is fired then onClick is called', () => {
      Button.mock.events[1].onClick()

      expect(onClick1).not.toHaveBeenCalledTimes(1)
      expect(onClick1).not.toHaveBeenCalledWith()

      expect(onClick2).toHaveBeenCalledTimes(1)
      expect(onClick2).toHaveBeenCalledWith()
    })
  })
})
