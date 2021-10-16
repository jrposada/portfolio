import { PropsWithChildren, useEffect } from 'react'
import { useSelect } from './select-context'

interface OptionProps {
  value: string
}
function Option({
  value,
  children,
  ...restProps
}: PropsWithChildren<OptionProps>) {
  const select = useSelect()

  useEffect(() => {
    select.options.push({ value, node: children })
  }, [children, select.options, value])

  return children
}

export default Option
