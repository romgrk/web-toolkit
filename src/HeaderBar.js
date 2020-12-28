/*
 * HeaderBar.js
 */


import cx from 'classname'

import Box from './Box'

function HeaderBar({
  className,
  children,
  titlebar,
  ...rest
}) {
  return (
    <div
      className={
        cx(
          'HeaderBar',
          className,
          { titlebar }
        )
      }
      {...rest}
    >
      <Box horizontal align fill>
        {children}
      </Box>
    </div>
  )
}

function Title({ children, subtitle, className, fill }) {
  return (
    <Box
      vertical
      fill
      align
      justify
      className={cx('HeaderBar__title', className, { 'Box__fill': fill })}
    >
      <div className='title'>
        {children}
      </div>
      {subtitle &&
        <div className='subtitle'>
          {subtitle}
        </div>
      }
    </Box>
  )
}

function Controls({ children }) {
  return (
    <Box horizontal align className='HeaderBar__controls control-buttons'>
      {children}
    </Box>
  )
}

HeaderBar.Title = Title
HeaderBar.Controls = Controls

export default HeaderBar
