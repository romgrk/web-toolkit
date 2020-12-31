import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularConnectedSymbolic } from '../../assets/icons/network-cellular-connected-symbolic.svg';

function NetworkCellularConnected({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularConnectedSymbolic)}
    </span>
  );
}

export default NetworkCellularConnected;
