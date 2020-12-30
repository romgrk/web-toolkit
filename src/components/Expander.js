/*
 * Expander.js
 */


import { useState, useRef } from 'react'
import cx from 'clsx'
import prop from 'prop-types'

import Icon from './Icon'
import Label from './Label'

function Expander({
  children,
  className,
  open: openProp,
  defaultOpen,
  label,
  transition,
  size,
  onChange,
  ...rest
}) {
  const [openState, setOpenState] = useState(defaultOpen)
  const open = openProp ?? openState
  const setOpen = openProp !== undefined ? onChange : setOpenState

  const contentRef = useRef()

  const property = 
    transition === 'vertical'   ? 'height' :
    transition === 'horizontal' ? 'width' : undefined

  const contentStyle = size === undefined ? undefined : { [property]: size }
  const containerStyle = getContainerStyle(open, property, size, contentRef)

  return (
    <div className={cx('Expander', className, transition, { open })} {...rest}>
      {label &&
        <button className='Expander__button' onClick={() => setOpen(!open)}>
          <Label>{label}</Label>
          <Icon name='pan-start' className='arrow' />
        </button>
      }
      <div className='Expander__container' style={containerStyle}>
        <div className='Expander__content' style={contentStyle} ref={contentRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

function getContainerStyle(open, property, size, ref) {
  if (!open)
    return undefined
  let value = size || 100
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect()
    value = rect[property]
  }
  return { [property]: value }
}

Expander.propTypes = {
  children: prop.node,
  className: prop.string,
  open: prop.bool,
  defaultOpen: prop.bool,
  label: prop.node,
  transition: prop.oneOf(['horizontal', 'vertical']),
  size: prop.number,
  onChange: prop.func,
}

Expander.defaultProps = {
  transition: 'vertical',
}

export default Expander
