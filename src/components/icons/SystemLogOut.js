import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemLogOutSymbolic } from '../../assets/icons/system-log-out-symbolic.svg';

function SystemLogOut({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemLogOutSymbolic)}
    </span>
  );
}

export default SystemLogOut;
