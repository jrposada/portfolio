import Icon from '@iconify/react'
import loadingIconSrc from '@iconify/icons-mdi/loading'
import dropdownIconSrc from '@iconify/icons-mdi/chevron-down'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import Dropdown from '../dropdown/dropdown'
import SelectContext, { SelectData } from './select-context'

import './select.scss'

interface SelectProps {
  name?: string
  onChange?: (values: string[]) => void
  multiple?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  loadingIcon?: React.ReactNode
  clearIcon?: React.ReactNode
  className?: string
}
function Select({
  name,
  onChange,
  loading,
  disabled,
  icon,
  loadingIcon,
  clearIcon,
  className,
  children,
  ...restProps
}: PropsWithChildren<SelectProps>) {
  const selectRef = useRef<HTMLSelectElement>(null)
  const [value, setValue] = useState<string[]>([])

  let cssClass = `react-ui-select`
  if (loading) cssClass += ' react-ui-select--loading'
  if (disabled) cssClass += ' react-ui-select--disabled'
  if (className) cssClass += ` ${className}`

  const selectData: SelectData = useMemo(
    () => ({
      options: [],
    }),
    []
  )

  function extractValueFromSelect(options: HTMLOptionsCollection) {
    const result: string[] = []
    for (const option of options) {
      if (option.selected) result.push(option.value)
    }
    return result
  }

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (selectChangeEvent: ChangeEvent<HTMLSelectElement>) => {
      const newValues = extractValueFromSelect(selectChangeEvent.target.options)
      onChange?.(newValues)
      setValue(newValues)
    },
    [onChange]
  )

  useEffect(() => {
    if (selectRef.current) {
      setValue(extractValueFromSelect(selectRef.current.options))
    }
  }, [])

  return (
    <SelectContext.Provider value={selectData}>
      <Dropdown panel={children}>
        <div className={cssClass}>
          <select
            hidden
            ref={selectRef}
            name={name}
            onChange={handleChange}
            disabled={disabled}
            {...restProps}
          >
            {selectData.options.map((opt) => (
              <option value={opt.value}>{opt.node}</option>
            ))}
          </select>
          <div className="react-ui-select__value">{value}</div>
          <div className="react-ui-select__icon">
            {loading ? (
              loadingIcon ? (
                loadingIcon
              ) : (
                <Icon icon={loadingIconSrc} />
              )
            ) : icon ? (
              icon
            ) : (
              <Icon icon={dropdownIconSrc} />
            )}
          </div>
        </div>
      </Dropdown>
    </SelectContext.Provider>
  )
}

export default Select
