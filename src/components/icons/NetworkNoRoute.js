import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkNoRouteSymbolic } from '../../assets/icons/network-no-route-symbolic.svg';

function NetworkNoRoute({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkNoRouteSymbolic)}
    </span>
  );
}

export default NetworkNoRoute;
