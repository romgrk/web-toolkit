/*
 * Paned.js
 */


import React, { useState, useRef } from 'react'
import cx from 'clsx'
import prop from 'prop-types'
import AutoSizer from 'react-virtualized-auto-sizer'

const inverse = {
  horizontal: 'vertical',
  vertical: 'horizontal',
}

const properties = {
  horizontal: {
    size: 'width',
    position: 'left',
    event: 'clientX',
  },
  vertical: {
    size: 'height',
    position: 'top',
    event: 'clientY',
  },
}

class Paned extends React.Component {
  static propTypes = {
    children: prop.arrayOf(prop.node),
    className: prop.string,
    orientation: prop.oneOf(['horizontal', 'vertical']),
    size: prop.number,
    defaultSize: prop.oneOf([prop.string, prop.number]),
    border: prop.oneOf([prop.bool, 'handle']),
    fill: prop.oneOf([prop.bool, 'width', 'height']),
  }

  static defaultProps = {
    orientation: 'horizontal',
    border: true,
  }

  constructor(props) {
    super(props)
    this.handle = React.createRef()
    this.touchId = undefined
    this.state = {
      size: props.defaultSize,
      containerSize: undefined,
    }
  }

  removeEventListeners = () => {
    document.removeEventListener('mousemove', this.onTouchMove);
    document.removeEventListener('mouseup', this.onTouchEnd);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  }

  onTouchMove = (event) => {
    event.preventDefault()

    const { orientation } = this.props

    const finger = trackFinger(event, this.touchId)
    if (!finger) {
      this.removeEventListeners()
      return
    }

    const handle = this.handle.current.getBoundingClientRect()
    const handlePosition = handle[properties[orientation].position]
    const mousePosition  = finger[properties[orientation].event]

    const delta = mousePosition - handlePosition

    this.setState({ size: this.state.size + delta })
  }

  onTouchEnd = () => {
    this.setState({ dragging: false })
    this.removeEventListeners()
  }

  onTouchStart = (event) => {
    event.preventDefault()
    const touch = event.changedTouches[0]
    // A number that uniquely identifies the current finger in the touch session.
    this.touchId = touch?.identifier
    this.setState({ dragging: true })
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
  }

  onMouseDown = (event) => {
    event.preventDefault();
    this.setState({ dragging: true })
    document.addEventListener('mousemove', this.onTouchMove);
    document.addEventListener('mouseup', this.onTouchEnd);
  }

  onKeyDown = ev => {
    const { containerSize } = this.state
    let size
    switch (ev.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        size = this.state.size - 4
        break
      case 'ArrowRight':
      case 'ArrowDown':
        size = this.state.size + 4
        break
      default:
        return
    }

    if (size < 0)
      size = 0
    if (size > containerSize)
      size = containerSize
    this.setState({ size })

    ev.preventDefault()
  }

  updateContainerSize(dimensions) {
    const containerSize = dimensions[properties[this.props.orientation].size]
    if (this.state.size !== undefined
        && this.state.containerSize === containerSize)
      return

    setTimeout(() => {
      this.setState({ containerSize })
      if (this.state.size === undefined)
        this.setState({ size: containerSize / 2 })
    }, 0)
  }

  render() {
    const {
      children,
      className,
      orientation,
      border,
      fill,
      ...rest
    } = this.props
    const { size } = this.state

    if (children.length < 2)
      throw new Error('Paned: requires 2 children at least')

    return (
      <div
        className={cx('Paned', className, orientation,
          {
            'fill': fill === true,
            'fill-width': fill === 'width',
            'fill-height': fill === 'height',
            'border-none': border === false,
            'border-handle': border === 'handle',
          },
        )}
        {...rest}
      >
        <AutoSizer>
          {dimensions => {
            this.updateContainerSize(dimensions)
            return (
              <div className={cx('Paned__wrapper', orientation)} style={dimensions}>
                <div className='Paned__pane' style={firstStyle(orientation, size)}>
                  {children[0]}
                </div>
                <div
                  className='Paned__handle'
                  role='separator'
                  aria-orientation={orientation === 'horizontal' ? 'vertical' : 'horizontal'}
                  tabIndex='0'
                  onMouseDown={this.onMouseDown}
                  onTouchStart={this.onTouchStart}
                  onKeyDown={this.onKeyDown}
                  ref={this.handle}
                  style={handleStyle(orientation, size)}
                />
                <div className='Paned__pane' style={secondStyle(orientation, size, dimensions)}>
                  {children[1]}
                </div>
              </div>
            )
          }}
        </AutoSizer>
      </div>
    )
  }
}

export default Paned


function handleStyle(orientation, size) {
  return {
    [properties[orientation].position]: size,
  }
}

function firstStyle(orientation, size) {
  return {
    [properties[orientation].size]: size,
  }
}

function secondStyle(orientation, size, dimensions) {
  return {
    [properties[orientation].size]: dimensions[properties[orientation].size] - size,
  }
}

function trackFinger(event, touchId) {
  if (touchId !== undefined && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId) {
        return {
          clientX: touch.clientX,
          clientY: touch.clientY,
        };
      }
    }
    return false;
  }

  return {
    clientX: event.clientX,
    clientY: event.clientY,
  };
}

