import React from "react";
import cx from 'clsx';
import { ReactComponent as WindowCloseSymbolic } from '../../assets/icons/window-close-symbolic.svg';

function WindowClose({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WindowCloseSymbolic)}
    </span>
  );
}

export default WindowClose;
