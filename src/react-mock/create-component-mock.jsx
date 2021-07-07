function createComponentMock() {
  const props = jest.fn()
  const events = []

  function ComponentMock({ children, ...restProps }) {
    props(restProps, children)

    const render = events.length
    events[render] = []
    Object.keys(restProps).forEach((key) => {
      if (typeof restProps[key] === 'function') {
        events[render][key] = restProps[key]
      }
    })

    return <div {...restProps}>{children}</div>
  }
  ComponentMock.mock = {
    props,
    events,
  }

  return ComponentMock
}

export default createComponentMock
