import React from 'react'
import { findDOMNode, createPortal } from 'react-dom'
import { createPopper } from '@popperjs/core'
import prop from 'prop-types'
import cx from 'classname'

const NOOP = () => {}

function getInversePlacement(p) {
  if (p.startsWith('top')) return 'bottom'
  if (p.startsWith('bottom')) return 'top'
  if (p.startsWith('left')) return 'right'
  if (p.startsWith('right')) return 'left'
  return 'top'
}

const PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
]

class Popover extends React.PureComponent {
  static propTypes = {
    className: prop.string,
    open: prop.bool,
    arrow: prop.bool,
    content: prop.oneOfType([prop.node, prop.func]).isRequired,
    children: prop.object,
    placement: prop.oneOf(PLACEMENTS),
    align: prop.oneOf(['right', 'left']),
    method: prop.oneOf(['mouseover', 'click', 'click-controlled', 'none']),
    width: prop.oneOf(['trigger']),
    delay: prop.number,
    onOpen: prop.func,
    onClose: prop.func,
  }

  static defaultProps = {
    arrow: true,
    placement: 'bottom',
    align: 'right',
    method: 'click',
    delay: 200,
    onOpen: NOOP,
    onClose: NOOP,
  }

  static getDerivedStateFromProps(props, state) {
    if ('placement' in props)
      return { placement: props.placement }
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
      placement: props.placement,
      styles: {},
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
      placement: this.props.placement,
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
          name: 'updateComponentState',
          enabled: true,
          phase: 'write',
          fn: this.onUpdatePopper,
        },
      ],
    })
  }

  detachPopper() {
    if (this.popper)
      this.popper.destroy()
  }

  onDocumentClick = ev => {
    if (this.props.method !== 'click' && this.props.method !== 'click-controlled')
      return

    if (!this.isOpen())
      return

    if (!(this.triggerRef.current.contains(ev.target) || this.popoverRef.current.contains(ev.target)))
      this.close()
  }

  onUpdatePopper = ({ state }) => {
    if (this.state.placement !== state.placement) {
      this.setState({ placement: state.placement })
    }

    if (this.props.width === 'trigger') {
      const trigger = state.elements.reference
      const rect = trigger.getBoundingClientRect()

      const currentWidth = this.state.styles.width
      const newWidth = rect.width - 1

      if (currentWidth !== newWidth)
        this.setState({ styles: { width: newWidth } })
    }
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

  onMouseOver = () => {
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

  onMouseOut = () => {
    if (this.openTimeout)
      this.openTimeout = clearTimeout(this.openTimeout)

    if (this.state.open) {
      if (!this.props.delay) {
        this.close()
      }
      else {
        this.closeTimeout = setTimeout(() => {
          this.close()
        }, this.props.delay)
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
    const { placement, styles } = this.state
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
            ref={this.popoverRef}
          >
            {arrow &&
              <div className={cx('arrow', arrowPlacement)} ref={this.arrowRef} />
            }
            <div className='Popover__container popover__container' style={styles}>
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
