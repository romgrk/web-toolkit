import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkTransmitReceiveSymbolic } from '../../assets/icons/network-transmit-receive-symbolic.svg';

function NetworkTransmitReceive({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkTransmitReceiveSymbolic)}
    </span>
  );
}

export default NetworkTransmitReceive;
