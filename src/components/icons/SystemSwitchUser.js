import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemSwitchUserSymbolic } from '../../assets/icons/system-switch-user-symbolic.svg';

function SystemSwitchUser({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemSwitchUserSymbolic)}
    </span>
  );
}

export default SystemSwitchUser;
