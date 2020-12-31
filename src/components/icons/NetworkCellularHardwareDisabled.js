import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularHardwareDisabledSymbolic } from '../../assets/icons/network-cellular-hardware-disabled-symbolic.svg';

function NetworkCellularHardwareDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularHardwareDisabledSymbolic)}
    </span>
  );
}

export default NetworkCellularHardwareDisabled;
