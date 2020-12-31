import React from "react";
import cx from 'clsx';
import { ReactComponent as BluetoothHardwareDisabledSymbolic } from '../../assets/icons/bluetooth-hardware-disabled-symbolic.svg';

function BluetoothHardwareDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BluetoothHardwareDisabledSymbolic)}
    </span>
  );
}

export default BluetoothHardwareDisabled;
