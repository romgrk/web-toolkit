import React from "react";
import cx from 'clsx';
import { ReactComponent as UserOfflineSymbolic } from '../../assets/icons/user-offline-symbolic.svg';

function UserOffline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserOfflineSymbolic)}
    </span>
  );
}

export default UserOffline;
