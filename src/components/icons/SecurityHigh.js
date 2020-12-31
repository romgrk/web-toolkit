import React from "react";
import cx from 'clsx';
import { ReactComponent as SecurityHighSymbolic } from '../../assets/icons/security-high-symbolic.svg';

function SecurityHigh({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SecurityHighSymbolic)}
    </span>
  );
}

export default SecurityHigh;
