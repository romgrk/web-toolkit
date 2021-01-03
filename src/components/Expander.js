/*
 * Expander.js
 */


import React from 'react'
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
    contents: prop.bool,
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
    this.updateDimensions()
  }

  updateDimensions() {
    const { size, fitContent } = this.props
    const property = this.getProperty()

    let value = size || 100

    if (this.contentRef.current) {
      const rect = this.contentRef.current.getBoundingClientRect()
      value = rect[property]
      const style = {}
      style[property] = value

      if (fitContent) {
        const inverseProperty = getInverseProperty(property)
        style[inverseProperty] = rect[inverseProperty]
      }

      if (!equals(style, this.state.containerStyle))
        this.setState({ containerStyle: style })
    }
  }

  isOpen() {
    return this.props.open ?? this.state.open
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

  onRef = ref => {
    this.contentRef.current = ref
    if (ref)
      this.updateDimensions()
  }

  render() {
    const {
      children,
      className,
      contents,
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

    const triggerClassName = cx('Expander__button', { expanded: open })
    const trigger =
      !label ? null :
        typeof label === 'function' ?
          label({ toggle }) :
        typeof label === 'string' ?
          <button className={triggerClassName} onClick={toggle}>
            <Label>{label}</Label>
            <Icon name='pan-start' className='arrow' />
          </button> :
          React.Children.map(label, child =>
            React.cloneElement(child, {
              className: cx(child.props.className, triggerClassName),
              onClick: child.props.onClick || toggle,
            })
          )

    const container =
        <div className='Expander__container' style={containerStyle}>
          <div className='Expander__content' style={contentStyle} ref={this.onRef}>
            {children}
          </div>
        </div>

    if (contents)
      return (
        <>
          {trigger}
          <div
            className={cx(
              'Expander',
              className,
              transition,
              { open, 'fit-content': fitContent }
            )}
            {...rest}
          >
            {container}
          </div>
        </>
      )

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
        {trigger}
        {container}
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
