import { createContext, ReactNode, useContext } from 'react'

interface OptionData {
  node: ReactNode
  value: string
}
interface SelectData {
  options: OptionData[]
}
const SelectContext = createContext<SelectData | undefined>(undefined)

function useSelect() {
  const context = useContext(SelectContext)
  if (!context)
    throw new Error(
      'Hook useSelect has to be called inside a Select component.'
    )

  return context
}

export default SelectContext
export { useSelect }
export type { SelectData, OptionData }
