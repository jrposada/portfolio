import { HTMLProps, PropsWithChildren } from 'react'

import './menu.scss'

interface MenuProps {
  compact?: boolean
  collapse?: boolean
}
function Menu({
  className,
  children,
  ...restProps
}: PropsWithChildren<MenuProps & HTMLProps<HTMLDivElement>>) {
  let cssClass = 'menu'
  if (className) cssClass = ` ${className}`

  return (
    <div {...restProps} className={cssClass}>
      {children}
    </div>
  )
}

export default Menu
