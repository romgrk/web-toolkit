import React from "react";
import cx from 'clsx';
import { ReactComponent as FocusTopBarSymbolic } from '../../assets/icons/focus-top-bar-symbolic.svg';

function FocusTopBar({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(FocusTopBarSymbolic)}
    </span>
  );
}

export default FocusTopBar;
