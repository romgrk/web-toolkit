/*
 * LevelBar.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx';
import { range } from 'rambda'

const LevelBar = React.forwardRef(function LevelBar(props, ref) {
  const {
    className,
    value,
    segments = 5,
    vertical,
    level: levelValue,
    ...rest
  } = props;

  const percentage = value / (segments - 1)
  const level =
    (percentage) < 0.1 ? 'danger' :
    (percentage) < 0.5 ? 'warning' :
    (percentage) < 0.9 ? 'info' :
                         'success'

  return (
    <span
      className={cx('LevelBar', className, { vertical })}
      {...rest}
    >
      <span className='LevelBar__content'>
        {range(0, segments).map(n =>
          <span
            className={cx(
              'LevelBar__rail',
              value < n ? 'empty' : levelValue || level,
            )}
          />
        )}
      </span>
    </span>
  )
})

LevelBar.propTypes = {
  className: prop.string,
  vertical: prop.bool,
  /** The value of the var. */
  value: prop.number,
  /** The number of levels. */
  segments: prop.number,
}

export default LevelBar


// Helpers

function valueToPercent(value, min, max) {
  return ((value - min) * 100) / (max - min);
}
