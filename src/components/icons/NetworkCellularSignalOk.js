import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSignalOkSymbolic } from '../../assets/icons/network-cellular-signal-ok-symbolic.svg';

function NetworkCellularSignalOk({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSignalOkSymbolic)}
    </span>
  );
}

export default NetworkCellularSignalOk;
