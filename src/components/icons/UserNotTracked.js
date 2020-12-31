import React from "react";
import cx from 'clsx';
import { ReactComponent as UserNotTrackedSymbolic } from '../../assets/icons/user-not-tracked-symbolic.svg';

function UserNotTracked({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserNotTrackedSymbolic)}
    </span>
  );
}

export default UserNotTracked;
