import { createRef, useEffect, useState } from 'react';

import './dropdown.scss';

function Dropdown({ panel, trigger, position, children, ...restProps }) {
  // TODO: Implement trigger
  // TODO: Implement position
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = createRef();
  const triggerRef = createRef();
  const panelRef = createRef();

  let panelCssClass = 'titan-dropdown__panel';

  useEffect(() => {
    function onClick() {
      panelRef.current.style.display = isOpen ? 'none' : 'block';
      setIsOpen(!isOpen);
    }

    const triggerWidth = triggerRef.current.offsetWidth;
    panelRef.current.style.minWidth = `${triggerWidth}px`;

    triggerRef.current.onclick = () => onClick();
  }, [isOpen, triggerRef, panelRef]);

  useEffect(() => {
    function handleClick(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isOpen
      ) {
        panelRef.current.style.display = 'none';
        setIsOpen(false);
      }
    }

    document.addEventListener('mouseup', handleClick);

    return () => document.removeEventListener('mouseup', handleClick);
  }, [dropdownRef, panelRef, isOpen]);

  return (
    <div ref={dropdownRef} className="titan-dropdown">
      <div ref={triggerRef} className="titan-dropdown__trigger">
        {children}
      </div>
      <div ref={panelRef} className={panelCssClass}>
        {panel}
      </div>
    </div>
  );
}

export default Dropdown;
