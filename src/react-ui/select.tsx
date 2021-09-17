import Icon from '@iconify/react'
import loadingIconSrc from '@iconify-icons/mdi/loading'
import dropdownIconSrc from '@iconify-icons/mdi/chevron-down'
import React, { PropsWithChildren, useRef } from 'react'

import './select.scss'

interface SelectProps {
  name: string
  loading?: boolean
  disabled?: boolean
  icon?: React.ReactNode
  loadingIcon?: React.ReactNode
  clearIcon?: React.ReactNode
  className?: string
}
function Select({
  name,
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

  let cssClass = `react-ui-select`
  if (loading) cssClass += ' react-ui-select--loading'
  if (disabled) cssClass += ' react-ui-select--disabled'
  if (className) cssClass += ` ${className}`

  return (
    <div className={cssClass}>
      <select ref={selectRef} name={name} disabled={disabled} {...restProps}>
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
