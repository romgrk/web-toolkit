import React from "react";
import cx from 'clsx';
import { ReactComponent as UserAwaySymbolic } from '../../assets/icons/user-away-symbolic.svg';

function UserAway({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(UserAwaySymbolic)}
    </span>
  );
}

export default UserAway;
