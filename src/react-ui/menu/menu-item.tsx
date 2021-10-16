import { HTMLProps, PropsWithChildren } from 'react'

import './menu-item.scss'

function MenuItem({
  className,
  children,
  ...restProps
}: PropsWithChildren<HTMLProps<HTMLDivElement>>) {
  let cssClass = 'menu-item'
  if (className) cssClass = ` ${className}`

  return (
    <div {...restProps} className={cssClass}>
      {children}
    </div>
  )
}

export default MenuItem
