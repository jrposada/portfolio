import Icon from '@iconify/react'
import loadingIconSrc from '@iconify-icons/mdi/loading'
import dropdownIconSrc from '@iconify-icons/mdi/chevron-down'
import React, {
  ChangeEvent,
  ChangeEventHandler,
  PropsWithChildren,
  useCallback,
  useRef,
} from 'react'

import Dropdown from './dropdown'

import './select.scss'

interface SelectProps<TData> {
  name?: string
  onChange?: (value: TData) => void
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  loadingIcon?: React.ReactNode
  clearIcon?: React.ReactNode
  className?: string
}
function Select<TData = object>({
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
}: PropsWithChildren<SelectProps<TData>>) {
  const selectRef = useRef<HTMLSelectElement>(null)

  let cssClass = `react-ui-select`
  if (loading) cssClass += ' react-ui-select--loading'
  if (disabled) cssClass += ' react-ui-select--disabled'
  if (className) cssClass += ` ${className}`

  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (selectChangeEvent: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(selectChangeEvent.target.dataset as unknown as TData)
    },
    [onChange]
  )

  return (
    // <Dropdown panel={<></>}>
    <div className={cssClass}>
      <select
        // hidden
        ref={selectRef}
        name={name}
        onChange={handleChange}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </select>
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
    // </Dropdown>
  )
}

interface SelectOptions {
  value: any
}
Select.Option = function ({
  value,
  children,
  ...restProps
}: PropsWithChildren<SelectOptions>) {
  return (
    <option value={value} {...restProps}>
      {children}
    </option>
  )
}
export default Select
