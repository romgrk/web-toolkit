import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessDisabledSymbolic } from '../../assets/icons/network-wireless-disabled-symbolic.svg';

function NetworkWirelessDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessDisabledSymbolic)}
    </span>
  );
}

export default NetworkWirelessDisabled;
