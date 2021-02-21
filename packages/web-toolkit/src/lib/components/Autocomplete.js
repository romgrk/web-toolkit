/*
 * Autocomplete.js
 */


import React, { useState, forwardRef } from 'react'
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
  /** The options shown in the list */
  options: prop.arrayOf(prop.shape({
    value: prop.oneOfType([prop.string, prop.number]),
    label: prop.node,
  })),
  /** Enables basic filtering of options.
   * Set to `false` if you want to implement your own filtering. */
  enableFilter: prop.bool,
  value: prop.string,
  defaultValue: prop.string,
  /** Called when the value changes (passive) */
  onSearch: prop.func,
  /** Called when the value changes (may prevent the value from updating, in conjuction with `value`) */
  onChange: prop.func,
}

const defaultProps = {
  enableFilter: true,
  defaultValue: '',
  options: [],
}

function Autocomplete({
  className,
  options,
  value: valueProp,
  defaultValue,
  enableFilter,
  onSearch,
  onChange: onChangeProp,
  ...rest
}, ref) {

  const [value, setValue] = useControlled(valueProp, defaultValue, onChangeProp)

  const [isFocused, setIsFocused] = useState(false)
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
  }

  const onChange = newValue => {
    setValue(newValue)
    if (onSearch) onSearch(newValue)
  }

  const open = isFocused && options.length > 0
  const lowerCaseValue = value.toLowerCase()
  const filteredOptions = enableFilter === false ? options :
    options.filter(o => o.value.toLowerCase().includes(lowerCaseValue))
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
        {...rest}
        ref={ref}
      />
    </Popover>
  )
}

const Export = forwardRef(Autocomplete)
Export.propTypes = propTypes
Export.defaultProps = defaultProps

export default Export
