import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWiredOfflineSymbolic } from '../../assets/icons/network-wired-offline-symbolic.svg';

function NetworkWiredOffline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWiredOfflineSymbolic)}
    </span>
  );
}

export default NetworkWiredOffline;
