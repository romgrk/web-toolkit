import React from 'react'
import { findDOMNode, createPortal } from 'react-dom'
import { createPopper } from '@popperjs/core'
import prop from 'prop-types'
import cx from 'classname'

const NOOP = () => {}

function getInversePlacement(p) {
  switch (p) {
    case 'top': return 'bottom'
    case 'bottom': return 'top'
    case 'left': return 'right'
    case 'right': return 'left'
    default:
      return 'top'
  }
}

class Popover extends React.PureComponent {
  static propTypes = {
    className: prop.string,
    open: prop.bool,
    arrow: prop.bool,
    content: prop.oneOfType([prop.node, prop.func]).isRequired,
    children: prop.object,
    position: prop.oneOf(['top', 'right', 'bottom', 'left']),
    align: prop.oneOf(['right', 'left']),
    method: prop.oneOf(['mouseover', 'click', 'none']),
    delay: prop.number,
    closeDelay: prop.number,
    onOpen: prop.func,
    onClose: prop.func,
  }

  static defaultProps = {
    arrow: true,
    position: 'bottom',
    align: 'right',
    method: 'click',
    delay: 200,
    closeDelay: 200,
    onOpen: NOOP,
    onClose: NOOP,
  }

  static getDerivedStateFromProps(props, state) {
    if ('position' in props)
      return { placement: props.position }
    return null
  }

  constructor(props) {
    super(props)

    this.domNode = document.createElement('div')
    this.domNode.className = 'Popover__domNode'

    this.isDomNodeAttached = false

    this.openTimeout = undefined
    this.closeTimeout = undefined

    this.state = {
      open: false,
      placement: props.position,
    }

    this.triggerRef = React.createRef()
    this.popoverRef = React.createRef()
    this.arrowRef = React.createRef()
  }

  componentWillUnmount() {
    this.detachDomNode()
    this.detachPopper()
  }

  componentDidMount() {
    this.attachPopper()
  }

  componentDidUpdate() {
    this.popper.update()
  }

  attachDomNode() {
    if (!this.isDomNodeAttached) {
      document.body.append(this.domNode)
      document.addEventListener('click', this.onDocumentClick)
      this.isDomNodeAttached = true
      // We need the classes to be applied before to enable the fade-in transition
      this.forceUpdate()
    }
  }

  detachDomNode() {
    if (this.isDomNodeAttached) {
      document.body.removeChild(this.domNode)
      document.removeEventListener('click', this.onDocumentClick)
      this.isDomNodeAttached = false
    }
  }

  attachPopper() {
    if (this.popper || !this.popoverRef.current)
      return
    this.popper = createPopper(
      this.triggerRef.current,
      this.popoverRef.current, {
      placement: this.props.position,
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: this.arrowRef.current,
            padding: 5,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: 10,
          },
        },
        /* Custom modifier */
        {
          name: 'updatePlacement',
          enabled: true,
          phase: 'write',
          fn: ({ state }) => {
            if (this.state.placement !== state.placement)
              this.setState({ placement: state.placement })
          },
        },
      ],
    })
  }

  detachPopper() {
    if (this.popper)
      this.popper.destroy()
  }

  onDocumentClick = ev => {
    if (this.props.method !== 'click')
      return

    if (!this.isOpen())
      return

    if (!(this.triggerRef.current.contains(ev.target) || this.popoverRef.current.contains(ev.target)))
      this.close()
  }

  onClick = ev => {
    /* React bubbles event in portals up to the containing element */
    if (!this.triggerRef.current.contains(ev.target))
      return

    if (this.isOpen())
      this.close()
    else
      this.open()
  }

  onMouseOver = ev => {
    if (this.closeTimeout)
      this.closeTimeout = clearTimeout(this.closeTimeout)

    if (this.state.open === false) { // is closed
      if (!this.props.delay) {
        this.open()
        this.updatePosition()
      }
      else {
        this.openTimeout = setTimeout(() => {
          this.updatePosition()
          this.open()
        }, this.props.delay)
      }
    }
  }

  onMouseOut = ev => {
    if (this.openTimeout)
      this.openTimeout = clearTimeout(this.openTimeout)

    if (this.state.open) {
      if (!this.props.closeDelay) {
        this.close()
      }
      else {
        this.closeTimeout = setTimeout(() => {
          this.close()
        }, this.props.closeDelay)
      }
    }
  }

  isControlled = () => {
    return 'open' in this.props
  }

  open = () => {
    if (this.props.open && this.state.open)
      return

    // This allows for call this.open() when props.open is true
    if (this.isControlled()) {
      if (this.props.open === false)
        return this.props.onOpen()
    }

    this.attachDomNode()
    this.openTimeout = undefined
    this.setState({ open: true })

    if (!this.isControlled()) {
      this.props.onOpen()
    }
  }

  close = () => {
    if (this.isControlled()) {
      if (this.props.open === true)
        return this.props.onClose()
    }
    this.setState({ open: false })
    if (!this.isControlled())
      this.props.onClose()
  }

  isOpen() {
    return this.props.open ?? this.state.open
  }

  getContent() {
    return !this.isDomNodeAttached ?
        null :
      typeof this.props.content === 'function' ?
        this.props.content() :
        this.props.content
  }

  getEventListeners() {
    const { method } = this.props
    return (
      method === 'mouseover' ?
        { onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut } :
      method === 'click' ?
        { onClick: this.onClick } : {}
    )
  }

  render() {
    const { arrow, children, className } = this.props
    const { placement } = this.state
    const open = this.isOpen()
    const trigger = children

    if (this.props.open && !this.state.open)
      setTimeout(this.open, 0)

    const eventListeners = this.getEventListeners()
    const props = {
      ...trigger.props,
      ...eventListeners,
      active: open,
      ref: node => {
        if (node) this.triggerRef.current = findDOMNode(node)
        if (trigger.ref) trigger.ref(node)
      },
    }

    const arrowPlacement = getInversePlacement(placement)
    const popoverClassName = cx(
      'Popover popover',
      className,
      arrow ? `arrow-${arrowPlacement}` : undefined,
      { open, arrow }
    )

    return (
      <>
        {React.cloneElement(trigger, props)}
        {createPortal((
          <div
            className={popoverClassName}
            style={/* position */ undefined}
            ref={this.popoverRef}
          >
            <div className={cx('arrow', arrowPlacement)} ref={this.arrowRef} />
            <div className='Popover__container popover__container'>
              <div className='Popover__content'>
              {this.getContent()}
              </div>
            </div>
          </div>
        ), this.domNode)}
      </>
    )
  }
}

Popover.Content = function Content({ children }) {
  return children
}

export default Popover
