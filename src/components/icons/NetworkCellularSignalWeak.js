import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSignalWeakSymbolic } from '../../assets/icons/network-cellular-signal-weak-symbolic.svg';

function NetworkCellularSignalWeak({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSignalWeakSymbolic)}
    </span>
  );
}

export default NetworkCellularSignalWeak;
