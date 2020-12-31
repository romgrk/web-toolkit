import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSignalWeakSymbolic } from '../../assets/icons/network-wireless-signal-weak-symbolic.svg';

function NetworkWirelessSignalWeak({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSignalWeakSymbolic)}
    </span>
  );
}

export default NetworkWirelessSignalWeak;
