/*
 * setRef.js
 * source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/setRef.js
 */

export default function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
