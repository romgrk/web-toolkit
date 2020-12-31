import React from "react";
import cx from 'clsx';
import { ReactComponent as NetworkCellularDisabledSymbolic } from '../../assets/icons/network-cellular-disabled-symbolic.svg';

function NetworkCellularDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(NetworkCellularDisabledSymbolic)}
    </span>
  );
}

export default NetworkCellularDisabled;
