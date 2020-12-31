import React from "react";
import cx from 'clsx';
import { ReactComponent as UserStatusPendingSymbolic } from '../../assets/icons/user-status-pending-symbolic.svg';

function UserStatusPending({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserStatusPendingSymbolic)}
    </span>
  );
}

export default UserStatusPending;
