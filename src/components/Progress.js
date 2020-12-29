/*
 * Progress.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx';
import { identity } from 'rambda'

const axisProps = {
  horizontal:           (percent) => ({ width:  `${percent}%` }),
  'horizontal-reverse': (percent) => ({ width:  `${percent}%` }),
  vertical:             (percent) => ({ height: `${percent}%` }),
};

const Progress = React.forwardRef(function Progress(props, ref) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    'aria-valuetext': ariaValuetext,
    className,
    vertical = false,
    track = 'normal',
    label = false,
    value,
    ...other
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
      {...other}
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
  value: prop.oneOf([prop.bool, prop.node]),
}

export default Progress


// Helpers

function valueToPercent(value, min, max) {
  return ((value - min) * 100) / (max - min);
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}
