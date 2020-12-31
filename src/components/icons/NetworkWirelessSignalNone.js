import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSignalNoneSymbolic } from '../../assets/icons/network-wireless-signal-none-symbolic.svg';

function NetworkWirelessSignalNone({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSignalNoneSymbolic)}
    </span>
  );
}

export default NetworkWirelessSignalNone;
