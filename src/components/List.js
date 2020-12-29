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
  rich,
  ...rest
}) {
  return (
    <ul
      className={
        cx(
          'List',
          className,
          {
            separators,
            horizontal,
            rich,
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
