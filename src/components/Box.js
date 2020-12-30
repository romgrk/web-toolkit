/*
 * Box.js
 */

import cx from 'clsx'

function Box({
  children,
  className,
  inline,
  compact,
  fill,
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
        {
          inline,
          compact,
          vertical,
          horizontal,
          align,
          justify,
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
