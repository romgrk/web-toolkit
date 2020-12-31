/*
 * PopoverMenu.js
 */

import { useState } from 'react'
import prop from 'prop-types'

import useControlled from '../utils/useControlled'
import PageSwitcher from './PageSwitcher'
import Popover from './Popover'


function PopoverMenu({
  children,
  pages: getPages,
  open: openProp,
  onChangeOpen,
  ...rest
}) {
  const [page, setPage] = useState(0)
  const [isOpen, setOpen] = useControlled(openProp, false, onChangeOpen)

  let pages

  const open = () => setOpen(true)
  const close = () => setOpen(false) 
  const back = () => setPage(0)
  const change = key => setPage(pages.findIndex(p => p.key === key))

  pages = getPages({ close, back, change })

  const content =
    <PageSwitcher
      expand
      transition='horizontal'
      pages={pages}
      activePage={page}
      mainPage={0}
      useMainPageDimensions='width'
    />

  return (
    <Popover
      placement='bottom'
      open={isOpen}
      content={content}
      onOpen={open}
      onClose={close}
      onDidClose={back}
      {...rest}
    >
      {children}
    </Popover>
  )
}

PopoverMenu.propTypes = {
  pages: prop.func,
}

export default PopoverMenu
