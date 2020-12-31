import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkOfflineSymbolic } from '../../assets/icons/network-offline-symbolic.svg';

function NetworkOffline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkOfflineSymbolic)}
    </span>
  );
}

export default NetworkOffline;
