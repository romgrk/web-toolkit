/*
 * Switch.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx'

const noop = () => {}

const DEFAULT_LABELS = ['On', 'Off']

let nextId = 1

class Switch extends React.Component {
  static propTypes = {
    value: prop.bool,
    defaultValue: prop.bool,
    /** Not shown. For screen-readers only */
    label: prop.string,
    /** On/Off if `true`, or provide your own 2 labels */
    labels: prop.oneOfType([prop.bool, prop.arrayOf(prop.string)]),
    size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge']),
    onChange: prop.func,
  }

  static defaultProps = {
    size: 'medium',
    labels: false,
    onChange: noop,
  }

  constructor(props) {
    super(props)
    this.id = `switch_${nextId++}`
  }

  onChange = ev => {
    this.props.onChange(ev.target.checked, ev)
  }

  render() {
    const {
      id,
      label,
      labels: labelsValue,
      children,
      className,
      size,
      value,
      defaultValue,
      disabled,
      onChange,
      ...rest
    } = this.props
    const labels = Array.isArray(labelsValue) ? labelsValue : DEFAULT_LABELS

    return (
      <div className={cx('Switch', className, size, { disabled })}>
        <input
          type='checkbox'
          id={id || this.id}
          checked={value}
          defaultChecked={defaultValue}
          disabled={disabled}
          onChange={this.onChange}
          {...rest}
        />
        <label
          htmlFor={id || this.id}
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
