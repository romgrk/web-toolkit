import React from 'react'
import { findDOMNode, createPortal } from 'react-dom'
import { createPopper } from '@popperjs/core'
import prop from 'prop-types'
import cx from 'clsx'

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
    width: prop.oneOf(['trigger', 'trigger-min']),
    delay: prop.number,
    shouldUpdatePlacement: prop.bool,
    shouldAttachEarly: prop.bool,
    onOpen: prop.func,
    onClose: prop.func,
    onDidOpen: prop.func,
    onDidClose: prop.func,
  }

  static defaultProps = {
    arrow: true,
    placement: 'bottom',
    align: 'right',
    method: 'click',
    delay: 200,
    shouldUpdatePlacement: true,
    onOpen: NOOP,
    onClose: NOOP,
    onDidOpen: NOOP,
    onDidClose: NOOP,
  }

  constructor(props) {
    super(props)

    this.domNode = document.createElement('div')
    this.domNode.className = 'Popover__domNode'

    this.isDomNodeAttached = false
    this.isEventListening = false

    this.openTimeout = undefined
    this.closeTimeout = undefined

    this.state = {
      open: false,
      closing: false,
      actualPlacement: props.placement,
      styles: {},
    }

    this.triggerRef = React.createRef()
    this.popoverRef = React.createRef()
    this.arrowRef = React.createRef()

    this.observer = new ResizeObserver(this.onContentResize)
  }

  componentWillUnmount() {
    this.detachDomNode()
    this.detachPopper()
  }

  componentDidMount() {
    this.attachPopper()
    if (this.props.shouldAttachEarly)
      this.attachDomNode()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open ||
        prevState.open !== this.state.open
    ) {
      if (this.props.shouldUpdatePlacement && this.popper)
        this.popper.update()
    }
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
    if (!this.popoverRef.current)
      return

    if (this.popper)
      return

    this.popper = createPopper(
      this.triggerRef.current,
      this.popoverRef.current,
      this.getPopperOptions(),
    )
  }

  detachPopper() {
    if (this.popper) {
      this.popper.destroy()
      this.popper = null
    }
  }

  updatePopperOptions() {
    if (!this.popper)
      return
    this.popper.setOptions(this.getPopperOptions())
  }

  getPopperOptions() {
    const hasArrow = this.props.arrow
    const isOpen = this.isOpen()
    this.isEventListening = isOpen
    return {
      placement: this.props.placement,
      modifiers: [
        {
          name: 'arrow',
          enabled: hasArrow,
          options: {
            element: this.arrowRef.current,
            padding: 15,
          },
        },
        {
          /* Offset from the trigger */
          name: 'offset',
          options: {
            offset: [0, hasArrow ? 10 : 0],
          },
        },
        {
          /* Avoids touching the edge of the window */
          name: 'preventOverflow',
          options: {
            altAxis: true,
            padding: 10,
          },
        },
        {
          /* Custom modifier */
          name: 'eventListeners',
          enabled: isOpen,
        },
        {
          /* Custom modifier */
          name: 'updateComponentState',
          enabled: true,
          phase: 'write',
          fn: this.onUpdatePopper,
        },
      ],
    }
  }

  onContentResize = () => {
    if (this.popper)
      this.popper.update()
  }

  onRefPopover = ref => {
    if (!ref) {
      if (this.popoverRef.current) {
        this.observer.unobserve(this.popoverRef.current)
        this.popoverRef.current = null
      }
      return
    }
    this.popoverRef.current = ref
    this.observer.observe(this.popoverRef.current)
  }

  onDocumentClick = ev => {
    if (this.props.method !== 'click' && this.props.method !== 'click-controlled')
      return

    if (!this.isOpen())
      return

    if (!(this.triggerRef.current.contains(ev.target) || this.popoverRef.current.contains(ev.target)))
      this.close()
  }

  onTransitionEnd = () => {
    this.setState({ closing: false })
    if (this.state.open)
      this.props.onDidOpen()
    else
      this.props.onDidClose()
  }

  onUpdatePopper = ({ state }) => {
    if (this.state.actualPlacement !== state.placement) {
      this.setState({ actualPlacement: state.placement })
    }

    if (this.props.width) {
      const trigger = state.elements.reference
      const rect = trigger.getBoundingClientRect()

      if (this.props.width === 'trigger') {
        const currentWidth = this.state.styles.width
        const newWidth = rect.width - 1

        if (currentWidth !== newWidth)
          this.setState({ styles: { width: newWidth } })
      }
      else if (this.props.width === 'trigger-min') {
        const currentWidth = this.state.styles.minWidth
        const newWidth = rect.width - 1

        if (currentWidth !== newWidth)
          this.setState({ styles: { minWidth: newWidth } })
      }
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
      }
      else {
        this.openTimeout = setTimeout(() => {
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
    this.updatePopperOptions()
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
    this.updatePopperOptions()
    this.setState({ open: false, closing: true })
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
    const { method, arrow, children, className } = this.props
    const { actualPlacement, styles, closing } = this.state
    const open = this.isOpen()
    const trigger = children

    if (this.props.open && !this.state.open)
      setTimeout(this.open, 0)

    if (open !== this.isEventListening)
      this.updatePopperOptions()

    const eventListeners = this.getEventListeners()
    const props = {
      ...trigger.props,
      ...eventListeners,
      className: cx(
        trigger.props.className,
        open ? `with-popover` : undefined,
        open ? `popover-${actualPlacement}` : undefined,
      ),
      ref: node => {
        if (node) this.triggerRef.current = findDOMNode(node)
        if (trigger.ref) trigger.ref(node)
      },
    }

    const arrowPlacement = getInversePlacement(actualPlacement)
    const popoverEventListeners = method === 'mouseover' ? eventListeners : undefined
    const popoverClassName = cx(
      'Popover popover',
      className,
      actualPlacement,
      arrow ? `arrow-${arrowPlacement}` : undefined,
      { open, arrow, closing }
    )

    return (
      <>
        {React.cloneElement(trigger, props)}
        {createPortal((
          <div
            ref={this.onRefPopover}
            className={popoverClassName}
            onTransitionEnd={this.onTransitionEnd}
            {...popoverEventListeners}
          >
            <div className='Popover__wrapper'>
            {arrow &&
              <div className={cx('Popover__arrow', arrowPlacement)} ref={this.arrowRef} />
            }
            <div className='Popover__container' style={styles}>
              <div className='Popover__content'>
              {this.getContent()}
              </div>
            </div>
            </div>
          </div>
        ), this.domNode)}
      </>
    )
  }
}

export default Popover
