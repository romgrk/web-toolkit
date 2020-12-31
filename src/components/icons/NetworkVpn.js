import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkVpnSymbolic } from '../../assets/icons/network-vpn-symbolic.svg';

function NetworkVpn({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkVpnSymbolic)}
    </span>
  );
}

export default NetworkVpn;
