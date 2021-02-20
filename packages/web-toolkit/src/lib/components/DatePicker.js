import React, { useState, useRef } from 'react'
import { findDOMNode } from 'react-dom'
import prop from 'prop-types'
import { isEqual, parse, format } from 'date-fns'
import cx from 'clsx'

import useControlled from '../utils/useControlled'
import Calendar from './Calendar'
import Input from './Input'
import Popover from './Popover'

function DatePicker({
  format: formatString = 'd MMM yyyy',
  value: valueProp,
  defaultValue,
  onChange,
  ...rest
}) {
  const calendarRef = useRef()
  const [open, setOpen] = useState(false)
  const [value, setValue] = useControlled(valueProp, defaultValue, onChange)
  const [inputValue, setInputValue] = useState(value ? format(value, formatString) : '')

  const onInputChange = newValue => {
    setInputValue(newValue)
  }

  const onCalendarChange = date => {
    setValue(date)
    setInputValue(format(date, formatString))
    setOpen(false)
  }

  const onBlur = ev => {
    // Skip click inside calendar
    const calendar = findDOMNode(calendarRef.current)
    if (calendar.contains(ev.relatedTarget))
      return

    const newValue =
      inputValue === '' ? null : parse(inputValue, formatString, new Date())
    const isNewValue =
      (newValue === null || !Number.isNaN(+newValue)) && !isEqual(value, newValue)
    if (isNewValue) {
      setValue(newValue)
      setInputValue(newValue ? format(newValue, formatString) : '')
    } else {
      setInputValue(format(value, formatString))
    }

    setOpen(false)
  }

  const popover =
    <Calendar
      onChange={onCalendarChange}
      ref={calendarRef}
    />

  return (
    <Popover open={open} content={popover} className='DatePicker__popover'>
      <Input
        className='DatePicker__input'
        iconAfter='x-office-calendar'
        placeholder='Pick a date'
        value={inputValue}
        onChange={onInputChange}
        onFocus={() => setOpen(true)}
        onBlur={onBlur}
        {...rest}
      />
    </Popover>
  )
}

export default DatePicker
