import { PropsWithChildren } from 'react'

interface ExternalNavLinkProps {
  to: string
}

function ExternalNavLink({
  to,
  children,
}: PropsWithChildren<ExternalNavLinkProps>) {
  return <a href={to}>{children}</a>
}

export default ExternalNavLink
export type { ExternalNavLinkProps }
