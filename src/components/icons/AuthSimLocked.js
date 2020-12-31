import React from "react";
import cx from 'clsx';
import { ReactComponent as AuthSimLockedSymbolic } from '../../assets/icons/auth-sim-locked-symbolic.svg';

function AuthSimLocked({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AuthSimLockedSymbolic)}
    </span>
  );
}

export default AuthSimLocked;
