import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWirelessSignalExcellentSymbolic } from '../../assets/icons/network-wireless-signal-excellent-symbolic.svg';

function NetworkWirelessSignalExcellent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWirelessSignalExcellentSymbolic)}
    </span>
  );
}

export default NetworkWirelessSignalExcellent;
