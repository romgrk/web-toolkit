/*
 * Dropdown.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'classname'

import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Label from './Label'
import Menu from './Menu'
import Popover from './Popover'
import Separator from './Separator'


class Dropdown extends React.Component {
  static propTypes = {
    className: prop.string,
    triggerClassName: prop.string,
    size: prop.oneOf(['small', 'medium', 'large']),
    align: prop.oneOf(['left', 'right']),
    label: prop.node,
    options: prop.arrayOf(prop.shape({
      value: prop.any.isRequired,
      label: prop.node.isRequired,
      data: prop.object,
    })),
    disabled: prop.bool,
    loading: prop.bool,
    open: prop.bool,
    filterKey: prop.string,
    filter: prop.func,
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

    this.state = {
      value: undefined,
      selectedOption: undefined,
      open: false,
      position: { top: 0, left: 0 },
      inputValue: '',
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.domNode)
  }

  onInputBlur = () => {
    setTimeout(this.close, 200)
  }

  onInputChange = inputValue => {
    this.setState({ inputValue })
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
  }

  close = () => {
    if (this.props.onClose)
      this.props.onClose()
    else
      this.setState({ open: false })

    if (this.props.input && this.state.inputValue) {
      this.setState({ inputValue: '' })
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

  getValue() {
    if (this.isControlled())
      return this.props.value
    return this.state.value
  }

  getOptions() {
    const { options, filterKey, filter } = this.props
    const { inputValue } = this.state

    if (!inputValue)
      return options

    const needle = inputValue.toLowerCase()

    return options.filter(o => {
      const optionValue = 
        filterKey ?
          o.data[filterKey] :
        filter ?
          filter(o) :
        typeof o.label === 'string' ?
          o.label :
          o.value
      return String(optionValue).toLowerCase().includes(needle)
    })
  }

  render() {
    const {
      size,
      className,
      disabled,
      loading,
      input,
    } = this.props
    const open = this.isOpen()
    const value = this.getValue()
    const label =
      this.props.label || this.props.options.find(o => o.value === value)?.label || value

    let trigger

    if (!input) {
      const buttonClassName = cx('Dropdown Box horizontal', className, size, {
        open,
        hover: open,
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
      const { inputValue } = this.state
      const inputClassName = cx('Dropdown', className, size, {
        open,
        hover: open,
      })
      trigger =
        <Input
          className={inputClassName}
          loading={loading}
          disabled={disabled}
          value={inputValue}
          onFocus={this.open}
          onBlur={this.onInputBlur}
          onChange={this.onInputChange}
          iconAfter='pan-down'
          ref={ref => ref && (this.trigger = ref)}
        >
          {wrapLabel(label)}
        </Input>
    }

    const options = this.getOptions()
    const actualChildren =
      options.map(o =>
        <Menu.Button
          key={o.value}
          selected={String(o.value) === String(value)}
          onClick={() => this.select(o.value, o)}
        >
          {o.label}
        </Menu.Button>
      )

    if (actualChildren.length === 0)
      actualChildren.push(
        <Menu.Item>
          <Label muted italic>No option found</Label>
        </Menu.Item>
      )

    /* const transformedChildren =
     *   React.Children.map(children, child =>
     *     child.type !== Menu.Button ? child :
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

    const popoverClassName = cx('Dropdown__menu', size)
    const menu =
      <Menu className={popoverClassName}>
        {actualChildren}
      </Menu>

    return (
      <Popover
        className='Dropdown__menu'
        method='click-controlled'
        width='trigger'
        arrow={false}
        open={open}
        content={menu}
        onClose={this.close}
      >
        {trigger}
      </Popover>
    )
  }
}


// Exports

Dropdown.Item = Menu.Item
Dropdown.Button = Menu.Button
Dropdown.Separator = Separator

export default Dropdown


// Helpers

function wrapLabel(label) {
  if (typeof label !== 'string')
    return label
  return (
    <Label align='left' fill='width' ellipsis>
      {label}
    </Label>
  )
}
