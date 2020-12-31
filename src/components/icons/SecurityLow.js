import React from "react";
import cx from 'clsx';
import { ReactComponent as SecurityLowSymbolic } from '../../assets/icons/security-low-symbolic.svg';

function SecurityLow({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SecurityLowSymbolic)}
    </span>
  );
}

export default SecurityLow;
