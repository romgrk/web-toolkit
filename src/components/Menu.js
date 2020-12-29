/*
 * Menu.js
 */

import cx from 'classname'

import Box from './Box'
import Icon from './Icon'
import Label from './Label'
import Separator from './Separator'

function Menu({ children, className, icons, ...rest }) {
  return (
    <div
      className={cx('Menu', className, { icons })}
      {...rest}
    >
      {children}
    </div>
  )
}

function Button({
  children,
  className,
  radio,
  checkbox,
  name,
  value,
  accelerator,
  icon,
  menu,
  ...rest
}) {
  return (
    <button className={cx('ModelButton flat Menu__button', className)} {...rest}>
      {checkbox !== undefined &&
        <Icon name='emblem-ok' className='Menu__icon' />
      }
      {radio &&
        <Icon name='radio' className='Menu__icon' />
      }
      <span className='Label Menu__button__text'>{children}</span>
      {accelerator &&
        <span className='Label Menu__button__accelerator'>{accelerator}</span>
      }
      {icon &&
        <Icon name={icon} className='Menu__iconAfter' />
      }
      {menu &&
        <Icon name='go-next' className='Menu__iconAfter submenu' />
      }
    </button>
  )
}

function InlineButtons({ children, className, label, ...rest }) {
  return (
    <Box horizontal className={cx('Menu__item inline-buttons', className)} align {...rest}>
      <Label className='Box__fill'>Edit</Label>
      <Box horizontal compact>
        {children}
      </Box>
    </Box>
  )
}

function CircularButtons({ children, className, label, ...rest }) {
  return (
    <Box horizontal className={cx('circular-buttons', className)} space='around' {...rest}>
      {children}
    </Box>
  )
}

function Item({ children, className, ...rest }) {
  return (
    <Box horizontal className={cx('Menu__item', className)} {...rest}>
      {children}
    </Box>
  )
}

function Title({ children, className, ...rest }) {
  return (
    <Label className={cx('Menu__item title', className)} {...rest}>
      {children}
    </Label>
  )
}

Menu.Button = Button
Menu.Item = Item
Menu.Title = Title
Menu.CircularButtons = CircularButtons
Menu.InlineButtons = InlineButtons
Menu.Separator = Separator

export default Menu
