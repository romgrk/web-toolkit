import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularGprsSymbolic } from '../../assets/icons/network-cellular-gprs-symbolic.svg';

function NetworkCellularGprs({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularGprsSymbolic)}
    </span>
  );
}

export default NetworkCellularGprs;
