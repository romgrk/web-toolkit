/*
 * Expander.js
 */


import React, { useState, useRef } from 'react'
import cx from 'clsx'
import prop from 'prop-types'
import { equals } from 'rambda'

import Icon from './Icon'
import Label from './Label'

class Expander extends React.Component {
  static propTypes = {
    children: prop.node,
    className: prop.string,
    open: prop.bool,
    defaultOpen: prop.bool,
    label: prop.oneOfType([prop.node, prop.func]),
    transition: prop.oneOf(['horizontal', 'vertical']),
    size: prop.number,
    fitContent: prop.number,
    onChange: prop.func,
  }

  static defaultProps = {
    transition: 'vertical',
  }

  constructor(props) {
    super(props)

    this.contentRef = React.createRef()
    this.state = {
      open: false,
      containerStyle: {},
    }
  }

  setOpen = open => {
    this.setState({ open })
  }

  componentDidUpdate() {
    const { size, fitContent } = this.props
    const property = this.getProperty()

    if (!fitContent)
      return

    let value = size || 100

    if (this.contentRef.current) {
      const rect = this.contentRef.current.getBoundingClientRect()
      value = rect[property]
      const style = {}
      style[property] = value

      const inverseProperty = getInverseProperty(property)
      style[inverseProperty] = rect[inverseProperty]

      if (!equals(style, this.state.containerStyle))
        this.setState({ containerStyle: style })
    }
  }

  isOpen() {
    return this.props.open ?? this.props.state
  }

  getProperty() {
    const { transition } = this.props
    switch (transition) {
      case 'vertical': return 'height'
      case 'horizontal': return 'width'
      default:
        throw new Error('unreachable')
    }
  }

  getContainerStyle() {
    const property = this.getProperty()
    const open = this.isOpen()
    return open ? this.state.containerStyle :
      { ...this.state.containerStyle, [property]: 0 }
  }

  render() {
    const {
      children,
      className,
      open: openProp,
      defaultOpen,
      label,
      transition,
      size,
      fitContent,
      onChange,
      ...rest
    } = this.props
    const open = this.isOpen()
    const setOpen = openProp !== undefined ? onChange : this.setOpen
    const toggle = () => setOpen(!open)

    const property = this.getProperty()
    const contentStyle = size === undefined ? undefined : { [property]: size }
    const containerStyle = this.getContainerStyle()

    return (
      <div
        className={cx(
          'Expander',
          className,
          transition,
          { open, 'fit-content': fitContent }
        )}
        {...rest}
      >
        {!label ? null :
          typeof label === 'function' ?
            label({ toggle }) :
            <button className='Expander__button' onClick={toggle}>
              <Label>{label}</Label>
              <Icon name='pan-start' className='arrow' />
            </button>
        }
        <div className='Expander__container' style={containerStyle}>
          <div className='Expander__content' style={contentStyle} ref={this.contentRef}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Expander


// Helpers

function getInverseProperty(p) {
  switch (p) {
    case 'width': return 'height'
    case 'height': return 'width'
    default:
      throw new Error('unreachable')
  }
}
