import { NavLink } from 'react-router-dom'

function ExternalNavLink({ to, children }) {
  return (
    <NavLink to={{ pathname: to }} target="_blank">
      {children}
    </NavLink>
  )
}

export default ExternalNavLink
