import Icon from '@iconify/react'
import { useCallback, useState } from 'react'
import { v4 } from 'uuid'

import './switch.scss'

function Switch({ id, onChange, checkedIcon, uncheckedIcon }) {
  const [inputId] = useState(id ?? v4())
  const [isChecked, setIsChecked] = useState(false)
  const handleChange = useCallback(
    (event) => {
      setIsChecked(event.target.checked)
      onChange(event.target.checked)
    },
    [onChange]
  )
  // TODO: Get it from dom
  const size = '16px'

  return (
    <div className="switch">
      <input id={inputId} hidden type="checkbox" onChange={handleChange} />
      <label
        htmlFor={inputId}
        className={`switch__visual${
          isChecked ? ' switch__visual--checked' : ''
        }`}
      >
        {checkedIcon && uncheckedIcon ? (
          <>
            <Icon widht={size} height={size} icon={checkedIcon} />
            <Icon widht={size} height={size} icon={uncheckedIcon} />
          </>
        ) : null}
      </label>
    </div>
  )
}

export default Switch
