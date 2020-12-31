import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSymbolic } from '../../assets/icons/network-wireless-symbolic.svg';

function NetworkWireless({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSymbolic)}
    </span>
  );
}

export default NetworkWireless;
