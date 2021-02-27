/*
 * Autocomplete.js
 */


import React, { useState, useRef } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

import useControlled from '../utils/useControlled'
import Box from './Box'
import Expander from './Expander'
import Input from './Input'
import Label from './Label'
import List from './List'
import Popover from './Popover'

const propTypes = {
  className: prop.string,
  value: prop.string,
  defaultValue: prop.string,
  /** The options shown in the list */
  options: prop.arrayOf(prop.shape({
    value: prop.oneOfType([prop.string, prop.number]),
    label: prop.node,
  })),
  /** Enables basic filtering of options.
   * Set to `false` if you want to implement your own filtering. */
  enableFilter: prop.bool,
  /** Called when the value changes (may prevent the value from updating, in conjuction with `value`) */
  onChange: prop.func,
  /** Called when the value changes (passive) */
  onSearch: prop.func,
}

const defaultProps = {
  defaultValue: '',
  enableFilter: true,
  options: [],
}

function Autocomplete({
  className,
  options,
  value: valueProp,
  defaultValue,
  enableFilter,
  ref: refProp,
  onSearch,
  onChange: onChangeProp,
  ...rest
}) {

  const input = useRef()
  const [value, setValue] = useControlled(valueProp, defaultValue, onChangeProp)
  const [isFocused, setIsFocused] = useState(false)

  const open = isFocused && options.length > 0
  const lowerCaseValue = value.toLowerCase()
  const filteredOptions = enableFilter === false ? options :
    options.filter(o => o.value.toLowerCase().includes(lowerCaseValue))

  const onFocus = () => setIsFocused(true)
  const onBlur = ev => {
    const newValue = ev?.relatedTarget?.getAttribute('data-value')
    if (newValue) {
      setValue(newValue)
    }
    setIsFocused(false)
  }

  const elementClassName =
    cx('Autocomplete', className)

  const select = option => {
    setValue(option.value)
    if (input.current)
      input.current.querySelector('input').blur()
  }

  const onChange = newValue => {
    setValue(newValue)
    if (onSearch) onSearch(newValue)
  }

  const onAccept = () => {
    if (filteredOptions.length > 0)
      select(filteredOptions[0])
  }

  const content =
    <Expander open={open} fitContent>
      <List border={false} separators={false}>
        {filteredOptions.map(o =>
          <List.Item
            key={o.value}
            activatable
            onClick={() => select(o)}
            data-value={o.value}
          >
            {o.label || o.value}
          </List.Item>
        )}
        {filteredOptions.length === 0 &&
          <List.Item key='empty'>
            <Box justify>
              <Label muted italic>(No results found)</Label>
            </Box>
          </List.Item>
        }
      </List>
    </Expander>

  return (
    <Popover
      className='Autocomplete__popover'
      open={open}
      content={content}
      arrow={false}
      placement='bottom-start'
      width='trigger-min'
      shouldAttachEarly={true}
    >
      <Input
        className={elementClassName}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        onAccept={onAccept}
        {...rest}
        ref={ref => {
          input.current = ref
          if (refProp) {
            if (typeof refProp === 'function')
              refProp(ref)
            else
              refProp.current = ref
          }
        }}
      />
    </Popover>
  )
}

const Export = Autocomplete
Export.propTypes = propTypes
Export.defaultProps = defaultProps

export default Export
