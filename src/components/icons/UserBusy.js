import React from "react";
import cx from 'clsx';
import { ReactComponent as UserBusySymbolic } from '../../assets/icons/user-busy-symbolic.svg';

function UserBusy({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserBusySymbolic)}
    </span>
  );
}

export default UserBusy;
