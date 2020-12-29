/*
 * InfoBar.js
 */

import { useState } from 'react'
import cx from 'classname'

import Box from './Box'
import Button from './Button'

function InfoBar({
  className,
  children,
  closable,
  activatable: activatableValue,
  info,
  success,
  warning,
  danger,
  close: closeValue,
  onClose,
  ...rest
}) {
  const [closeState, setClose] = useState(false)
  const close = closeValue ?? closeState
  const activatable = activatableValue ?? Boolean(rest.onClick)

  return (
    <div
      className={
        cx(
          'InfoBar',
          className,
          { activatable, info, success, warning, danger, close }
        )
      }
      role={activatable ? 'button' : undefined}
      onTransitionEnd={onClose}
      {...rest}
    >
      <Box horizontal align fill>
        <span className='Box__fill'>
          {children}
        </span>
        {closable &&
          <Button icon='window-close' onClick={() => setClose(true)}/>
        }
      </Box>
    </div>
  )
}

export default InfoBar
