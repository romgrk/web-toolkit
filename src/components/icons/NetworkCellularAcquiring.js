import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularAcquiringSymbolic } from '../../assets/icons/network-cellular-acquiring-symbolic.svg';

function NetworkCellularAcquiring({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularAcquiringSymbolic)}
    </span>
  );
}

export default NetworkCellularAcquiring;
