import React from 'react'
import prop from 'prop-types'
import {
  useTable,
  useSortBy,
  useFilters,
  useResizeColumns,
  useFlexLayout,
} from 'react-table'
import { FixedSizeList } from 'react-window'
// import getScrollbarWidth from 'scrollbar-size'
import AutoSizer from 'react-virtualized-auto-sizer'
import cx from 'clsx'

import Box from './Box'
import Icon from './Icon'
import Label from './Label'

const propTypes = {
  className: prop.string,
  columns: prop.arrayOf(prop.object).isRequired,
  data: prop.arrayOf(prop.object).isRequired,
  sortable: prop.bool,
  filterable: prop.bool,
}

function Table({
  className,
  columns,
  data,
  sortable,
  filterable,
  ...rest
}) {

  const defaultColumn = React.useMemo(
    () => ({
      width: 150,
    }),
    []
  )

  // const scrollbarWidth = getScrollbarWidth()

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

  return (
    <div {...getTableProps()} className={cx('table', className)} {...rest}>
      <div className='table__header'>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className='tr'>
            {headerGroup.headers.map(column => (
              <div
                className='th'
                {...column.getHeaderProps(sortable ? column.getSortByToggleProps() : undefined)}
              >
                <Box horizontal compact>
                  <Box.Fill>
                    {column.render('Header')}
                  </Box.Fill>
                  <span>
                    {column.isSorted &&
                      <Icon name={column.isSortedDesc ? 'pan-down' : 'pan-up'} />
                    }
                  </span>
                </Box>
                {column.canResize && (
                  <div
                    {...column.getResizerProps()}
                    className={cx('table__resizer', { isResizing: column.isResizing })}
                  />
                )}
                {filterable && column.canFilter &&
                  <div>{column.render('Filter')}</div>
                }
              </div>
            ))}
          </div>
        ))}
      </div>

      <div {...getTableBodyProps()} className='table__body'>
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

Table.propTyes = propTypes

export default Table
