import './button.scss'

function Button({
  primary,
  warn,
  raised,
  bordered,
  dashed,
  className,
  children,
  icon,
  ...restProps
}) {
  let cssClass = `react-ui-button`
  if (primary) cssClass += ' react-ui-button--primary'
  if (warn) cssClass += ' react-ui-button--warn'
  if (raised) cssClass += ' react-ui-button--raised'
  if (bordered) cssClass += ' react-ui-button--bordered'
  if (dashed) cssClass += ' react-ui-button--dashed'
  if (icon) cssClass += ' react-ui-button--icon'
  if (className) cssClass += ` ${className}`

  return (
    <button className={cssClass} {...restProps}>
      {children}
    </button>
  )
}

export default Button
