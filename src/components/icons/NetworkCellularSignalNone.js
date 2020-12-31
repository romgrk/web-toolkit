import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSignalNoneSymbolic } from '../../assets/icons/network-cellular-signal-none-symbolic.svg';

function NetworkCellularSignalNone({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSignalNoneSymbolic)}
    </span>
  );
}

export default NetworkCellularSignalNone;
