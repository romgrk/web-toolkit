/*
 * Box.js
 */

import prop from 'prop-types'
import cx from 'clsx'

function Box({
  children,
  className,
  inline,
  compact,
  fill,
  border = false,
  horizontal,
  vertical,
  align,
  justify,
  space,
  padded,
  expandChildren,
  ...rest
}) {
  return (
    <div
      className={cx(
        'Box',
        className,
        space ? `space-${space}` : undefined,
        typeof fill === 'string' ? `fill-${fill}` : fill ? 'fill' : undefined,
        alignClass(align),
        justifyClass(justify),
        {
          inline,
          compact,
          vertical,
          horizontal,
          border,
          padded,
          'expand-children': expandChildren,
        }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  align: prop.oneOf([true, 'start', 'end']),
  justify: prop.oneOf([true, 'start', 'end']),
}

function Fill({
  children,
  className,
  expandChildren,
  ...rest
}) {
  return (
    <div
      className={
        cx(
          'Box__fill',
          {
            'expand-children': expandChildren
          }
        )
      }
      {...rest}
    >
      {children}
    </div>
  )
}

Box.Fill = Fill

export default Box


// Helpers

function alignClass(align) {
  if (align === true)
    return 'align'
  if (typeof align === 'string')
    return `align-${align}`
  return undefined
}

function justifyClass(justify) {
  if (justify === true)
    return 'justify'
  if (typeof justify === 'string')
    return `justify-${justify}`
  return undefined
}
