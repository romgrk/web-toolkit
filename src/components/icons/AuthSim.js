import React from "react";
import cx from 'clsx';
import { ReactComponent as AuthSimSymbolic } from '../../assets/icons/auth-sim-symbolic.svg';

function AuthSim({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AuthSimSymbolic)}
    </span>
  );
}

export default AuthSim;
