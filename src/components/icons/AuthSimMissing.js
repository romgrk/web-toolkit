import React from "react";
import cx from 'clsx';
import { ReactComponent as AuthSimMissingSymbolic } from '../../assets/icons/auth-sim-missing-symbolic.svg';

function AuthSimMissing({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(AuthSimMissingSymbolic)}
    </span>
  );
}

export default AuthSimMissing;
