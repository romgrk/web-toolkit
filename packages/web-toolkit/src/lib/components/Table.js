import React, { useMemo, useRef, useEffect } from 'react'
import prop from 'prop-types'
import {
  useTable,
  useSortBy,
  useFilters,
  useResizeColumns,
  useFlexLayout,
} from 'react-table'
import { FixedSizeList } from 'react-window'
import getScrollbarWidth from 'scrollbar-size'
import AutoSizer from 'react-virtualized-auto-sizer'
import cx from 'clsx'

import Box from './Box'
import Button from './Button'
import Dropdown from './Dropdown'
import Icon from './Icon'
import Input from './Input'

const propTypes = {
  className: prop.string,
  columns: prop.arrayOf(prop.object).isRequired,
  data: prop.arrayOf(prop.object).isRequired,
  sortable: prop.bool,
  filterable: prop.bool,
}

function Table({
  className,
  columns: columnsValue,
  data,
  sortable,
  filterable,
  ...rest
}) {

  const bodyRef = useRef()
  const defaultColumn = useMemo(() => ({ width: 150, }), [])
  const columns = useMemo(() => transformColumns(columnsValue), [columnsValue])
  const scrollbarWidth = getScrollbarWidth()
  console.log(columns)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow,
  } = useTable.apply(null, [
    {
      columns,
      data,
      defaultColumn,
      defaultCanFilter: false,
    },
    filterable ? useFilters : undefined,
    sortable ? useSortBy : undefined,
    useResizeColumns,
    useFlexLayout,
  ].filter(Boolean))

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index]
      prepareRow(row)
      return (
        <div
          {...row.getRowProps({
            style,
          })}
          className='tr'
        >
          {row.cells.map(cell => {
            return (
              <div {...cell.getCellProps()} className='td'>
                {cell.render('Cell')}
              </div>
            )
          })}
        </div>
      )
    },
    [prepareRow, rows]
  )

  const onScrollBody = event => {
    const headers = document.getElementsByClassName('table__header')
    for (let i = 0; i < headers.length; i++) {
      headers[i].scrollLeft = event.target.scrollLeft
    }
  }
  useEffect(() => {
    const scrollContainer = bodyRef.current.firstElementChild.firstElementChild
    if (!scrollContainer)
      return
    scrollContainer.addEventListener('scroll', onScrollBody, { capture: true })
    return () => {
      scrollContainer.removeEventListener('scroll', onScrollBody)
    }
  }, [bodyRef.current])

  return (
    <div {...getTableProps()} className={cx('table', className)} {...rest}>
      <div className='table__header'>
        <div
          className='table__header__content'
          style={{
            paddingRight:  scrollbarWidth,
            marginBottom: -scrollbarWidth,
          }}
        >
          {headerGroups.map(headerGroup => (
            <div {...headerGroup.getHeaderGroupProps()} className='tr'>
              {headerGroup.headers.map(column => (
                console.log(column) ||
                <div
                  className={cx(
                    'th',
                    { activatable: column.canSort }
                  )}
                  {...column.getHeaderProps()}
                >
                  <Box
                    horizontal
                    compact
                    align
                    {...(sortable ? column.getSortByToggleProps() : undefined)}
                  >
                    <Box.Fill>
                      {column.render('Header')}
                    </Box.Fill>
                    {column.canSort &&
                      <Icon
                        name='pan-down'
                        className={cx(
                          'table__sortIcon',
                          {
                            hidden: !column.isSorted,
                            descending: column.isSortedDesc,
                          }
                        )}
                      />
                    }
                  </Box>
                  {column.canResize && (
                    <div
                      {...column.getResizerProps()}
                      className={cx('table__resizer', { isResizing: column.isResizing })}
                    />
                  )}
                  {filterable && column.canFilter &&
                    <div className='table__filter'>
                      {column.render('Filter')}
                    </div>
                  }
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div {...getTableBodyProps()} className='table__body' ref={bodyRef}>
        <AutoSizer>
          {({ width, height }) =>
            <FixedSizeList
              height={height}
              itemCount={rows.length}
              itemSize={28}
              width={width}
            >
              {RenderRow}
            </FixedSizeList>
          }
        </AutoSizer>
      </div>
    </div>
  )
}

function InputFilter({ column: { filterValue, setFilter, id } }) {
  return (
    <Input
      allowClear
      size='small'
      id={id}
      value={filterValue || ''}
      onChange={setFilter}
    />
  )
}

function DropdownFilter({ column: { filterValue, setFilter, id, options } }) {
  return (
    <Box horizontal compact className='DropdownFilter'>
      <Dropdown
        allowClear
        className='Box__fill'
        size='small'
        id={id}
        value={filterValue}
        onChange={setFilter}
        options={options}
      />
      <Button
        flat
        size='small'
        icon='window-close'
        onClick={() => setFilter(undefined)}
      />
    </Box>
  )
}

Table.propTyes = propTypes
Table.InputFilter = InputFilter
Table.DropdownFilter = DropdownFilter

export default Table


function transformColumns(cs) {
  return cs.map(c => {
    const nc = { ...c }

    if (nc.columns) {
      nc.columns = transformColumns(nc.columns)
    }
    else {
      if (nc.filter || nc.Filter)
        nc.disableFilters = false

      if (nc.disableFilters !== false)
        nc.disableFilters = true
    }

    return nc
  })
}
