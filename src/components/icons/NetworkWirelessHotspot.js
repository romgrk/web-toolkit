import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessHotspotSymbolic } from '../../assets/icons/network-wireless-hotspot-symbolic.svg';

function NetworkWirelessHotspot({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessHotspotSymbolic)}
    </span>
  );
}

export default NetworkWirelessHotspot;
