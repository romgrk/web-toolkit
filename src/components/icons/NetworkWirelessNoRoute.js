import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessNoRouteSymbolic } from '../../assets/icons/network-wireless-no-route-symbolic.svg';

function NetworkWirelessNoRoute({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessNoRouteSymbolic)}
    </span>
  );
}

export default NetworkWirelessNoRoute;
