import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemLockScreenSymbolic } from '../../assets/icons/system-lock-screen-symbolic.svg';

function SystemLockScreen({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemLockScreenSymbolic)}
    </span>
  );
}

export default SystemLockScreen;
