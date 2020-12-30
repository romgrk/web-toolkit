/*
 * List.js
 */

import cx from 'clsx'
import prop from 'prop-types'

function List({
  children,
  className,
  separators,
  horizontal,
  border,
  fill,
  rich,
  sidebar,
  ...rest
}) {
  return (
    <ul
      className={
        cx(
          'List',
          className,
          {
            'fill': fill === true,
            'fill-width': fill === 'width',
            'fill-height': fill === 'height',
            'border-none': border === false,
          },
          {
            separators,
            horizontal,
            rich,
            sidebar,
          }
        )
      }
      {...rest}
    >
      {children}
    </ul>
  )
}

List.propTypes = {
  className: prop.string,
  separators: prop.bool,
  horizontal: prop.bool,
  rich: prop.bool,
}

List.defaultProps = {
  separators: true,
}

function Item({
  children,
  className,
  selected,
  activatable,
  ...rest
}) {
  const hasClickHandler = rest.onClick || rest.onDblClick
  return (
    <li
      className={
        cx(
          'List__item',
          className,
          {
            activatable: activatable ?? hasClickHandler,
            selected,
          }
        )
      }
      role={hasClickHandler ? 'button' : undefined}
      {...rest}
    >
      {children}
    </li>
  )
}

Item.propTypes = {
  className: prop.string,
  selected: prop.bool,
  activatable: prop.bool,
}

List.Item = Item

export default List
