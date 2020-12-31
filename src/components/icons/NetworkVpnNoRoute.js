import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkVpnNoRouteSymbolic } from '../../assets/icons/network-vpn-no-route-symbolic.svg';

function NetworkVpnNoRoute({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkVpnNoRouteSymbolic)}
    </span>
  );
}

export default NetworkVpnNoRoute;
