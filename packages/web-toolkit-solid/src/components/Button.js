import cx from 'clsx'
import { unpick } from '../utils/props'

const ownProps = new Set([
  'className',
  'children',
  'size',
  'disabled',
  'circular',
  'flat',
  'link',
  'active',
  'hover',
  'text',
  'isImageButton',
  'primary',
  'danger',
])

export default function Button(props) {
  const rest = unpick(ownProps, props)
  return (
    <button
      {...props}
      className={cx('Button', props.size, {
        disabled: props.disabled,
        circular: props.circular,
        flat: props.flat,
        link: props.link,
        active: props.active,
        hover: props.hover,
        'text-button': props.text,
        'image-button': props.isImageButton,
        'suggested-action': props.primary,
        'destructive-action': props.danger,
      }) + ' ' + cx(props.className)}
      {...rest}
    >
      {props.children}
    </button>
  )
}
