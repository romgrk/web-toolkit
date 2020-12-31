import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularHspaSymbolic } from '../../assets/icons/network-cellular-hspa-symbolic.svg';

function NetworkCellularHspa({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularHspaSymbolic)}
    </span>
  );
}

export default NetworkCellularHspa;
