import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularSignalExcellentSymbolic } from '../../assets/icons/network-cellular-signal-excellent-symbolic.svg';

function NetworkCellularSignalExcellent({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularSignalExcellentSymbolic)}
    </span>
  );
}

export default NetworkCellularSignalExcellent;
