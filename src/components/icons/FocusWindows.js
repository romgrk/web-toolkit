import React from "react";
import cx from 'clsx';
import { ReactComponent as FocusWindowsSymbolic } from '../../assets/icons/focus-windows-symbolic.svg';

function FocusWindows({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FocusWindowsSymbolic)}
    </span>
  );
}

export default FocusWindows;
