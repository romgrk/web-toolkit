/*
 * Radio.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'classname'

const noop = () => {}

let nextId = 1

class Radio extends React.Component {
  static propTypes = {
    label: prop.string,
    showLabel: prop.bool,
    value: prop.bool,
    defaultValue: prop.bool,
    onChange: prop.func,
  }

  static defaultProps = {
    showLabel: true,
    onChange: noop,
  }

  constructor(props) {
    super(props)
    this.id = `radio_${nextId++}`
  }

  onChange = ev => {
    this.props.onChange(ev.target.checked, ev)
  }

  render() {
    const {
      id,
      name,
      label,
      showLabel,
      children,
      className,
      value,
      defaultValue,
      disabled,
      onChange,
      ...rest
    } = this.props

    return (
      <div className={cx('Radio', className, { disabled })}>
        <input
          type='radio'
          id={id || this.id}
          name={name}
          checked={value}
          defaultChecked={defaultValue}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label
          htmlFor={id || this.id}
          {...rest}
        >
          <span className='element' />
          <span className={cx('label__text', { 'sr-only': !showLabel })}>
            {label}
          </span>
        </label>
      </div>
    )
  }
}

export default Radio
