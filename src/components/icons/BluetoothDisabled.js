import React from "react";
import cx from 'clsx';
import { ReactComponent as BluetoothDisabledSymbolic } from '../../assets/icons/bluetooth-disabled-symbolic.svg';

function BluetoothDisabled({ className, colored, ...rest }) {
  return (
    <span className={cx("Icon", className, { colored })} {...rest}>
      {React.createElement(BluetoothDisabledSymbolic)}
    </span>
  );
}

export default BluetoothDisabled;
