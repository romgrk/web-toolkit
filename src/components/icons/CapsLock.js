import React from "react";
import cx from 'clsx';
import { ReactComponent as CapsLockSymbolic } from '../../assets/icons/caps-lock-symbolic.svg';

function CapsLock({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(CapsLockSymbolic)}
    </span>
  );
}

export default CapsLock;
