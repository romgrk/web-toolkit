import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularNoRouteSymbolic } from '../../assets/icons/network-cellular-no-route-symbolic.svg';

function NetworkCellularNoRoute({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularNoRouteSymbolic)}
    </span>
  );
}

export default NetworkCellularNoRoute;
