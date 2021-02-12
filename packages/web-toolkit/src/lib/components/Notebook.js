/*
 * Notebook.js
 */

import React, { useState } from 'react'
import prop from 'prop-types'
import cx from 'classname'

import Button from './Button'
import Label from './Label'
import PageSwitcher from './PageSwitcher'

const noop = () => {}

function Notebook({
  children,
  className,
  position,
  transition,
  value: activePageValue,
  arrows,
  pages,
  action,
  onChange,
  onClose,
  ...rest
}) {
  const orientation = position === 'top' || position === 'bottom' ? 'horizontal' : 'vertical'
  const isHorizontal = orientation === 'horizontal'

  const isControlled = activePageValue !== undefined
  const [activePageState, setActivePage] = useState(0)
  const setPage = isControlled ? onChange : setActivePage

  let activePage = isControlled ? activePageValue : activePageState
  if (activePage >= pages.length) {
    activePage = pages.length - 1
    setPage(activePage)
  }

  const previousPage = () => setPage(activePage - 1)
  const nextPage = () => setPage(activePage + 1)

  return (
    <div className={cx('Notebook', className, position)} {...rest}>
      <div className={cx('Notebook__header', position)}>
        <div className='Notebook__tabs'>
          {arrows &&
            <Button
              className='Notebook__arrow'
              icon={isHorizontal ? 'pan-start' : 'pan-up'}
              disabled={activePage === 0}
              onClick={previousPage}
            />
          }
          {pages.map((page, i) =>
            <div
              key={page.key}
              className={cx('Notebook__tab', {
                selected: i === activePage,
                reorderable: true,
              })}
              role='button'
              tabIndex='0'
              onClick={() => setPage(i)}
            >
              <Label>
                {page.label}
              </Label>
              {page.closable &&
                <Button
                  size='small'
                  icon='window-close'
                  tabIndex='-1'
                  onClick={ev => (ev.stopPropagation(), onClose(i))}
                />
              }
            </div>
          )}
          {arrows &&
            <Button
              className='Notebook__arrow'
              icon={isHorizontal ? 'pan-end' : 'pan-down'}
              disabled={activePage >= pages.length - 1}
              onClick={nextPage}
            />
          }
        </div>
        {action &&
          <div className='Notebook__action'>
            {action}
          </div>
        }
      </div>
      <div className='Notebook__content'>
        <PageSwitcher
          pages={pages}
          activePage={activePage}
          transition={transition ??
            ((position === 'top' || position === 'bottom') ? 'horizontal' : 'vertical')}
        />
      </div>
    </div>
  )
}

Notebook.propTypes = {
  children: prop.node,
  position: prop.oneOf(['top', 'bottom', 'left', 'right']),
  transition: PageSwitcher.propTypes.transition,
  arrows: prop.bool,
  className: prop.string,
  value: prop.number,
  pages: PageSwitcher.propTypes.pages,
  action: prop.node,
  onChange: prop.func,
  onClose: prop.func,
}

Notebook.defaultProps = {
  position: 'top',
  arrows: false,
  onChange: noop,
  onClose: noop,
}

export default Notebook
