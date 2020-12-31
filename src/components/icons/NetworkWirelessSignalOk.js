import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSignalOkSymbolic } from '../../assets/icons/network-wireless-signal-ok-symbolic.svg';

function NetworkWirelessSignalOk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSignalOkSymbolic)}
    </span>
  );
}

export default NetworkWirelessSignalOk;
