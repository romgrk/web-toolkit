import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessAcquiringSymbolic } from '../../assets/icons/network-wireless-acquiring-symbolic.svg';

function NetworkWirelessAcquiring({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessAcquiringSymbolic)}
    </span>
  );
}

export default NetworkWirelessAcquiring;
