import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularOfflineSymbolic } from '../../assets/icons/network-cellular-offline-symbolic.svg';

function NetworkCellularOffline({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularOfflineSymbolic)}
    </span>
  );
}

export default NetworkCellularOffline;
