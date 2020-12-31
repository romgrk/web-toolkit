import React from "react";
import cx from 'clsx';
import { ReactComponent as UserIdleSymbolic } from '../../assets/icons/user-idle-symbolic.svg';

function UserIdle({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserIdleSymbolic)}
    </span>
  );
}

export default UserIdle;
