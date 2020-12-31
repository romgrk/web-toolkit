import React from "react";
import cx from 'clsx';
import { ReactComponent as UserInfoSymbolic } from '../../assets/icons/user-info-symbolic.svg';

function UserInfo({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserInfoSymbolic)}
    </span>
  );
}

export default UserInfo;
