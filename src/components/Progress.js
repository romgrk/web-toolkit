/*
 * Progress.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx';

const axisProps = {
  horizontal:           (percent) => ({ width:  `${percent}%` }),
  'horizontal-reverse': (percent) => ({ width:  `${percent}%` }),
  vertical:             (percent) => ({ height: `${percent}%` }),
};

const Progress = React.forwardRef(function Progress(props, ref) {
  const {
    className,
    vertical = false,
    track = 'normal',
    label = false,
    value,
    ...rest
  } = props;
  const orientation = vertical ? 'vertical' : 'horizontal'

  const isRtl = false;

  let axis = orientation
  if (isRtl && vertical == false) {
    axis += '-reverse';
  }

  const trackSize = valueToPercent(value, 0, 100);
  const trackStyle = {
    display: trackSize === 0 ? 'none' : undefined,
    ...axisProps[axis](trackSize),
  }

  return (
    <span
      className={cx(
        'Progress',
        {
          vertical,
          indeterminate: typeof value !== 'number',
          labeled: label,
        },
        className,
      )}
      {...rest}
    >
      {
        label &&
          <span className='Progress__label text-muted'>
            {typeof label === 'boolean' ? `${value} %` : label}
          </span>
      }
      <span className='Progress__content'>
        <span className='Progress__rail' />
        <span className='Progress__track' style={trackStyle} />
      </span>
    </span>
  )
})

Progress.propTypes = {
  /** The label of the slider. */
  'aria-label': prop.string,
  /** The id of the element containing a label for the slider. */
  'aria-labelledby': prop.string,
  /** A string value that provides a user-friendly name for the current value of the slider. */
  'aria-valuetext': prop.string,
  className: prop.string,
  /** The slider orientation. */
  orientation: prop.oneOf(['horizontal', 'vertical']),
  /** The value of the slider. For indeterminate pass undefined. */
  value: prop.number,
  /** If a label should be shown */
  label: prop.oneOf([prop.bool, prop.node]),
}

export default Progress


// Helpers

function valueToPercent(value, min, max) {
  return ((value - min) * 100) / (max - min);
}
