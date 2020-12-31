import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSignalGoodSymbolic } from '../../assets/icons/network-wireless-signal-good-symbolic.svg';

function NetworkWirelessSignalGood({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSignalGoodSymbolic)}
    </span>
  );
}

export default NetworkWirelessSignalGood;
