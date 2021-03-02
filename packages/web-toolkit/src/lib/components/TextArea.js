/*
 * TextArea.js
 */


import React, { useState, useRef, forwardRef } from 'react'
import prop from 'prop-types'
import cx from 'clsx'

function useForceUpdate() {
  const [_, setValue] = useState(0)
  return () => setValue(value => ++value)
}

function TextArea({
  className,
  size,
  placeholder,
  flat,
  disabled: disabledValue,
  error,
  warning,
  progress,
  children,
  onChange,
  ...rest
}, ref) {

  const disabled = disabledValue

  const forceUpdate = useForceUpdate()
  const inputRef = useRef()
  const isControlled = typeof rest.value === 'string'
  const value = isControlled ? rest.value : (inputRef.current?.value || rest.defaultValue || '')

  const inputClassName =
    cx('Input TextArea', size, { flat, disabled, error, warning, progress: progress !== undefined })
    + ' ' + cx(className)

  const onTextAreaChange = ev => {
    if (!isControlled)
      forceUpdate()
    onChange && onChange(ev.target.value, ev)
  }

  const onClickContainer = ev => {
    if (ev.target !== inputRef.current && inputRef.current)
      inputRef.current.focus()
  }

  return (
    <div className={inputClassName} ref={ref} onClick={onClickContainer}>
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        className={cx('Input__area', { empty: !value })}
        ref={inputRef}
        onChange={onTextAreaChange}
        {...rest}
      />
    </div>
  )
}

const ExportedTextArea = forwardRef(TextArea)

ExportedTextArea.propTypes = {
  size: prop.oneOf(['mini', 'small', 'medium', 'large', 'huge', 'mega']),
}

ExportedTextArea.defaultProps = {
  size: 'medium',
}

export default ExportedTextArea
