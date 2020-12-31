import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkTransmitSymbolic } from '../../assets/icons/network-transmit-symbolic.svg';

function NetworkTransmit({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkTransmitSymbolic)}
    </span>
  );
}

export default NetworkTransmit;
