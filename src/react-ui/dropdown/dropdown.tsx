import {
  createRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
  MouseEvent,
} from 'react'

import './dropdown.scss'

type DropdownTrigger = 'click' | 'hover'
type DropdownPosition = 'top' | 'left' | 'bottom' | 'right'

interface DropdownProps {
  panel: React.ReactNode
  trigger?: DropdownTrigger
  position?: DropdownPosition
}
function Dropdown({
  panel,
  trigger = 'click',
  position = 'bottom',
  children,
  ...restProps
}: PropsWithChildren<DropdownProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = createRef<HTMLDivElement>()
  const triggerRef = createRef<HTMLDivElement>()
  const panelRef = createRef<HTMLDivElement>()

  let panelCssClass = 'react-ui-dropdown__panel'
  if (isOpen) panelCssClass += ' react-ui-dropdown__panel--open'
  if (position) {
    switch (position) {
      case 'top':
        panelCssClass += ' react-ui-dropdown__panel--top'
        break
      case 'left':
        panelCssClass += ' react-ui-dropdown__panel--left'
        break
      case 'bottom':
        panelCssClass += ' react-ui-dropdown__panel--bottom'
        break
      case 'right':
        panelCssClass += ' react-ui-dropdown__panel--right'
        break
    }
  }

  const handleClick = useCallback((_: MouseEvent<HTMLDivElement>) => {
    setIsOpen(true)
  }, [])
  const onClick = trigger === 'click' ? handleClick : undefined

  const handleMouseEnter = useCallback((_: MouseEvent<HTMLDivElement>) => {
    setIsOpen(true)
  }, [])
  const onMouseEnter = trigger === 'hover' ? handleMouseEnter : undefined

  const handleMouseLeave = useCallback(
    (event: any) => {
      if (
        !dropdownRef.current?.contains(event.target) &&
        !panelRef.current?.contains(event.target) &&
        isOpen
      ) {
      }
      setIsOpen(false)
    },
    [dropdownRef, isOpen, panelRef]
  )
  const onMouseLeave = trigger === 'hover' ? handleMouseLeave : undefined

  // Make dropdown panel at least as big a as trigger element.
  useEffect(() => {
    if (panelRef.current) {
      const triggerWidth = triggerRef.current?.offsetWidth
      panelRef.current.style.minWidth = `${triggerWidth}px`
    }
  }, [panelRef, triggerRef])

  // Close panel on outside click
  useEffect(() => {
    function handleClick(event: any) {
      if (!dropdownRef.current?.contains(event.target) && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mouseup', handleClick)

    return () => document.removeEventListener('mouseup', handleClick)
  }, [dropdownRef, panelRef, isOpen])

  // useEffect(() => {
  //   function handleClick(event: any) {
  //     if (!dropdownRef.current?.contains(event.target) && isOpen) {
  //       setIsOpen(false)
  //     }
  //   }

  //   if (trigger === 'hover') document.addEventListener('mousemove', handleClick)

  //   return () => document.removeEventListener('mouseup', handleClick)
  // }, [dropdownRef, panelRef, isOpen, trigger])

  return (
    <div ref={dropdownRef} className="react-ui-dropdown">
      <div
        ref={triggerRef}
        className="react-ui-dropdown__trigger"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        <div ref={panelRef} className={panelCssClass}>
          {panel}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
