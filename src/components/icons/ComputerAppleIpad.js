import React from "react";
import cx from 'clsx';
import { ReactComponent as ComputerAppleIpadSymbolic } from '../../assets/icons/computer-apple-ipad-symbolic.svg';

function ComputerAppleIpad({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(ComputerAppleIpadSymbolic)}
    </span>
  );
}

export default ComputerAppleIpad;
