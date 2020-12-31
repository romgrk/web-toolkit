import React from "react";
import cx from 'clsx';
import { ReactComponent as UserAvailableSymbolic } from '../../assets/icons/user-available-symbolic.svg';

function UserAvailable({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserAvailableSymbolic)}
    </span>
  );
}

export default UserAvailable;
