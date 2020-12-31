import React from "react";
import cx from 'clsx';
import { ReactComponent as UserDesktopSymbolic } from '../../assets/icons/user-desktop-symbolic.svg';

function UserDesktop({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserDesktopSymbolic)}
    </span>
  );
}

export default UserDesktop;
