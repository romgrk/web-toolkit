import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessHardwareDisabledSymbolic } from '../../assets/icons/network-wireless-hardware-disabled-symbolic.svg';

function NetworkWirelessHardwareDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessHardwareDisabledSymbolic)}
    </span>
  );
}

export default NetworkWirelessHardwareDisabled;
