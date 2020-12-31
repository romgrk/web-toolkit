import React from "react";
import cx from 'clsx';
import { ReactComponent as UserInvisibleSymbolic } from '../../assets/icons/user-invisible-symbolic.svg';

function UserInvisible({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserInvisibleSymbolic)}
    </span>
  );
}

export default UserInvisible;
