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
  let cssClass = `titan-button`
  if (primary) cssClass += ' titan-button--primary'
  if (warn) cssClass += ' titan-button--warn'
  if (raised) cssClass += ' titan-button--raised'
  if (bordered) cssClass += ' titan-button--bordered'
  if (dashed) cssClass += ' titan-button--dashed'
  if (icon) cssClass += ' titan-button--icon'

  return (
    <button className={cssClass} {...restProps}>
      {children}
    </button>
  )
}

export default Button
