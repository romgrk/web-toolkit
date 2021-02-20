import React, { useState } from 'react'
import prop from 'prop-types'
import {
  format,
  addDays,
  addMonths,
  startOfMonth,
  endOfMonth,
} from 'date-fns'
import cx from 'clsx'

import Box from './Box'
import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Label from './Label'

const weekDayLetters =
  ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const months = [
  [0, 1,  2],
  [3, 4,  5],
  [6, 7,  8],
  [9, 10, 11],
]

const yearButtons = Array(3).fill(0).map((_, n) => n)

const MODE = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
}

class Calendar extends React.Component {
  static propTypes = {
    value: prop.object,
    onChange: prop.func,
  }

  state = {
    mode: MODE.DAY,
    value: new Date(),
    current: startOfMonth(new Date()),
  }

  setMode(mode) {
    this.setState({ mode })
  }

  setCurrent(current) {
    this.setState({ current })
  }

  setMonth = (month) => {
    const current = new Date(this.state.current)
    current.setMonth(month)
    this.setCurrent(current)
    this.setMode(MODE.DAY)
  }

  setYear = (year) => {
    this.changeYear(year)
    this.setMode(MODE.DAY)
  }

  changeYear = (year) => {
    const current = new Date(this.state.current)
    current.setFullYear(year)
    this.setCurrent(current)
  }

  onPrevious = () => {
    this.setCurrent(addMonths(this.state.current, -1))
  }

  onNext = () => {
    this.setCurrent(addMonths(this.state.current, +1))
  }

  getValue() {
    return this.props.value ?? this.state.value
  }

