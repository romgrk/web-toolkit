/*
 * Dropdown.js
 */


import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cx from 'classname'
import Button from './Button'
import Icon from './Icon'
import Input from './Input'

function Dropdown({
  className,
  vertical,
  disabled,
  input,
  options,
  value,
  ...rest
}) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({})
  const elementRef = useRef()

  const onToggle = () => {
    if (!open) {
      const rect = elementRef.current.getBoundingClientRect()
      setPosition({
        top: rect.top + rect.height + 2,
        left: rect.left,
        width: rect.width,
      })
    }
    else {}
    setOpen(!open)
  }

  return (
    <>
      <Input.Group className={cx('Dropdown', className, { open, input })} ref={elementRef}>
        {input &&
          <Input value={value} />
        }
        {open}
        <Button onClick={onToggle} active={open}>
          {!input &&
            <span className='Label'>
              {value}
            </span>
          }
          <Icon name='pan-down' className='arrow' />
        </Button>
      </Input.Group>
      {createPortal(
        <div className={cx('Downdown__menu popover', { open })} style={position}>
          <div className='contents'>
            <div className='list'>
              {options.map(o =>
                <div key={o} className='Row'>
                  {o}
                </div>
              )}
            </div>
          </div>
        </div>
      , document.body)}
    </>
  )
}

export default Dropdown
