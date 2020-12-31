import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWiredNoRouteSymbolic } from '../../assets/icons/network-wired-no-route-symbolic.svg';

function NetworkWiredNoRoute({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWiredNoRouteSymbolic)}
    </span>
  );
}

export default NetworkWiredNoRoute;
