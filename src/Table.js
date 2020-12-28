import React from 'react'
import { useTable, useBlockLayout } from 'react-table'
import { FixedSizeList } from 'react-window'
// import getScrollbarWidth from 'scrollbar-size'
import AutoSizer from 'react-virtualized-auto-sizer'
import cx from 'classname'


function Table({ className, columns, data, ...rest }) {
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
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useBlockLayout
  )

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

  // Render the UI for your table
  return (
    <div {...getTableProps()} className={cx('table', className)} {...rest}>
      <div className='table__header'>
        {headerGroups.map(headerGroup => (
          <div {...headerGroup.getHeaderGroupProps()} className='tr'>
            {headerGroup.headers.map(column => (
              <div {...column.getHeaderProps()} className='th'>
                {column.render('Header')}
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

export default Table
