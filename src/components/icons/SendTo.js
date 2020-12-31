import React from "react";
import cx from 'clsx';
import { ReactComponent as SendToSymbolic } from '../../assets/icons/send-to-symbolic.svg';

function SendTo({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(SendToSymbolic)}
    </span>
  );
}

export default SendTo;
