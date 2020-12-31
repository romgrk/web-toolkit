import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessConnectedSymbolic } from '../../assets/icons/network-wireless-connected-symbolic.svg';

function NetworkWirelessConnected({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessConnectedSymbolic)}
    </span>
  );
}

export default NetworkWirelessConnected;
