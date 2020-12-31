import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessOfflineSymbolic } from '../../assets/icons/network-wireless-offline-symbolic.svg';

function NetworkWirelessOffline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessOfflineSymbolic)}
    </span>
  );
}

export default NetworkWirelessOffline;
