/*
 * Dropdown.js
 */


import React from 'react'
import { createPortal } from 'react-dom'
import { createPopper } from '@popperjs/core'
import prop from 'prop-types'
import cx from 'classname'

import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Label from './Label'
import Separator from './Separator'
import Spinner from './Spinner'


function Item({ icon, children, className, selected, ...rest }) {
  const itemClassName = 'Dropdown__item ModelButton flat Box horizontal align'
    + (selected ? ' selected' : '')
    + (className ? ' ' + className : '')

  return (
    <button className={itemClassName} {...rest} role='option' aria-selected={selected}>
      {icon &&
        <span className='Dropdown__item__icon'>
          <Icon name={icon} />
        </span>
      }
      <Label className='Dropdown__item__label Box__fill'>
        {children}
      </Label>
    </button>
  )
}

function wrapLabel(label) {
  if (typeof label !== 'string')
    return label
  return (
    <Label align='left' fill='width' ellipsis>
      {label}
    </Label>
  )
}

class Dropdown extends React.Component {
  static propTypes = {
    className: prop.string,
    triggerClassName: prop.string,
    size: prop.oneOf(['small', 'medium', 'large']),
    align: prop.oneOf(['left', 'right']),
    label: prop.node,
    children: prop.node,
    disabled: prop.bool,
    loading: prop.bool,
    open: prop.bool,
    onClose: prop.func,
    onOpen: prop.func,
  }

  static defaultProps = {
    size: 'medium',
    align: 'right',
    disabled: false,
  }

  static getDerivedStateFromProps(props, state) {
    if ('open' in props)
      return { open: props.open }
    return null
  }

  constructor(props) {
    super(props)

    this.domNode = document.createElement('div')
    document.body.append(this.domNode)
    document.addEventListener('click', this.onDocumentClick)
    document.addEventListener('keydown', this.onDocumentKeyDown)

    this.state = {
      value: undefined,
      selectedOption: undefined,
      open: false,
      position: { top: 0, left: 0 },
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.domNode)
    document.removeEventListener('click', this.onDocumentClick)
    document.removeEventListener('keydown', this.onDocumentKeyDown)
    if (this.popper) {
      this.popper.destroy()
    }
  }

  componentDidUpdate() {
    if (!this.state.open)
      return
    this.updatePosition()
  }

  updatePosition() {
    const {align} = this.props

    const box = this.trigger.getBoundingClientRect()
    const popover = this.popover.getBoundingClientRect()

    // const top =  box.top + box.height
    // const left = align === 'right' ? box.left : box.left - (popover.width - box.width)
    const width = box.width

    // if (top !== this.state.position.top || left !== this.state.position.left) {
    if (width !== this.state.position.width) {
      const position = {
        // top,
        // left,
        width: width,
      }
      this.setState({ position })
    }
  }

  onDocumentKeyDown = ev => {
    if (this.state.open && ev.key === 'Escape') {
      ev.preventDefault()
      ev.stopPropagation()
      this.setState({ open: false })
    }
  }

  onDocumentClick = ev => {
    if (this.state.open && !this.popover.contains(ev.target) && !this.trigger.contains(ev.target)) {
      ev.preventDefault()
      this.setState({ open: false })
    }
  }

  onToggle = ev => {
    if (this.state.open)
      this.close()
    else
      this.open()
  }

  open = () => {
    if (this.props.onOpen)
      this.props.onOpen()
    else
      this.setState({ open: true })

    if (!this.popper) {
      this.popper = createPopper(this.trigger, this.popover)
    }
    else {
      this.popper.forceUpdate()
    }
  }

  close = () => {
    if (this.props.onClose)
      this.props.onClose()
    else
      this.setState({ open: false })

    if (this.props.input && this.trigger) {
      this.trigger.value = ''
    }
  }

  isOpen = () => {
    return 'open' in this.props ? this.props.open : this.state.open
  }

  isControlled = () => {
    return 'value' in this.props
  }

  select = (value, option) => {
    if (this.isControlled()) {
      if (this.props.onChange)
        this.props.onChange(value)
    }
    else {
      this.setState({ value, selectedOption: option })
    }
    this.close()
  }

  onBlurInput = () => {
    setTimeout(this.close, 200)
  }

  getValue() {
    if (this.isControlled())
      return this.props.value
    return this.state.value
  }

  render() {
    const {
      size,
      className,
      triggerClassName,
      disabled,
      loading,
      input,
      options,
    } = this.props
    const { position } = this.state
    const open = this.isOpen()
    const value = this.getValue()
    const label =
      this.props.label || options.find(o => o.value === value)?.label || value

    let trigger

    if (!input) {
      const buttonClassName = cx('Dropdown__trigger Box horizontal', triggerClassName, {
        hover: open,
        'no-outline': open,
      })
      trigger =
        <Button
          className={buttonClassName}
          loading={loading}
          disabled={disabled}
          onClick={this.onToggle}
          ref={ref => ref && (this.trigger = ref)}
        >
          <Label align='left' className='Box__fill'>
            {label}
          </Label>
          <Icon name='pan-down' className='Dropdown__arrow' />
        </Button>
    }
    else {
      const inputClassName = cx('Dropdown__trigger', triggerClassName, {
        hover: open,
        'no-outline': open,
      })
      trigger =
        <Input
          className={inputClassName}
          loading={loading}
          disabled={disabled}
          onFocus={this.open}
          onBlur={this.onBlurInput}
          iconAfter='pan-down'
          ref={ref => ref && (this.trigger = ref)}
        >
          {wrapLabel(label)}
        </Input>
    }

    const actualChildren =
      options.map(o =>
        <Item
          key={o.value}
          selected={String(o.value) === String(value)}
          onClick={() => this.select(o.value, o)}
        >
          {o.label}
        </Item>
      )

    /* const transformedChildren =
     *   React.Children.map(children, child =>
     *     child.type !== Item ? child :
     *       React.cloneElement(
     *         child,
     *         {
     *           onClick: ev => {
     *             this.close()
     *             if (child.props.onClick)
     *               child.props.onClick(ev)
     *           }
     *         }
     *       )
     *   ) */

    const popoverClassName = cx('Dropdown__menu popover menu', size, { open })
    const popover =
      <div className={popoverClassName} style={position} ref={ref => ref && (this.popover = ref)}>
        <div className='contents'>
          {actualChildren}
        </div>
      </div>

    const containerClassName = cx('Dropdown', className, size, { open })

    return (
      <div className={containerClassName}>
        {trigger}
        {createPortal(popover, this.domNode)}
      </div>
    )
  }
}

Dropdown.Item = Item
Dropdown.Separator = Separator

export default Dropdown
