/*
 * LevelBar.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx';
import { range } from 'rambda'

const propTypes = {
  className: prop.string,
  vertical: prop.bool,
  /** The number active of segments */
  value: prop.number,
  /** The number of segments */
  segments: prop.number,
  /** The coloration of the active segments */
  level: prop.oneOf(['empty', 'danger', 'warning', 'info' , 'success']),
}

const defaultProps = {
  value: 0,
  segments: 5,
}

function LevelBar(props, ref) {
  const {
    className,
    value,
    segments,
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
      ref={ref}
    >
      <span className='LevelBar__content'>
        {range(0, segments).map(n =>
          <span
            key={n}
            className={cx(
              'LevelBar__rail',
              value < n ? 'empty' : levelValue || level,
            )}
          />
        )}
      </span>
    </span>
  )
}

const Export = React.forwardRef(LevelBar)
Export.propTypes = propTypes
Export.defaultProps = defaultProps

export default Export
