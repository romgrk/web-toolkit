/*
 * Heading.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx'
import { onlyText } from 'react-children-utilities'

const propTypes = {
  as: prop.string,
  className: prop.string,
  weight: prop.oneOf([100, 300, 400, 700, 900]),
  anchor: prop.bool,
}

const defaultProps = {
  as: 'h1',
  anchor: true,
}

function Heading({
  as,
  children,
  className,
  weight,
  anchor,
  ...rest
}) {
  const Component = as
  const id = anchor ? toID(onlyText(children)) : undefined
  return (
    <Component
      id={id}
      className={cx(
        'Heading',
        className,
        weight ? `weight-${weight}` : undefined,
      )}
      {...rest}
    >
      {anchor &&
        <a className='Heading__anchor link' href={`#${id}`}>#</a>
      }
      {children}
    </Component>
  )
}

Heading.propTypes = propTypes
Heading.defaultProps = defaultProps

export default Heading


function toID(string) {
  return string.toLowerCase().replace(/\W+/g, '-')
}
