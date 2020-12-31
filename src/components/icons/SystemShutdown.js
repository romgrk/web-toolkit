import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemShutdownSymbolic } from '../../assets/icons/system-shutdown-symbolic.svg';

function SystemShutdown({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemShutdownSymbolic)}
    </span>
  );
}

export default SystemShutdown;
