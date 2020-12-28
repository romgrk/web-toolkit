/*
 * Switch.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'classname'

const noop = () => {}

const DEFAULT_LABELS = ['On', 'Off']

let nextId = 1

class Switch extends React.Component {
  static propTypes = {
    label: prop.string,
    labels: prop.oneOf([prop.bool, prop.arrayOf(prop.string)]),
    value: prop.bool,
    defaultValue: prop.bool,
    onChange: prop.func,
  }

  static defaultProps = {
    onChange: noop,
  }

  constructor(props) {
    super(props)
    this.id = `switch_${nextId++}`
  }

  onChange = ev => {
    this.props.onChange(ev.target.value, ev)
  }

  render() {
    const {
      label,
      labels: labelsValue,
      children,
      className,
      value,
      defaultValue,
      disabled,
      onChange,
      ...rest
    } = this.props
    const labels = Array.isArray(labelsValue) ? labelsValue : DEFAULT_LABELS

    return (
      <div className={cx('Switch', className, { disabled })} {...rest}>
        <input
          type='checkbox'
          id={this.id}
          checked={value}
          defaultChecked={defaultValue}
          disabled={disabled}
          onChange={this.onChange}
        />
        <label
          htmlFor={this.id}
        >
          {labelsValue &&
            <>
              <span>{labels[0]}</span>
              <em className='sr-only'>{label}</em>
              <span>{labels[1]}</span>
            </>
          }
        </label>
      </div>
    )
  }
}

export default Switch
