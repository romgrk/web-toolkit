import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkWiredDisconnectedSymbolic } from '../../assets/icons/network-wired-disconnected-symbolic.svg';

function NetworkWiredDisconnected({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkWiredDisconnectedSymbolic)}
    </span>
  );
}

export default NetworkWiredDisconnected;
