/*
 * List.js
 */

import React from 'react'
import cx from 'clsx'
import prop from 'prop-types'

import Icon from './Icon'
import Separator from './Separator'

function List({
  children,
  className,
  size,
  separators,
  horizontal,
  border = true,
  rounded,
  fill,
  rich,
  sidebar,
  sublist,
  ...rest
}) {
  return (
    <div
      className={
        cx(
          'List',
          className,
          size,
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
            sublist,
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
  size: prop.oneOf(['medium', 'large']),
  separators: prop.bool,
  horizontal: prop.bool,
  rich: prop.bool,
}

List.defaultProps = {
  separators: true,
  size: 'medium',
}

function Item({
  as,
  children,
  className,
  title,
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
            title,
            activatable,
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
  title: prop.bool,
  selected: prop.bool,
  activatable: prop.bool,
  expandable: prop.bool,
}

List.Item = Item
List.Separator = Separator

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

