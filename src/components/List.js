/*
 * List.js
 */

import cx from 'clsx'
import prop from 'prop-types'

import Icon from './Icon'

function List({
  children,
  className,
  separators,
  horizontal,
  border = true,
  rounded,
  fill,
  rich,
  sidebar,
  ...rest
}) {
  return (
    <div
      className={
        cx(
          'List',
          className,
          borderClass(border),
          {
            'fill': fill === true,
            'fill-width': fill === 'width',
            'fill-height': fill === 'height',
          },
          {
            separators,
            horizontal,
            rounded,
            rich,
            sidebar: sidebar,
            'stack-sidebar': sidebar === 'stack',
            'navigation-sidebar': sidebar === 'navigation',
          }
        )
      }
      {...rest}
    >
      {children}
    </div>
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
  as,
  children,
  className,
  selected,
  expandable,
  activatable,
  needsAttention,
  ...rest
}) {
  const Element = as ? as : activatable ? 'button' : 'div'
  return (
    <Element
      className={
        cx(
          'List__item',
          className,
          {
            activatable: activatable ?? activatable,
            expandable,
            selected,
            'needs-attention': needsAttention,
          }
        )
      }
      role={activatable ? 'button' : undefined}
      tabIndex={activatable ? '0' : undefined}
      {...rest}
    >
      {children}
      {expandable &&
        <Icon name='go-next' className='arrow' colored={false} />
      }
    </Element>
  )
}

Item.propTypes = {
  className: prop.string,
  selected: prop.bool,
  activatable: prop.bool,
}

List.Item = Item

export default List

// Helpers

function borderClass(border) {
  if (border === false)
    return 'border-none'
  if (border === true)
    return 'border'
  if (typeof border === 'string')
    return `border-${border}`
  if (Array.isArray(border))
    return border.map(borderClass).join(' ')
  return undefined
}

