import React from "react";
import cx from 'clsx';
import { ReactComponent as UserHomeSymbolic } from '../../assets/icons/user-home-symbolic.svg';

function UserHome({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserHomeSymbolic)}
    </span>
  );
}

export default UserHome;
