import cx from 'clsx'
import { unpick } from '../utils/props'

const ownProps = new Set([
  'className',
  'children',
  'inline',
  'compact',
  'fill',
  'border',
  'horizontal',
  'vertical',
  'align',
  'justify',
  'space',
  'padded',
  'expandChidren',
])

function Box(props) {
  const rest = unpick(ownProps, props)
  return (
    <div
      className={cx(
        'Box',
        props.className,
        props.space ? `space-${props.space}` : undefined,
        typeof props.fill === 'string' ? `props.fill-${props.fill}` : props.fill ? 'props.fill' : undefined,
        alignClass(props.align),
        justifyClass(props.justify),
        {
          inline: props.inline,
          compact: props.compact,
          vertical: props.vertical,
          horizontal: props.horizontal,
          border: props.border,
          padded: props.padded,
          'expand-children': props.expandChildren,
        }
      )}
      {...rest}
    >
      {props.children}
    </div>
  )
}

// Box.propTypes = {
//   align: prop.oneOf([true, 'start', 'end']),
//   justify: prop.oneOf([true, 'start', 'end']),
// }

const fillOwnProps = new Set([
  'children',
  'className',
  'expandChildren',
])

function Fill(props) {
  const rest = unpick(fillOwnProps, props)
  return (
    <div
      className={
        cx(
          'Box__fill',
          props.className,
          {
            'expand-children': props.expandChildren
          }
        )
      }
      {...rest}
    >
      {props.children}
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