  renderDays() {
    const today = new Date()
    const value = this.getValue()
    const current = this.state.current
    const weeks = getWeeks(current)

    return (
      <table>
        <tbody>
          <tr className='Calendar__weekDays'>
            {weekDayLetters.map((letter, j) =>
              <td
                key={j}
                className='Calendar__day'
              >
                {letter}
              </td>
            )}
          </tr>
          {weeks.map((week, i) =>
            <tr
              key={i}
              className='Calendar__week'
            >
              {week.map((item, j) =>
                <td
                  key={j}
                  className={cx(
                    'Calendar__day',
                    `day-${j}`,
                    {
                      selected: isEqual(item, value),
                      today: isEqual(item, today),
                      'other-month': !isEqualMonth(item, current),
                    }
                  )}
                >
                  {item !== undefined &&
                    <Button flat circular>
                      {item.date}
                    </Button>
                  }
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  renderMonths() {
    return (
      <table>
        <tbody>
          {months.map((row, i) =>
            <tr key={i}>
              {row.map(month =>
                <td key={month} className='Calendar__month'>
                  <Button flat onClick={() => this.setMonth(month)}>
                    {format(new Date(2000, month, 15), 'MMMM')}
                  </Button>
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  renderYears() {
    const { current } = this.state
    const year = current.getFullYear()
    return (
      <Box fill align justify>
        <YearPicker
          value={year}
          onChange={this.changeYear}
          onAccept={this.setYear}
        />
      </Box>
    )
  }

  render() {
    const { current, mode } = this.state
    return (
      <Box
        className={cx('Calendar', `mode-${mode}`)}
        vertical
        compact
      >
        <Box
          className='Calendar__header'
          horizontal
          compact
        >
          <Button
            flat
            icon='go-previous'
            onClick={this.onPrevious}
            className='Calendar__previous'
          />
          <Button
            flat
            className='Calendar__monthLabel'
            onClick={() => this.setMode(mode !== MODE.MONTH ? MODE.MONTH : MODE.DAY)}
          >
            {mode !== MODE.MONTH ?
              format(current, 'MMMM') :
              <Label info>Go Back</Label>
            }
          </Button>
          <Button
            flat
            className='Calendar__yearLabel'
            onClick={() => this.setMode(mode !== MODE.YEAR ? MODE.YEAR : MODE.DAY)}
          >
            {mode !== MODE.YEAR ?
              format(current, 'yyyy') :
              <Label info>
                Go Back
              </Label>
            }
          </Button>
          <Button
            flat
            icon='go-next'
            onClick={this.onNext}
            className='Calendar__next'
          />
        </Box>
        <div className='Calendar__grid'>
          {
            mode === MODE.DAY ?
              this.renderDays() :
            mode === MODE.MONTH ?
              this.renderMonths() :
            mode === MODE.YEAR ?
              this.renderYears() :
              null
          }
        </div>
      </Box>
    )
  }
}

function YearPicker({ value, onChange, onAccept }) {
  const [ticks, setTicks] = useState(0)
  const onWheel = ev => {
    ev.preventDefault()
    const direction = ev.deltaY < 0 ? -1 : +1
    const newTicks = ticks + direction
    if (Math.abs(newTicks) > 5) {
      onChange(value + direction)
      setTicks(0)
    }
    else {
      setTicks(newTicks)
    }
  }

  const onSubmit = ev => {
    ev.preventDefault()
    onAccept(value)
  }

  return (
    <div className='YearPicker' onWheel={onWheel}>
      {yearButtons.map((diff, i) =>
        <div key={value - (yearButtons.length - diff)} className='YearPicker__year'>
          <Button flat onClick={() => onAccept(value - (yearButtons.length - diff))}>
            {value - (yearButtons.length - diff)}
          </Button>
        </div>
      )}
      <form className='YearPicker__input' onSubmit={onSubmit}>
        <Box horizontal>
          <Input.Group>
            <Button
              flat
              size='huge'
              icon='go-previous'
              onClick={() => onChange(value - 1)}
            />
            <Input
              flat
              size='huge'
              type='number'
              value={value}
              onChange={onChange}
            />
            <Button
              flat
              size='huge'
              icon='go-next'
              onClick={() => onChange(value + 1)}
            />
          </Input.Group>
        </Box>
      </form>
      {yearButtons.map(diff =>
        <div key={value + 1 + diff} className='YearPicker__year'>
          <Button flat onClick={() => onAccept(value + 1 + diff)}>
            {value + 1 + diff}
          </Button>
        </div>
      )}
    </div>
  )
}

export default Calendar

function isEqual(item, value) {
  return value.getFullYear() === item.year
    && value.getMonth() === item.month
    && value.getDate() === item.date
}

function isEqualMonth(item, value) {
  return value.getFullYear() === item.year
    && value.getMonth() === item.month
}

function toDate(item) {
  return new Date(item.year, item.month, item.date)
}

function getWeeks(current) {
  const year = current.getFullYear()
  const month = current.getMonth()
  const firstDay = startOfMonth(current)
  const lastDay  = endOfMonth(current)

  const firstDate = firstDay.getDay()
  const lastDate = lastDay.getDate()

  const weeks = [Array(7).fill(undefined)]
  let currentWeek = weeks[0]
  let currentDate = firstDate
  for (let i = 1; i <= lastDate; i++) {
    if (currentDate === 7) {
      currentDate = 0
      currentWeek = Array(7).fill(undefined)
      weeks.push(currentWeek)
    }
    currentWeek[currentDate] = { year, month, date: i }
    currentDate++
  }

  if (firstDay.getDay() !== 0) {
    const previousMonth = addMonths(current, -1)
    const currentWeek = weeks[0]
    const firstDayOfWeek = addDays(firstDay, -firstDay.getDay())
    const firstDayOfWeekDate = firstDayOfWeek.getDate()
    for (let i = 0; i < firstDay.getDay(); i++) {
      currentWeek[i] = {
        year: previousMonth.getFullYear(),
        month: previousMonth.getMonth(),
        date: firstDayOfWeekDate + i,
      }
    }
  }

  if (lastDay.getDay() !== 6) {
    const nextMonth = addMonths(current, 1)
    const currentWeek = weeks[weeks.length - 1]
    let currentDate = 1
    for (let i = lastDay.getDay() + 1; i <= 6; i++) {
      currentWeek[i] = {
        year: nextMonth.getFullYear(),
        month: nextMonth.getMonth(),
        date: currentDate++,
      }
    }
  }

  if (weeks.length <= 5) {
    const nextMonth = addMonths(current, -1)
    const lastDayOfCalendar = weeks[weeks.length - 1][6]
    const currentWeek = []
    weeks.push(currentWeek)
    const lastDayOfWeekDate = lastDayOfCalendar.date 
    for (let i = 0; i <= 6; i++) {
      currentWeek[i] = {
        year: nextMonth.getFullYear(),
        month: nextMonth.getMonth(),
        date: lastDayOfWeekDate + i,
      }
    }
  }

  return weeks
}

