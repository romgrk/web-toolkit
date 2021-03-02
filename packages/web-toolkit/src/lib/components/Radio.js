/*
 * Radio.js
 */


import React from 'react'
import prop from 'prop-types'
import cx from 'clsx'
import useControlled from '../utils/useControlled'

import Box from './Box'

const noop = () => {}

let nextId = 1

class Radio extends React.Component {
  static propTypes = {
    label: prop.string,
    size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
    showLabel: prop.bool,
    value: prop.string,
    checked: prop.bool,
    defaultChecked: prop.bool,
    onChange: prop.func,
  }

  static defaultProps = {
    showLabel: true,
    size: 'medium',
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
      size,
      value,
      checked,
      defaultChecked,
      disabled,
      onChange,
      ...rest
    } = this.props

    return (
      <div className={cx('Radio', className, size, { disabled })}>
        <input
          type='radio'
          id={id || this.id}
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
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

function Group({ size, compact, horizontal, value: valueProp, defaultValue, onChange, name, options }) {
  const isControlled = valueProp !== undefined
  const [value, setValue] = useControlled(valueProp, defaultValue, onChange)
  return (
    <Box horizontal={horizontal} vertical={!horizontal} compact={compact}>
      {options.map(o =>
        <Radio
          key={o.value}
          size={size}
          name={name}
          value={o.value}
          checked={value === o.value}
          defaultChecked={defaultValue === o.value}
          label={o.label}
          onChange={checked => {
            if (checked)
              setValue(o.value)
            if (!isControlled && onChange)
              onChange(o.value)
          }}
        />
      )}
    </Box>
  )
}

Group.propTypes = {
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
  name: prop.string,
  value: prop.string,
  defaultValue: prop.string,
  options: prop.arrayOf(prop.shape({
    value: prop.any.isRequired,
    label: prop.node.isRequired,
    data: prop.object,
  })),
  horizontal: prop.bool,
  compact: prop.bool,
  onChange: prop.func,
}

Group.defaultProps = {
  compact: false,
  horizontal: true,
}

Radio.Group = Group

export default Radio
