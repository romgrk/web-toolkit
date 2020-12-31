import React from "react";
import cx from 'clsx';
import { ReactComponent as WindowRestoreSymbolic } from '../../assets/icons/window-restore-symbolic.svg';

function WindowRestore({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(WindowRestoreSymbolic)}
    </span>
  );
}

export default WindowRestore;
