/*
 * Autocomplete.js
 */


import { useState, forwardRef } from 'react'
import cx from 'clsx'

import Expander from './Expander'
import Input from './Input'
import List from './List'
import Popover from './Popover'

function Autocomplete({
  className,
  options,
  ...rest
}, ref) {

  const [isFocused, setIsFocused] = useState(false)
  const onBlur = () => setIsFocused(false)
  const onFocus = () => setIsFocused(true)

  const elementClassName =
    cx('Autocomplete', className)

  const open = isFocused && options.length > 0
  const content =
    <Expander open={open} fitContent>
      <List border={false} separators={false}>
        {options}
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
        onBlur={onBlur}
        onFocus={onFocus}
        {...rest}
        ref={ref}
      />
    </Popover>
  )
}

const Export = forwardRef(Autocomplete)

export default Export
