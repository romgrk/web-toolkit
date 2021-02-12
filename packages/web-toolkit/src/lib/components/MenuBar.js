/*
 * MenuBar.js
 */

import React, { useState } from 'react'
import cx from 'classname'

import Menu from './Menu'
import Label from './Label'
import Popover from './Popover'

function MenuBar({
  children,
  className,
  ...rest
}) {
  return (
    <div className={cx('MenuBar', className)} {...rest}>
      {children}
    </div>
  )
}

function Button({
  label,
  children,
  className,
  ...rest
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover
      method='click-controlled'
      className='MenuBar__popover'
      placement='bottom-start'
      arrow={false}
      delay={50}
      content={children || <EmptyMenu />}
      open={open}
      onClose={() => setOpen(false)}
    >
      <button
        className={cx('MenuBar__button', className, { active: open }) + (open ? ' active' : '')}
        onClick={() => setOpen(!open)}
        {...rest}
      >
        {label}
      </button>
    </Popover>
  )
}

MenuBar.Button = Button

export default MenuBar


// Helpers

function EmptyMenu() {
  return (
    <Menu>
      <Menu.Item>
        <Label muted italic noSelect>
          (Empty menu)
        </Label>
      </Menu.Item>
    </Menu>
  )
}

