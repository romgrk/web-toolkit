import React from "react";
import cx from 'clsx';
import { ReactComponent as SystemUsersSymbolic } from '../../assets/icons/system-users-symbolic.svg';

function SystemUsers({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SystemUsersSymbolic)}
    </span>
  );
}

export default SystemUsers;
