/*
 * useControlled.js
 */

import React from 'react'

export default function useControlled(controlled, defaultProp, setValueProp) {
  const { current: isControlled } = React.useRef(controlled !== undefined);
  const [valueState, setValueState] = React.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  if (isControlled && typeof setValueProp !== 'function')
    throw new Error('useControlled: setValue function required for controlled components')

  const setValue = React.useCallback((newValue) => {
    if (isControlled)
      setValueProp(newValue)
    else
      setValueState(newValue)
  }, [])

  return [value, setValue];
}
