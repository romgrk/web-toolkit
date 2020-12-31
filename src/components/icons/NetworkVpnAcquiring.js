import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkVpnAcquiringSymbolic } from '../../assets/icons/network-vpn-acquiring-symbolic.svg';

function NetworkVpnAcquiring({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkVpnAcquiringSymbolic)}
    </span>
  );
}

export default NetworkVpnAcquiring;
