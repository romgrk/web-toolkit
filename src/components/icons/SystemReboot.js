import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemRebootSymbolic } from '../../assets/icons/system-reboot-symbolic.svg';

function SystemReboot({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemRebootSymbolic)}
    </span>
  );
}

export default SystemReboot;
